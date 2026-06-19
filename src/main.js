// src/main.js - 앱 진입점 (인증, 방 관리, 실시간 동기화, 이벤트 바인딩)
import "./stonk-ui.css"; // STONK 공용 폴리시(폰트·포커스·모션) — 먼저 로드
import "./style.css"; // 토스 다크 테마 — 뒤에서 로드해 토큰(색/표면/모서리)의 최종 권한을 가짐
import { auth, db, isConfigured } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  ref,
  set,
  get,
  update,
  remove,
  push,
  onValue,
  off,
  runTransaction,
  onDisconnect,
  serverTimestamp,
} from "firebase/database";
import * as game from "./game.js";
import * as ui from "./ui.js";
import * as site from "./siteConfig.js";
import * as history from "./history.js";
import { getEntryRoomCode, isLocalDev, showHomeGate, hideHomeGate } from "./homeGate.js";
import { applyEquippedBackground } from "./equip.js";

// 관리자 이메일 — 이 계정만 방을 만들고 없앨 수 있다
// 관리자 — 이 Firebase UID(또는 이메일)만 방을 만들고 없앨 수 있다
const ADMIN_UID = "yaV8N60yIiUggaWNpNF2VhkCwxb2";
const ADMIN_EMAIL = "tomem@naver.com";

// 단일 방 운영: 방 코드 개념을 없애고 고정 방 하나만 사용한다.
// (사용자에겐 '방 코드'를 노출하지 않는다. 시장 시작/리셋은 STONK Admin 에서만.)
const MAIN_ROOM = "MAIN";

// ----- 전역 상태 -----
const state = {
  uid: null,
  email: null,
  // 닉네임은 Home에서 설정한 값(stonk:lastNickname)도 fallback 으로 인정
  nickname: localStorage.getItem("mb_nickname") || localStorage.getItem("stonk:lastNickname") || "",
  roomCode: null,
  roomData: null,
  selectedStockId: null,
  tickTimer: null, // 시장 드라이버(현재 클라이언트가 드라이버일 때): 시장 틱
  isDriver: false, // 현재 이 클라이언트가 시장 진행 드라이버인지
  tickLeaseRenewAt: 0, // 드라이버 리스 마지막 갱신 시각
  driverWatch: null, // 드라이버 페일오버 감시 타이머(방장 부재 감지)
  liveState: history.createLiveState(), // 드라이버 전용: 라이브 1분 캔들 누적
  catchupDoneFor: null, // 이 방에서 catch-up 시도 완료 표시(중복 방지)
  clockTimer: null, // 남은 시간 표시용
  roomRef: null,
  lastStatus: null,
  // 성능: 방 스냅샷에서 캔들 history 를 제외하고(렌더 비용↓), 선택 종목 history 만 따로 구독
  histRef: null, // 선택 종목 history 구독 ref
  histStockId: null, // 현재 history 를 구독 중인 종목 id
  selectedHistory: null, // { id, data } 선택 종목의 최신 history
  renderQueued: false, // requestAnimationFrame 렌더 코얼레스 플래그
  // Phase 3: 중간 참여(late-join) 승인 대기 구독
  joinReqRef: null,
  joinReqId: null,
  // 관리자 페이지 링크 노출 여부 (/admins/{uid}=true)
  isDbAdmin: false,
};

// ----- 시장 드라이버(failover) 설정 -----
// 한 방의 시장 진행(틱)은 항상 "드라이버" 한 명만 수행한다(중복 쓰기 방지 = Firebase 사용량 유지).
// 방장이 접속 중이면 방장이 드라이버. 방장이 나가면 리스(lease)가 만료되고
// 접속 중인 다른 플레이어가 리스를 잡아 시장을 이어서 진행한다.
const TICK_LEASE_TTL = 15000; // 리스 유효시간(ms) — 이 시간 갱신 없으면 다른 유저가 인수
const TICK_LEASE_RENEW_MS = 5000; // 드라이버가 리스를 갱신하는 주기(ms)
const DRIVER_WATCH_MS = 4000; // 방장 부재 감지 폴링 주기(ms, DB 쓰기 없음)

// 방 진행 상태 분류 (status 필드 호환)
const PLAYING_STATUSES = ["playing", "active", "running"];
const CLOSED_STATUSES = ["ended", "closed", "finished"];
function isPlayingStatus(s) { return PLAYING_STATUSES.includes(s); }
function isClosedStatus(s) { return CLOSED_STATUSES.includes(s); }

function isAdmin() {
  return state.uid === ADMIN_UID || (state.email || "").toLowerCase() === ADMIN_EMAIL;
}

// ----- 시작 -----
if (!isConfigured || !auth || !db) {
  ui.showFirebaseError(
    "src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."
  );
} else {
  boot();
}

function boot() {
  // 5초 안에 연결되지 않으면 안내 배너 표시
  let connected = false;
  const connTimeout = setTimeout(() => {
    if (!connected) {
      ui.showFirebaseError(
        "Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요."
      );
    }
  }, 5000);
  onValue(ref(db, ".info/connected"), (snap) => {
    if (snap.val() === true) {
      connected = true;
      clearTimeout(connTimeout);
      document.getElementById("fbError").classList.add("hidden");
    }
  });

  // ----- 패치 후 강제 새로고침 브로드캐스트 -----
  // STONK Admin 에서 broadcast/reloadAt 을 갱신하면, 접속 중인 모든 battle 클라이언트가
  // 시장 데이터는 그대로 둔 채 페이지만 새로고침해 새로 배포된 코드를 받는다.
  // (시장 재시작과 무관 — 종목/플레이어 자산은 건드리지 않는다.)
  // 클럭 차이에 안전하도록: 첫 스냅샷은 기준값으로만 저장하고, 이후 값이 커지면 새로고침.
  watchForceReload();
}

let reloadBaseline = null; // 구독 시작 시점에 본 reloadAt(이 값보다 커지면 새로고침)
function watchForceReload() {
  // 단일 방 운영: 신호를 rooms/MAIN 아래에 둔다(루트 broadcast 는 보안 규칙상 쓰기 거부됨).
  onValue(ref(db, `rooms/${MAIN_ROOM}/broadcast/reloadAt`), (snap) => {
    const at = Number(snap.val()) || 0;
    if (reloadBaseline === null) { reloadBaseline = at; return; } // 첫 스냅샷 = 기준값
    if (at > reloadBaseline) {
      reloadBaseline = at;
      try { ui.showToast?.("새 버전이 배포되어 새로고침합니다…", "up"); } catch (e) {}
      // 토스트가 잠깐 보이도록 약간의 지연 후 reload (Vite 해시 번들이라 새 코드 수신)
      setTimeout(() => location.reload(), 400);
    }
  });

  // 이메일/비밀번호 로그인 상태 감시
  // (로그인되어 있으면 바로 진행, 아니면 로그인 화면 표시)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      hideHomeGate(); // 세션 복원 완료 → 게이트가 떠 있었다면 제거
      state.uid = user.uid;
      state.email = user.email || null;
      localStorage.setItem("mb_playerId", user.uid);
      void refreshAdminLink();
      afterLogin();
    } else {
      state.uid = null;
      state.email = null;
      state.isDbAdmin = false;
      const na = document.getElementById("navAdmin");
      if (na) na.hidden = true; // 로그아웃/미로그인 시 관리자 링크 숨김
      // 로그인 화면 제거: 미로그인이면 board/wiki 처럼 STONK Home 으로 안내하는 게이트만 띄운다.
      showHomeGate({
        message: "로그인은 STONK Home에서 진행합니다. Home에서 입장하면 자동으로 연결됩니다.",
      });
    }
  });
}

// 관리자 페이지 링크 노출 제어: 하드코딩 관리자 또는 /admins/{uid}=true 일 때만 표시.
// auth 미준비/연결 실패/일반 사용자는 숨김(기본 hidden).
async function refreshAdminLink() {
  const navAdmin = document.getElementById("navAdmin");
  if (!navAdmin) return;
  let isAdm = isAdmin(); // 하드코딩 관리자(레거시 호환)
  if (!isAdm && state.uid && db) {
    try {
      const snap = await get(ref(db, "admins/" + state.uid));
      isAdm = snap.val() === true;
    } catch (e) {
      isAdm = false;
    }
  }
  state.isDbAdmin = isAdm;
  navAdmin.hidden = !isAdm;
}

// 로그인 후: 닉네임 확인 → 고정 방(MAIN) 에 바로 입장. (방 선택/생성 단계 없음)
async function afterLogin() {
  if (!state.nickname) {
    ui.showScreen("screen-auth");
    return;
  }
  enterRoom(MAIN_ROOM);
}

function newPlayer(nickname) {
  return {
    nickname,
    cash: 0,
    holdings: null,
    totalAsset: 0,
    joinedAt: serverTimestamp(),
    connected: true,
  };
}

// ----- 단일 방 자동 등록 -----
// 방 코드/생성/대기실/late-join 승인 절차가 없다. 시장이 진행 중이면 누구나 즉시 참여한다.
// 처음 들어온 플레이어는 players/{uid} 가 자동 생성되고 시작 자본을 받는다.
let joiningRoom = false;
async function ensureJoined(room) {
  if (!state.uid) return false;
  if (room.players && room.players[state.uid]) return true; // 이미 참가자
  if (joiningRoom) return false;
  joiningRoom = true;
  const initialCash = Number(room.settings?.initialCash) || game.START_CASH;
  const now = Date.now();
  try {
    // players/{uid} 만 부분 생성 (전체 set 금지) — 시작 자본 지급
    await update(ref(db, `rooms/${MAIN_ROOM}/players/${state.uid}`), {
      nickname: (state.nickname && state.nickname.trim()) || ("플레이어-" + String(state.uid).slice(-4)),
      cash: initialCash,
      holdings: null,
      totalAsset: initialCash,
      joinedAt: now,
      connected: true,
    });
  } catch (e) {
    console.warn("[join] 자동 등록 실패:", e);
    return false;
  } finally {
    joiningRoom = false;
  }
  return true; // 등록 직후 다음 onValue 스냅샷에서 참가자로 반영됨
}

// late-join 승인 대기 구독은 더 이상 쓰지 않지만, 호출부 호환을 위해 정리 함수만 남긴다.
function stopWatchingJoinRequest() {
  if (state.joinReqRef) { off(state.joinReqRef); state.joinReqRef = null; }
  state.joinReqId = null;
}

// ----- 방 입장 후 실시간 구독 -----
function enterRoom(code) {
  stopWatchingJoinRequest(); // 입장했으면 승인 대기 구독 종료
  state.roomCode = code;
  localStorage.setItem("mb_roomCode", code);
  site.setLastRoomCode(code);
  updateSiteNav(code);

  // 접속 상태 표시 + 연결 끊김 시 자동으로 connected=false
  const connRef = ref(db, `rooms/${code}/players/${state.uid}/connected`);
  set(connRef, true).catch(() => {});
  onDisconnect(connRef).set(false).catch(() => {});

  if (state.roomRef) off(state.roomRef);
  state.roomRef = ref(db, `rooms/${code}`);
  // 성능 핵심: snap.val() 은 history(종목당 수백 캔들)까지 통째로 매번 materialize 하므로
  // snapToRoom 으로 history 를 제외한 "가벼운 방" 만 만든다. 선택 종목 history 는 별도 구독.
  onValue(state.roomRef, (snap) => onRoomUpdate(snapToRoom(snap)), (e) => {
    console.error("[room] 구독 오류:", e);
  });
}

// 방 스냅샷 → 렌더용 가벼운 객체(각 종목의 history 서브트리는 .val() 하지 않아 비용 0).
// 시세 틱마다 history 가 커질수록 snap.val() 전체 materialize 가 렉의 핵심 원인이었다.
function snapToRoom(snap) {
  if (!snap || !snap.exists()) return null;
  const room = {};
  snap.forEach((child) => {
    if (child.key === "stocks") {
      const stocks = {};
      child.forEach((st) => {
        const sv = {};
        st.forEach((f) => { if (f.key !== "history") sv[f.key] = f.val(); });
        stocks[st.key] = sv;
      });
      room.stocks = stocks;
    } else {
      room[child.key] = child.val();
    }
  });
  return room;
}

// 가벼운 방에 선택 종목의 최신 history 만 다시 붙인다(차트 buildSeries 용).
function attachSelectedHistory(room) {
  const sh = state.selectedHistory;
  if (sh && sh.id && room && room.stocks && room.stocks[sh.id]) {
    room.stocks[sh.id].history = sh.data || null;
  }
}

// 선택 종목의 history 만 따로 구독(바뀔 때마다 재구독). 나머지 종목 history 는 받지 않는다.
function subscribeSelectedHistory(stockId) {
  if (stockId === state.histStockId) return; // 동일 종목 → 재구독 불필요
  if (state.histRef) { off(state.histRef); state.histRef = null; }
  state.histStockId = stockId || null;
  state.selectedHistory = stockId ? { id: stockId, data: null } : null;
  if (!stockId || !state.roomCode) return;
  state.histRef = ref(db, `rooms/${state.roomCode}/stocks/${stockId}/history`);
  onValue(state.histRef, (snap) => {
    if (state.histStockId !== stockId) return; // 그 사이 다른 종목으로 전환됨
    state.selectedHistory = { id: stockId, data: snap.val() || null };
    if (state.roomData && state.roomData.stocks && state.roomData.stocks[stockId]) {
      state.roomData.stocks[stockId].history = state.selectedHistory.data;
    }
    scheduleRender(); // 차트만 갱신해도 되지만 코얼레스되므로 비용 낮음
  }, (e) => console.error("[history] 구독 오류:", e));
}

// 렌더 코얼레스: 다발성 onValue 가 와도 프레임당 renderGame 1회만 실행.
function scheduleRender() {
  if (state.renderQueued) return;
  state.renderQueued = true;
  requestAnimationFrame(() => {
    state.renderQueued = false;
    if (state.roomData && state.roomData.status === "playing") ui.renderGame(state);
  });
}

// ===== 테마(라이트 기본 + 다크 토글) =====
function applyTheme(t) {
  const theme = t === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("stonk:theme", theme); } catch (e) {}
  const b = document.getElementById("themeToggle");
  if (b) b.textContent = theme === "dark" ? "☀️" : "🌙";
}
function initTheme() {
  let t = "light";
  try { t = localStorage.getItem("stonk:theme") || "light"; } catch (e) {}
  applyTheme(t);
}
function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
}

// ===== 토스 탭 라우팅 =====
function setTab(name) {
  const sg = document.getElementById("screen-game");
  if (!sg) return;
  sg.dataset.tab = name;
  document.querySelectorAll(".tnav-tab").forEach((t) => t.classList.toggle("is-active", t.dataset.tab === name));
  document.querySelectorAll(".tab-view").forEach((v) => v.classList.toggle("hidden", v.dataset.view !== name));
  if (name === "detail") ui.destroyChart(); // 상세 진입 시 캔버스 재그리기 강제(가시화 후 정확한 크기로)
  if (state.roomData) scheduleRender();
}

// 종목 선택 → 상세 탭 진입 (홈/스크리너 행 클릭 공통)
function selectStock(id) {
  if (!id) return;
  ui.hideHoverCard();
  state.selectedStockId = id;
  subscribeSelectedHistory(id); // 선택 종목 history 로 구독 전환
  prefillOrderPrices(id);
  setTab("detail");
}

// 종목 행 호버 미리보기(클릭→상세는 그대로, 호버 시 미니 차트 팝업)
let hoverTimer = null, hoverShownId = null;
function positionHoverCard(rect) {
  const el = document.getElementById("stockHover");
  if (!el) return;
  const w = el.offsetWidth || 300, h = el.offsetHeight || 240;
  let left = rect.right + 12;
  if (left + w > window.innerWidth - 8) left = rect.left - w - 12;
  if (left < 8) left = 8;
  let top = rect.top;
  if (top + h > window.innerHeight - 8) top = window.innerHeight - h - 8;
  if (top < 8) top = 8;
  el.style.left = left + "px";
  el.style.top = top + "px";
}
function bindHoverPreview(listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  list.addEventListener("mouseover", (e) => {
    const item = e.target.closest(".rank-item");
    if (!item || !state.roomData) return;
    const id = item.dataset.id;
    if (id === hoverShownId) return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      hoverShownId = id;
      ui.renderHoverCard(state.roomData, id);
      positionHoverCard(item.getBoundingClientRect());
    }, 90);
  });
  list.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);
    hoverShownId = null;
    ui.hideHoverCard();
  });
}

// ----- 방 데이터 변경 시 화면 갱신 (단일 방 운영) -----
function onRoomUpdate(room) {
  // 방이 아직 없음(관리자가 시장을 한 번도 시작하지 않음) → 준비 중 안내
  if (!room) {
    stopDriving(); stopDriverWatch(); stopClock();
    state.roomData = null;
    state.lastStatus = null;
    showMarketWait();
    return;
  }
  state.roomData = room;
  attachSelectedHistory(room); // 가벼운 방에 선택 종목 history 재부착(차트용)

  // 착용한 배경화면(스킨) 적용
  applyEquippedBackground(room.players && state.uid && room.players[state.uid] ? room.players[state.uid].equippedBackground : null);

  if (room.status === "playing") {
    // 단일 방: 시장이 열려 있으면 누구나 즉시 참여 — 아직 참가자가 아니면 자동 등록 후 다음 스냅샷 대기
    if (state.uid && !(room.players && room.players[state.uid])) {
      void ensureJoined(room);
      return;
    }
    if (state.lastStatus !== "playing") {
      ui.showScreen("screen-game");
      ui.resetLocalHistory(); // 새 시장 시작 시 로컬 차트 기록 초기화
      startClock();
      // 첫 종목 자동 선택
      const ids = Object.keys(room.stocks || {});
      if (!state.selectedStockId && ids.length) state.selectedStockId = ids[0];
    }
    // 선택 종목이 바뀌었으면(자동 선택 포함) 그 종목 history 만 구독 — 동일 id 면 no-op
    if (state.selectedStockId !== state.histStockId) subscribeSelectedHistory(state.selectedStockId);
    scheduleRender();
    // 방 로드 시 1회: 사람이 없던 시간(경과)을 보정 (중복은 lock 으로 방지)
    void maybeCatchUp(room);
    // 드라이버 결정: 접속 중인 플레이어 중 한 명이 시장 진행을 맡음
    void ensureMarketDriver(room);
    startDriverWatch();
  } else {
    // playing 이 아닌 모든 상태(waiting/ended/미정) → 시장 준비 중 안내. 일반 이용자는 시장을 시작/종료할 수 없음.
    stopDriving();
    stopDriverWatch();
    stopClock();
    subscribeSelectedHistory(null);
    ui.destroyChart();
    showMarketWait();
  }
  state.lastStatus = room.status;
}

// 시장이 아직 열리지 않았을 때(방 없음/대기/종료) 보여줄 안내. (관리자가 STONK Admin에서 시장을 시작)
function showMarketWait() {
  ui.showScreen("screen-wait");
  const nick = document.getElementById("waitNickname");
  if (nick) nick.textContent = state.nickname ? `${state.nickname} 님` : "";
}

// ----- 방 로드 시 경과 보정 (battle 이 1차 보정 주체) -----
// needsCatchup 일 때만, 방당 1회 시도. lock 으로 다중 접속 중복 보정 방지.
async function maybeCatchUp(room) {
  if (!room || room.status !== "playing") return;
  // 규칙 완화(1.4.x failover): 같은 방의 인증 유저 누구나 보정 가능.
  // 동시 다중 보정은 history.runCatchUp 내부의 catchupLock 트랜잭션으로 1명만 수행된다.
  if (!state.uid) return;
  if (state.catchupDoneFor === state.roomCode) return;
  // 마감 시간엔 보정 안 함(닫힌 시장을 시뮬레이션하지 않음)
  if (!isMarketOpenNow(room)) { state.catchupDoneFor = state.roomCode; return; }
  // 마지막 tick 이 이번 개장 세션 시작보다 이전이면(밤새 마감) → 닫힌 시간은 건너뛰고 신선하게 재개
  const lastTick = (room.market && room.market.lastTickAt) || room.marketTick || 0;
  if (lastTick && lastTick < marketSessionStartTs(room)) {
    state.catchupDoneFor = state.roomCode;
    try { await set(ref(db, `rooms/${state.roomCode}/market/lastTickAt`), Date.now()); } catch (e) {}
    return;
  }
  if (!history.needsCatchup(room)) { state.catchupDoneFor = state.roomCode; return; }
  state.catchupDoneFor = state.roomCode; // 시도 표시(반복 호출 방지)
  try {
    const res = await history.runCatchUp(state.roomCode, room, state.uid);
    if (res.applied) {
      ui.resetLocalHistory();
      ui.showToast(`시장 경과 보정 완료 (${Math.round(res.elapsed / 60000)}분, 캔들 ${res.candlesWritten}개)`, "up");
    }
  } catch (e) {
    console.warn("[catchup] 보정 실패:", e);
  }
}

// ===== 시장 드라이버 페일오버 =====
// 리스(market/tickLease) 트랜잭션으로 항상 한 명만 드라이버가 되도록 보장한다.
// - 방장이 접속 중이면 방장이 드라이버를 유지(다른 유저는 양보).
// - 방장이 나가면 TICK_LEASE_TTL 후 리스가 만료되고, 접속 중인 다른 플레이어가 인수한다.

// 리스 획득/갱신 트랜잭션 — 유효한 타인의 리스가 있으면 중단(false).
async function acquireTickLease() {
  if (!state.roomCode || !state.uid) return false;
  const now = Date.now();
  try {
    const res = await runTransaction(
      ref(db, `rooms/${state.roomCode}/market/tickLease`),
      (cur) => {
        if (cur && cur.by !== state.uid && (cur.expiresAt || 0) > now) return; // 타인이 유효 리스 보유 → 중단
        return { by: state.uid, at: now, expiresAt: now + TICK_LEASE_TTL };
      }
    );
    return res.committed;
  } catch (e) {
    return false;
  }
}

// 방 상태에 따라 드라이버 여부를 결정한다(폴링/방 업데이트 양쪽에서 호출).
// ===== 시장 개장시간 (기본 18~24시, admin 이 rooms/{code}/market.openHour·closeHour 로 조정) =====
function getMarketHours(room) {
  const m = (room && room.market) || {};
  let oh = Number.isFinite(m.openHour) ? Math.round(m.openHour) : 18;
  let ch = Number.isFinite(m.closeHour) ? Math.round(m.closeHour) : 24;
  oh = Math.max(0, Math.min(24, oh));
  ch = Math.max(0, Math.min(24, ch));
  return { oh, ch };
}
function isMarketOpenNow(room) {
  const { oh, ch } = getMarketHours(room);
  if (oh === ch) return true; // 동일값 → 24시간 개장으로 간주
  const h = new Date().getHours();
  return ch > oh ? (h >= oh && h < ch) : (h >= oh || h < ch); // ch>oh: 같은날 / else: 자정 넘김
}
// 현재 개장 세션의 시작 시각(ts). lastTick 이 이보다 이전이면 "밤새 마감" 으로 보고 보정하지 않는다.
function marketSessionStartTs(room) {
  const { oh, ch } = getMarketHours(room);
  const d = new Date();
  const todayOpen = new Date(d.getFullYear(), d.getMonth(), d.getDate(), oh, 0, 0, 0).getTime();
  if (ch >= oh) return todayOpen;
  return d.getHours() < ch ? todayOpen - 86400000 : todayOpen; // 자정 넘김: 새벽이면 어제 open
}

async function ensureMarketDriver(room) {
  room = room || state.roomData;
  if (!room || room.status !== "playing") { stopDriving(); return; }
  if (!isMarketOpenNow(room)) { stopDriving(); return; } // 마감 시간 → 드라이버 없음(시세 동결, 쓰기 0)
  if (!state.uid) return;

  const now = Date.now();
  const lease = room.market && room.market.tickLease;
  const leaseValidByOther = lease && lease.by !== state.uid && (lease.expiresAt || 0) > now;

  // 이미 내가 드라이버면 유지(틱 루프가 리스를 갱신). 타인이 유효 리스를 잡았으면 양보.
  if (state.isDriver) {
    if (leaseValidByOther) stopDriving();
    return;
  }

  const iAmHost = room.hostId === state.uid;
  const hostConnected = room.hostId && room.players?.[room.hostId]?.connected !== false;

  if (leaseValidByOther) return;            // 다른 드라이버가 진행 중 → 대기
  if (!iAmHost && hostConnected) return;    // 방장이 접속 중 → 방장에게 양보

  // 드라이버 공석: 리스를 시도해 잡으면 내가 진행한다.
  const got = await acquireTickLease();
  if (got) startDriving();
}

function startDriving() {
  if (state.tickTimer) return;
  state.isDriver = true;
  state.tickLeaseRenewAt = Date.now();
  state.tickTimer = setInterval(async () => {
    const room = state.roomData;
    if (!room || room.status !== "playing") { stopDriving(); return; }
    if (!isMarketOpenNow(room)) { stopDriving(); return; } // 마감 시간 진입 → 틱 중단(시세 동결)
    try {
      // 리스 갱신 주기 도래 시: 갱신 실패(타인이 인수)하면 드라이버 중단
      if (Date.now() - state.tickLeaseRenewAt >= TICK_LEASE_RENEW_MS) {
        const ok = await acquireTickLease();
        if (!ok) { stopDriving(); return; }
        state.tickLeaseRenewAt = Date.now();
      }
      // 시간 제한 없음 — 방장이 직접 종료할 때까지 계속 진행
      await game.marketTick(state.roomCode, room);
      // 공모주 청약 진행/마감/상장 처리
      await game.processIpo(state.roomCode, room);
      // 예약(지정가) 주문 점검·체결
      await game.processOrders(state.roomCode, room);
      // 압축 캔들 히스토리: 매 tick 저장 대신 1분 경계에서만 부분 저장
      await history.flushLiveCandles(state.roomCode, room, state.liveState);
    } catch (e) {
      console.error("[tick] 시장 틱 오류:", e);
    }
  }, game.TICK_MS);
}

function stopDriving() {
  if (state.tickTimer) {
    clearInterval(state.tickTimer);
    state.tickTimer = null;
  }
  state.isDriver = false;
}

// 내가 보유한 리스만 비운다(타인 리스는 건드리지 않음). 떠날 때 빠른 인수 유도.
async function releaseTickLeaseIfMine() {
  if (!state.roomCode || !state.uid) return;
  const code = state.roomCode;
  try {
    await runTransaction(ref(db, `rooms/${code}/market/tickLease`), (cur) => {
      if (cur && cur.by === state.uid) return null; // 내 리스만 해제
      return cur; // 타인/공석은 그대로
    });
  } catch (e) {}
}

// 방장 부재를 DB 변화 없이도 감지하기 위한 폴링(쓰기 없음 — 공석일 때만 리스 시도).
function startDriverWatch() {
  if (state.driverWatch) return;
  state.driverWatch = setInterval(() => { void ensureMarketDriver(state.roomData); }, DRIVER_WATCH_MS);
}

function stopDriverWatch() {
  if (state.driverWatch) {
    clearInterval(state.driverWatch);
    state.driverWatch = null;
  }
}

// ----- 경과 시간 표시 (모든 플레이어, 카운트업) -----
function startClock() {
  stopClock();
  state.clockTimer = setInterval(() => {
    const room = state.roomData;
    if (!room || room.status !== "playing") return;
    // 개장시간 밖이면 '장 마감' 배너 + 시세/진행바 동결
    const closed = !isMarketOpenNow(room);
    const cb = document.getElementById("marketClosed");
    if (cb) {
      cb.classList.toggle("hidden", !closed);
      if (closed) cb.textContent = `🌙 장 마감 — 매일 ${String(getMarketHours(room).oh).padStart(2, "0")}:00 개장 (${String(getMarketHours(room).ch % 24).padStart(2, "0")}:00 마감)`;
    }
    if (closed) return; // 마감 중: 가격·진행바 동결
    ui.updateTimer(Date.now() - (room.startedAt || Date.now()));
    ui.tickIpoCountdown(room); // 공모 청약 마감 카운트다운
    ui.updateTickProgress(room); // 다음 변동까지 진행바/카운트다운 (체감 개선, tick 간격 불변)
  }, 250);
}

function stopClock() {
  if (state.clockTimer) {
    clearInterval(state.clockTimer);
    state.clockTimer = null;
  }
}

// ----- 나가기: STONK Home 사이트로 이동 (방 종료/삭제 아님 — 단일 방은 계속 운영됨) -----
function leaveRoom() {
  goToStonkHome();
}

// 내 드라이버 리스/구독만 정리하고 STONK Home 으로 이동한다.
function goToStonkHome() {
  releaseTickLeaseIfMine(); // 내가 드라이버였다면 리스를 즉시 비워 다른 유저가 바로 인수
  stopDriving();
  stopDriverWatch();
  stopClock();
  stopWatchingJoinRequest();
  ui.destroyChart();
  if (state.roomRef) { off(state.roomRef); state.roomRef = null; }
  subscribeSelectedHistory(null);
  location.href = site.buildHomeUrl();
}

// 호환용: 예전 호출부(leaveToHome)는 STONK Home 으로 안내한다.
function leaveToHome() {
  goToStonkHome();
}

// ----- 사이트 간 이동 링크(roomCode 유지) 갱신 -----
function updateSiteNav(code) {
  const sel = (selStock) => (selStock && selStock.name) || "";
  const company = ""; // battle 종목 id 는 board/wiki 회사 id 와 직접 매칭되지 않아 방 코드만 유지
  const setHref = (id, url) => { const el = document.getElementById(id); if (el) el.href = url; };
  setHref("navBoard", site.buildBoardUrl(code));
  setHref("navWiki", site.buildWikiUrl(code, company));
  setHref("navAdmin", site.buildAdminUrl(code));
}

async function copyMarketBoardSnapshot() {
  if (!state.roomCode || !state.roomData) {
    ui.showToast("복사할 시장 데이터가 없습니다", "err");
    return;
  }

  const snapshot = {
    roomCode: state.roomCode,
    status: state.roomData.status,
    startedAt: state.roomData.startedAt || null,
    marketTick: state.roomData.marketTick || Date.now(),
    latestNews: state.roomData.latestNews || null,
    botFeed: state.roomData.botFeed || [],
    stocks: state.roomData.stocks || {},
    players: state.roomData.players || {},
    logs: state.roomData.logs || {},
  };
  const text = JSON.stringify(snapshot, null, 2);

  try {
    await navigator.clipboard.writeText(text);
    ui.showToast("STONK Board에 가져올 시장 데이터를 복사했습니다");
  } catch {
    prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:", text);
  }
}

// ----- 거래 -----
function getQty() {
  return Math.max(1, Math.floor(Number(document.getElementById("qtyInput").value) || 1));
}

async function doTrade(kind) {
  const { roomCode, roomData, uid, nickname, selectedStockId } = state;
  if (!roomData || roomData.status !== "playing") return;
  if (!selectedStockId) {
    ui.showToast("종목을 먼저 선택하세요", "err");
    return;
  }
  const stockName = roomData.stocks?.[selectedStockId]?.name || "";
  try {
    if (kind === "buy") {
      await game.buyStock(roomCode, uid, nickname, selectedStockId, getQty(), roomData);
      ui.showToast(`${stockName} 매수 체결!`, "up");
    } else if (kind === "sell") {
      await game.sellStock(roomCode, uid, nickname, selectedStockId, getQty(), roomData);
      ui.showToast(`${stockName} 매도 체결!`, "down");
    } else if (kind === "sellAll") {
      await game.sellAllStock(roomCode, uid, nickname, selectedStockId, roomData);
      ui.showToast(`${stockName} 전량 매도 체결!`, "down");
    }
    ui.setMsg("tradeMsg", "", false);
  } catch (e) {
    ui.showToast(e.message, "err");
  }
}

function numVal(id) {
  return Math.floor(Number(document.getElementById(id).value) || 0);
}

// 종목 선택 시 주문 입력칸을 현재가 기준으로 미리 채움
function prefillOrderPrices(stockId) {
  const price = state.roomData?.stocks?.[stockId]?.price;
  if (!price) return;
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
  set("limitPrice", price);
  set("stopLoss", Math.round(price * 0.95)); // 기본 -5%
  set("takeProfit", Math.round(price * 1.1)); // 기본 +10%
}

// 지정가 주문 (매수: 이하 매수 / 매도: 이상 매도)
async function doLimitOrder(side) {
  const { roomCode, roomData, uid, nickname, selectedStockId } = state;
  if (!roomData || roomData.status !== "playing") return;
  if (!selectedStockId) return ui.showToast("종목을 먼저 선택하세요", "err");
  const price = numVal("limitPrice");
  if (!price) return ui.showToast("지정가를 입력하세요", "err");
  const tif = document.getElementById("limitTif").value;
  const name = roomData.stocks?.[selectedStockId]?.name || "";
  try {
    await game.placeOrder(roomCode, uid, nickname, selectedStockId,
      { side, trigger: side === "buy" ? "below" : "above", tif, label: "지정가" }, getQty(), price, roomData);
    ui.showToast(`${name} 지정가 ${side === "buy" ? "매수" : "매도"} 등록!`, side === "buy" ? "up" : "down");
  } catch (e) { ui.showToast(e.message, "err"); }
}

// 손절·익절 (보유분 대상): 손절가 이하 매도 / 익절가 이상 매도
async function doSetStop() {
  const { roomCode, roomData, uid, nickname, selectedStockId } = state;
  if (!roomData || roomData.status !== "playing") return;
  if (!selectedStockId) return ui.showToast("종목을 먼저 선택하세요", "err");
  const held = roomData.players?.[uid]?.holdings?.[selectedStockId] || 0;
  if (held < 1) return ui.showToast("보유한 종목에만 설정할 수 있어요", "err");
  const loss = numVal("stopLoss");
  const profit = numVal("takeProfit");
  if (!loss && !profit) return ui.showToast("손절가 또는 익절가를 입력하세요", "err");
  const name = roomData.stocks?.[selectedStockId]?.name || "";
  try {
    if (loss) await game.placeOrder(roomCode, uid, nickname, selectedStockId,
      { side: "sell", trigger: "below", tif: "gtc", label: "손절" }, held, loss, roomData);
    if (profit) await game.placeOrder(roomCode, uid, nickname, selectedStockId,
      { side: "sell", trigger: "above", tif: "gtc", label: "익절" }, held, profit, roomData);
    ui.showToast(`${name} 손절·익절 설정 완료 (보유 ${held}주)`, "down");
  } catch (e) { ui.showToast(e.message, "err"); }
}

// 분할매수: 현재가부터 단계별로 N등분 지정가 매수
async function doSplitBuy() {
  const { roomCode, roomData, uid, nickname, selectedStockId } = state;
  if (!roomData || roomData.status !== "playing") return;
  if (!selectedStockId) return ui.showToast("종목을 먼저 선택하세요", "err");
  const totalQty = getQty();
  const count = Math.max(2, Math.min(10, numVal("splitCount") || 3));
  const price = roomData.stocks?.[selectedStockId]?.price || 0;
  if (!price) return;
  const per = Math.floor(totalQty / count);
  if (per < 1) return ui.showToast(`분할하려면 수량이 최소 ${count}주 이상이어야 해요`, "err");
  const name = roomData.stocks?.[selectedStockId]?.name || "";
  try {
    for (let i = 0; i < count; i++) {
      const tgt = Math.round(price * (1 - i * 0.015)); // 현재가, -1.5%, -3% ...
      await game.placeOrder(roomCode, uid, nickname, selectedStockId,
        { side: "buy", trigger: "below", tif: "gtc", label: `분할${i + 1}` }, per, tgt, roomData);
    }
    ui.showToast(`${name} ${count}회 분할매수 등록! (회당 ${per}주)`, "up");
  } catch (e) { ui.showToast(e.message, "err"); }
}

async function doCancelOrder(orderId) {
  try {
    await game.cancelOrder(state.roomCode, orderId);
    ui.showToast("예약 주문 취소됨");
  } catch (e) {
    ui.showToast(e.message, "err");
  }
}

// 공모주 청약
async function doApplyIpo() {
  const { roomCode, roomData, uid } = state;
  const ipo = roomData?.ipo;
  if (!ipo || ipo.status !== "subscribing") {
    ui.showToast("청약 가능한 공모주가 없습니다", "err");
    return;
  }
  const qty = Math.max(1, Math.floor(Number(document.getElementById("ipoQty").value) || 0));
  try {
    await game.applyIpo(roomCode, uid, qty, roomData);
    ui.showToast(`${ipo.name} ${qty.toLocaleString("ko-KR")}주 청약 완료!`, "up");
  } catch (e) {
    ui.showToast(e.message, "err");
  }
}

// ----- 이벤트 바인딩 -----
function bindEvents() {
  // 닉네임 입력 (Home 에서 닉네임이 넘어오면 이 화면은 건너뜀)
  document.getElementById("btnNickname")?.addEventListener("click", () => {
    const nick = document.getElementById("nicknameInput").value.trim();
    if (!nick) return;
    state.nickname = nick;
    localStorage.setItem("mb_nickname", nick);
    enterRoom(MAIN_ROOM);
  });
  document.getElementById("nicknameInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("btnNickname").click();
  });

  // 시장 준비 중 안내 화면: STONK Home 으로
  document.getElementById("btnWaitHome")?.addEventListener("click", goToStonkHome);

  // 상단: 포털(Board)로 시장 데이터 복사 · 나가기
  document.getElementById("btnCopyCode2")?.addEventListener("click", copyMarketBoardSnapshot);
  document.getElementById("btnCopyMarketBoard")?.addEventListener("click", copyMarketBoardSnapshot);
  // 게임 중 나가기 → STONK Home (방은 계속 운영됨)
  document.getElementById("btnLeaveGame")?.addEventListener("click", goToStonkHome);

  // 게임: 종목 선택 (이벤트 위임) — 별 토글은 별도 처리
  // 홈 랭킹표 + 스크리너 표: 관심 토글 / 행 클릭 → 종목 상세
  const onTableClick = (e) => {
    const star = e.target.closest("[data-star]");
    if (star) {
      e.stopPropagation();
      ui.toggleWatch(star.dataset.star);
      scheduleRender();
      return;
    }
    const item = e.target.closest(".rank-item");
    if (!item) return;
    selectStock(item.dataset.id);
  };
  document.getElementById("stockList")?.addEventListener("click", onTableClick);
  document.getElementById("screenerList")?.addEventListener("click", onTableClick);
  // 행 호버 시 미니 차트 미리보기(클릭→상세 기능은 그대로 유지)
  bindHoverPreview("stockList");
  bindHoverPreview("screenerList");
  window.addEventListener("scroll", () => { hoverShownId = null; ui.hideHoverCard(); }, true);

  // ===== 토스 셸: 탭/검색/테마/툴바/상세 네비 =====
  initTheme();
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document.querySelector(".tnav-brand")?.addEventListener("click", () => setTab("home"));
  document.getElementById("tnavTabs")?.addEventListener("click", (e) => {
    const t = e.target.closest(".tnav-tab");
    if (t) setTab(t.dataset.tab);
  });
  document.getElementById("btnDetailBack")?.addEventListener("click", () => setTab("home"));

  const gs = document.getElementById("globalSearch");
  if (gs) {
    gs.addEventListener("input", () => {
      ui.setStockQuery(gs.value);
      const sg = document.getElementById("screen-game");
      if (sg && sg.dataset.tab !== "home") setTab("home");
      scheduleRender();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key !== "/") return;
    const a = document.activeElement;
    if (a && /^(input|textarea|select)$/i.test(a.tagName)) return;
    if (document.getElementById("screen-game")?.classList.contains("hidden")) return;
    e.preventDefault();
    gs?.focus();
  });

  document.getElementById("homeSeg")?.addEventListener("click", (e) => {
    const b = e.target.closest(".seg-btn");
    if (!b) return;
    document.querySelectorAll("#homeSeg .seg-btn").forEach((x) => x.classList.toggle("is-active", x === b));
    // '지금 뜨는 산업' = 등락률 상위로 정렬(가벼운 매핑)
    ui.setHomeSort(b.dataset.home === "sectors" ? "up" : "value");
    scheduleRender();
  });
  document.getElementById("homeFilters")?.addEventListener("click", (e) => {
    const b = e.target.closest(".fchip");
    if (!b) return;
    if (b.dataset.filter) {
      document.querySelectorAll("#homeFilters [data-filter]").forEach((x) => x.classList.toggle("is-active", x === b));
      ui.setHomeFilter(b.dataset.filter);
    }
    if (b.dataset.sort) {
      document.querySelectorAll("#homeFilters [data-sort]").forEach((x) => x.classList.toggle("is-active", x === b));
      ui.setHomeSort(b.dataset.sort);
    }
    scheduleRender();
  });

  document.getElementById("screenerPresets")?.addEventListener("click", (e) => {
    const b = e.target.closest("[data-preset]");
    if (b) { ui.setScreenerPreset(b.dataset.preset); scheduleRender(); }
  });
  document.getElementById("accountView")?.addEventListener("click", (e) => {
    const b = e.target.closest("[data-acct]");
    if (b) { ui.setAcctSection(b.dataset.acct); scheduleRender(); }
  });
  document.getElementById("feedView")?.addEventListener("click", (e) => {
    if (e.target.closest("#feedBoardLink")) {
      const nb = document.getElementById("navBoard");
      if (nb && nb.href) window.open(nb.href, "_blank", "noopener");
    }
  });

  // 게임: 수량 조절
  document.querySelectorAll(".qty-btn[data-qty]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById("qtyInput");
      input.value = Math.max(1, getQty() + Number(btn.dataset.qty));
    });
  });
  document.getElementById("btnMaxQty").addEventListener("click", () => {
    const { roomData, uid, selectedStockId } = state;
    const price = roomData?.stocks?.[selectedStockId]?.price;
    const cash = roomData?.players?.[uid]?.cash || 0;
    if (!price) return;
    // 수수료(약 0.015%)를 감안해 살짝 여유를 둔 최대 매수 수량
    document.getElementById("qtyInput").value = Math.max(1, Math.floor(cash / (price * 1.0002)));
  });

  // 게임: 거래 (시장가)
  document.getElementById("btnBuy").addEventListener("click", () => doTrade("buy"));
  document.getElementById("btnSell").addEventListener("click", () => doTrade("sell"));
  document.getElementById("btnSellAll").addEventListener("click", () => doTrade("sellAll"));

  // 주문 유형 탭 전환
  document.getElementById("orderTabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".order-tab");
    if (!tab) return;
    const name = tab.dataset.tab;
    document.querySelectorAll(".order-tab").forEach((t) => t.classList.toggle("is-active", t === tab));
    document.querySelectorAll(".order-pane").forEach((p) => p.classList.toggle("hidden", p.dataset.pane !== name));
  });

  // 지정가 / 손절·익절 / 분할매수
  document.getElementById("btnLimitBuy").addEventListener("click", () => doLimitOrder("buy"));
  document.getElementById("btnLimitSell").addEventListener("click", () => doLimitOrder("sell"));
  document.getElementById("btnSetStop").addEventListener("click", doSetStop);
  document.getElementById("btnSplitBuy").addEventListener("click", doSplitBuy);

  // 미체결 주문 취소
  document.getElementById("orderList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cancel]");
    if (btn) doCancelOrder(btn.dataset.cancel);
  });

  // 가격 알림 설정 (관심종목 알림)
  document.getElementById("btnAlert").addEventListener("click", () => {
    const { roomData, selectedStockId } = state;
    const s = roomData?.stocks?.[selectedStockId];
    if (!s) return ui.showToast("종목을 먼저 선택하세요", "err");
    try { if (window.Notification && Notification.permission === "default") Notification.requestPermission(); } catch (e) {}
    const cur = ui.getAlert(s.name);
    const input = prompt(`${s.name} 가격 알림 설정\n현재가 ${s.price.toLocaleString("ko-KR")}원\n알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`, cur || s.price);
    if (input === null) return;
    const price = Math.floor(Number(input) || 0);
    ui.setAlert(s.name, price);
    ui.showToast(price ? `${s.name} ${price.toLocaleString("ko-KR")}원 알림 설정됨` : `${s.name} 알림 해제됨`);
    scheduleRender();
  });

  // 공모주 청약
  document.getElementById("btnApplyIpo").addEventListener("click", doApplyIpo);

  // 종목 검색 (즉시 필터, 추가 구독 없음 — roomData 재사용)
  const stockSearch = document.getElementById("stockSearch");
  const stockSearchClear = document.getElementById("stockSearchClear");
  if (stockSearch) {
    stockSearch.addEventListener("input", () => {
      ui.setStockQuery(stockSearch.value);
      if (stockSearchClear) stockSearchClear.hidden = !stockSearch.value;
      scheduleRender();
    });
  }
  if (stockSearchClear) {
    stockSearchClear.addEventListener("click", () => {
      stockSearch.value = "";
      ui.setStockQuery("");
      stockSearchClear.hidden = true;
      stockSearch.focus();
      scheduleRender();
    });
  }

  // 시장 상태 패널 펼치기/접기 (추가 구독 없음 — roomData 재사용)
  const msChip = document.getElementById("marketStatusChip");
  if (msChip) {
    msChip.addEventListener("click", () => {
      const panel = document.getElementById("marketStatusPanel");
      if (!panel) return;
      const nowHidden = panel.classList.toggle("hidden");
      msChip.setAttribute("aria-expanded", nowHidden ? "false" : "true");
      if (!nowHidden && state.roomData) ui.renderMarketStatus(state);
    });
  }

  // 결과 → 홈 (결과 화면은 단일 방에선 거의 쓰이지 않지만 버튼이 있으면 STONK Home 으로)
  document.getElementById("btnBackHome")?.addEventListener("click", goToStonkHome);
}

bindEvents();
