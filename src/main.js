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
      // PHASE 3: 로그인은 STONK Home 중심. 직접 접속(미로그인)은 Home 으로 안내.
      // 개발/로컬에서는 기존 자체 로그인 화면을 fallback 으로 유지한다.
      if (isLocalDev()) {
        ui.showScreen("screen-login");
      } else {
        showHomeGate({
          message: "로그인은 STONK Home에서 진행합니다. Home에서 방을 선택해 입장해 주세요.",
          roomCode: getEntryRoomCode(),
        });
      }
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

// Firebase Auth 오류 코드를 한국어 안내로 변환
function authErrorMessage(e) {
  const code = e?.code || "";
  const map = {
    "auth/invalid-email": "이메일 형식이 올바르지 않습니다.",
    "auth/missing-password": "비밀번호를 입력하세요.",
    "auth/weak-password": "비밀번호는 6자 이상이어야 합니다.",
    "auth/email-already-in-use": "이미 가입된 이메일입니다. 로그인을 눌러주세요.",
    "auth/invalid-credential": "이메일 또는 비밀번호가 올바르지 않습니다.",
    "auth/user-not-found": "가입되지 않은 이메일입니다. 회원가입을 눌러주세요.",
    "auth/wrong-password": "비밀번호가 올바르지 않습니다.",
    "auth/too-many-requests": "시도가 너무 많습니다. 잠시 후 다시 시도하세요.",
    "auth/network-request-failed": "네트워크 오류입니다. 연결을 확인하세요.",
    "auth/operation-not-allowed":
      "Firebase 콘솔에서 이메일/비밀번호 로그인을 활성화했는지 확인하세요.",
  };
  return map[code] || "오류: " + (e?.message || code);
}

// 로그인 / 회원가입 처리
async function doAuth(kind) {
  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value;
  if (!email || !password) {
    ui.setMsg("loginMsg", "이메일과 비밀번호를 입력하세요.");
    return;
  }
  ui.setMsg("loginMsg", kind === "signup" ? "가입 중..." : "로그인 중...", false);
  try {
    if (kind === "signup") {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
    // 성공 시 onAuthStateChanged 가 다음 화면으로 이동시킴
    ui.setMsg("loginMsg", "", false);
  } catch (e) {
    console.error("[auth]", e);
    ui.setMsg("loginMsg", authErrorMessage(e));
  }
}

// 로그인 후: 닉네임 유무 + 이전 방 재접속 시도
async function afterLogin() {
  if (!state.nickname) {
    ui.showScreen("screen-auth");
    return;
  }
  // PHASE 3: Home 에서 ?room= 으로 들어온 경우 그 방으로 바로 입장(Home 주도 진입).
  const urlRoom = site.getUrlRoomCode();
  if (urlRoom) {
    goHome();              // 입장 처리 중/실패 시에도 빈 화면이 되지 않도록 홈 화면을 먼저 표시
    await joinRoom(urlRoom); // 멤버면 재입장, 대기방이면 참여, 진행방이면 승인 요청
    return;
  }
  // 새로고침 대응: localStorage의 방 코드로 재접속 시도
  const savedRoom = localStorage.getItem("mb_roomCode");
  if (savedRoom) {
    try {
      const snap = await get(ref(db, `rooms/${savedRoom}`));
      const room = snap.val();
      if (room && room.players?.[state.uid] && room.status !== "ended") {
        enterRoom(savedRoom);
        return;
      }
    } catch (e) {
      console.warn("[rejoin] 재접속 실패:", e);
    }
    localStorage.removeItem("mb_roomCode");
  }
  // 방 컨텍스트가 전혀 없으면: 배포 환경은 Home 으로 안내, 개발 환경은 자체 홈(방 생성/입력) 표시
  if (isLocalDev()) {
    goHome();
  } else {
    showHomeGate({ message: "입장할 방이 없습니다. STONK Home에서 방을 선택해 주세요." });
  }
}

function goHome() {
  document.getElementById("homeNickname").textContent = `닉네임: ${state.nickname}`;
  // 방 생성/정리는 관리자만 — 비관리자에겐 숨기고 안내 표시
  const admin = isAdmin();
  const createBtn = document.getElementById("btnCreateRoom");
  const cleanupBtn = document.getElementById("btnCleanup");
  const note = document.getElementById("adminNote");
  if (createBtn) createBtn.classList.toggle("hidden", !admin);
  if (cleanupBtn) cleanupBtn.classList.toggle("hidden", !admin);
  if (note) note.classList.toggle("hidden", admin);
  ui.showScreen("screen-home");
}

// ----- 방 코드 생성 (헷갈리는 문자 제외) -----
function genRoomCode() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
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

// ----- 방 만들기 (관리자 전용) -----
async function createRoom() {
  ui.setMsg("homeMsg", "");
  if (!isAdmin()) {
    ui.setMsg("homeMsg", "방 생성은 관리자만 가능합니다. 방 코드로 입장하세요.");
    return;
  }
  try {
    const code = genRoomCode();
    await set(ref(db, `rooms/${code}`), {
      status: "waiting",
      hostId: state.uid,
      createdAt: serverTimestamp(),
      players: { [state.uid]: newPlayer(state.nickname) },
    });
    enterRoom(code);
  } catch (e) {
    console.error(e);
    ui.setMsg("homeMsg", "방 생성 실패: " + e.message);
  }
}

// ----- 방 코드로 입장 -----
async function joinRoom(codeRaw) {
  ui.setMsg("homeMsg", "");
  const code = (codeRaw || "").trim().toUpperCase();
  if (code.length !== 6) {
    ui.setMsg("homeMsg", "방 코드 6자리를 입력하세요.");
    return;
  }
  try {
    const snap = await get(ref(db, `rooms/${code}`));
    if (!snap.exists()) {
      ui.setMsg("homeMsg", "존재하지 않는 방입니다.");
      return;
    }
    const room = snap.val();
    const status = room.status || "waiting"; // status 없으면 호환 위해 waiting 취급
    const alreadyIn = !!room.players?.[state.uid];

    // 기존 플레이어는 승인 없이 재입장
    if (alreadyIn) {
      ui.showToast("기존 플레이어로 재입장합니다.");
      enterRoom(code);
      return;
    }
    // 종료된 방은 신청 불가
    if (isClosedStatus(status)) {
      ui.setMsg("homeMsg", "종료된 방은 참여 신청을 할 수 없습니다.");
      return;
    }
    // 대기 중 방: 기존 규칙대로 즉시 참여 (정원 6명 트랜잭션)
    if (status === "waiting") {
      const result = await runTransaction(
        ref(db, `rooms/${code}/players`),
        (players) => {
          players = players || {};
          if (players[state.uid]) return players;
          if (Object.keys(players).length >= game.MAX_PLAYERS) return; // 중단
          players[state.uid] = {
            nickname: state.nickname,
            cash: 0,
            totalAsset: 0,
            joinedAt: Date.now(),
            connected: true,
          };
          return players;
        }
      );
      if (!result.committed) {
        ui.setMsg("homeMsg", "방이 가득 찼습니다. (최대 6명)");
        return;
      }
      enterRoom(code);
      return;
    }
    // 진행 중(playing/active/running) 또는 미상 상태 → 관리자 승인제 중간 참여
    await requestLateJoin(code, room);
  } catch (e) {
    console.error(e);
    ui.setMsg("homeMsg", "입장 실패: " + e.message);
  }
}

// ----- 중간 참여(late-join) 신청 + 승인 대기 -----
// 진행 중인 방에 새 플레이어가 들어오면 즉시 players 를 만들지 않고
// rooms/{code}/joinRequests/{requestId} 에 pending 신청만 만든다.
// admin 이 status 를 approved 로 바꾸면, 이 클라이언트가 그걸 감지해
// players/{uid} 를 부분 update 로 생성하고 입장한다. (전체 set 금지)
async function requestLateJoin(code, room) {
  const requests = room.joinRequests || {};
  // 같은 uid 의 기존 신청 재사용 (중복 생성 방지)
  const existing = Object.entries(requests)
    .map(([id, r]) => ({ id, ...r }))
    .filter((r) => r.uid === state.uid)
    .sort((a, b) => (b.requestedAt || 0) - (a.requestedAt || 0))[0];

  if (existing) {
    if (existing.status === "approved") {
      await finalizeLateJoin(code, existing.id, existing);
      return;
    }
    if (existing.status === "joined") {
      enterRoom(code);
      return;
    }
    if (existing.status === "pending") {
      ui.setMsg("homeMsg", "이미 참여 신청이 대기 중입니다. 관리자의 승인을 기다려주세요.", false);
      watchJoinRequest(code, existing.id);
      return;
    }
    if (existing.status === "rejected") {
      ui.setMsg("homeMsg", "참여가 거절되었습니다. 다시 신청하려면 잠시 후 시도하세요.");
      // 거절 후 재신청 허용 — 아래에서 새 신청 생성
    }
  }

  // 새 신청 생성 (joinRequests/{requestId} 만 set — 전체 roomData 건드리지 않음)
  const requestId = push(ref(db, `rooms/${code}/joinRequests`)).key;
  const reqData = {
    id: requestId,
    roomCode: code,
    playerId: state.uid,
    uid: state.uid,
    name: state.nickname,
    requestedAt: Date.now(),
    status: "pending",
    type: "lateJoin",
    requestedTurn: room.marketTick || null,
    approvedAt: null,
    approvedBy: null,
    rejectedAt: null,
    rejectedBy: null,
    joinedAt: null,
    message: "",
  };
  try {
    await set(ref(db, `rooms/${code}/joinRequests/${requestId}`), reqData);
    ui.setMsg("homeMsg", "진행 중인 방입니다. 참여 신청을 보냈습니다. 관리자의 승인을 기다려주세요.", false);
    ui.showToast("참여 신청을 보냈습니다. 승인을 기다려주세요.");
    watchJoinRequest(code, requestId);
  } catch (e) {
    console.error("[lateJoin] 신청 실패:", e);
    ui.setMsg("homeMsg", "참여 신청 실패: " + e.message);
  }
}

// 신청 상태 구독 — approved 면 입장, rejected 면 안내. (단일 노드 구독 → 사용량 최소)
function watchJoinRequest(code, requestId) {
  if (state.joinReqRef) { off(state.joinReqRef); state.joinReqRef = null; }
  state.joinReqId = requestId;
  state.joinReqRef = ref(db, `rooms/${code}/joinRequests/${requestId}`);
  onValue(state.joinReqRef, async (snap) => {
    const r = snap.val();
    if (!r) return;
    if (r.status === "approved") {
      stopWatchingJoinRequest();
      await finalizeLateJoin(code, requestId, r);
    } else if (r.status === "rejected") {
      stopWatchingJoinRequest();
      ui.setMsg("homeMsg", "참여가 거절되었습니다.");
      ui.showToast("참여가 거절되었습니다.", "err");
    }
  }, (e) => console.warn("[lateJoin] 구독 오류:", e));
}

function stopWatchingJoinRequest() {
  if (state.joinReqRef) { off(state.joinReqRef); state.joinReqRef = null; }
  state.joinReqId = null;
}

// 승인 확인 후 입장 — players/{uid} 생성 + 신청 joined 처리 (부분 update만)
async function finalizeLateJoin(code, requestId, reqData) {
  try {
    // 최신 방 데이터로 초기 자금/정원 확인 (1회 읽기)
    const snap = await get(ref(db, `rooms/${code}`));
    const room = snap.val();
    if (!room) { ui.setMsg("homeMsg", "방을 찾을 수 없습니다."); return; }
    // 이미 players 에 있으면(재확인) 그대로 입장
    if (room.players?.[state.uid]) {
      stopWatchingJoinRequest();
      ui.showToast("참여가 승인되었습니다. 입장합니다.");
      enterRoom(code);
      return;
    }
    const initialCash = Number(room.settings?.initialCash) || game.START_CASH;
    const now = Date.now();
    // 부분 update: players/{uid}, joinRequests/{requestId} 필드만 — 전체 set 금지
    const updates = {};
    updates[`players/${state.uid}`] = {
      nickname: state.nickname,
      cash: initialCash,
      holdings: null,
      totalAsset: initialCash,
      joinedAt: now,
      connected: true,
      lateJoin: true,
      joinedTurn: reqData.requestedTurn || room.marketTick || null,
    };
    updates[`joinRequests/${requestId}/status`] = "joined";
    updates[`joinRequests/${requestId}/joinedAt`] = now;
    updates[`meta/updatedAt`] = now;
    await update(ref(db, `rooms/${code}`), updates);
    ui.showToast("참여가 승인되었습니다. 입장합니다.", "up");
    enterRoom(code);
  } catch (e) {
    console.error("[lateJoin] 입장 실패:", e);
    ui.setMsg("homeMsg", "승인 후 입장 실패: " + e.message);
  }
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

// ----- 방 데이터 변경 시 화면 갱신 -----
function onRoomUpdate(room) {
  if (!room) {
    // 방이 삭제됨
    leaveToHome("방이 삭제되었습니다.");
    return;
  }
  state.roomData = room;
  attachSelectedHistory(room); // 가벼운 방에 선택 종목 history 재부착(차트용)

  // 착용한 배경화면(스킨) 적용: rooms/{code}/players/{uid}/equippedBackground
  applyEquippedBackground(room.players && state.uid && room.players[state.uid] ? room.players[state.uid].equippedBackground : null);

  if (room.status === "waiting") {
    ui.showScreen("screen-lobby");
    ui.renderLobby(state.roomCode, room, state.uid);
  } else if (room.status === "playing") {
    if (state.lastStatus !== "playing") {
      ui.showScreen("screen-game");
      ui.resetLocalHistory(); // 새 게임 시작 시 로컬 차트 기록 초기화
      startClock();
      // 첫 종목 자동 선택
      const ids = Object.keys(room.stocks || {});
      if (!state.selectedStockId && ids.length) state.selectedStockId = ids[0];
    }
    // 선택 종목이 바뀌었으면(자동 선택 포함) 그 종목 history 만 구독 — 동일 id 면 no-op
    if (state.selectedStockId !== state.histStockId) subscribeSelectedHistory(state.selectedStockId);
    scheduleRender();
    // 방장에게만 '게임 종료' 버튼 노출
    document.getElementById("btnEndGame").classList.toggle("hidden", room.hostId !== state.uid);
    // 방 로드 시 1회: 사람이 없던 시간(경과)을 보정 (중복은 lock 으로 방지)
    void maybeCatchUp(room);
    // 드라이버 결정: 방장 우선, 부재 시 접속 중인 다른 플레이어가 인수
    void ensureMarketDriver(room);
    startDriverWatch(); // DB 변화가 없어도 방장 부재를 감지하도록 폴링 시작
  } else if (room.status === "ended") {
    stopDriving();
    stopDriverWatch();
    stopClock();
    subscribeSelectedHistory(null); // 선택 종목 history 구독 해제
    ui.destroyChart();
    ui.showScreen("screen-result");
    ui.renderResult(room, state.uid);
  }
  state.lastStatus = room.status;
}

// ----- 방 로드 시 경과 보정 (battle 이 1차 보정 주체) -----
// needsCatchup 일 때만, 방당 1회 시도. lock 으로 다중 접속 중복 보정 방지.
async function maybeCatchUp(room) {
  if (!room || room.status !== "playing") return;
  // 규칙 완화(1.4.x failover): 같은 방의 인증 유저 누구나 보정 가능.
  // 동시 다중 보정은 history.runCatchUp 내부의 catchupLock 트랜잭션으로 1명만 수행된다.
  if (!state.uid) return;
  if (state.catchupDoneFor === state.roomCode) return;
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
async function ensureMarketDriver(room) {
  room = room || state.roomData;
  if (!room || room.status !== "playing") { stopDriving(); return; }
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

// ----- 방 나가기 -----
async function leaveRoom() {
  const { roomCode, roomData } = state;
  try {
    if (roomCode && roomData?.status === "waiting") {
      // 대기 중이면 플레이어 목록에서 제거 (방장이 나가면 방 삭제)
      if (roomData.hostId === state.uid) {
        await remove(ref(db, `rooms/${roomCode}`));
      } else {
        await remove(ref(db, `rooms/${roomCode}/players/${state.uid}`));
      }
    }
  } catch (e) {
    console.warn(e);
  }
  leaveToHome();
}

function leaveToHome(msg) {
  releaseTickLeaseIfMine(); // 내가 드라이버였다면 리스를 즉시 비워 다른 유저가 바로 인수
  stopDriving();
  stopDriverWatch();
  stopClock();
  stopWatchingJoinRequest();
  ui.destroyChart();
  if (state.roomRef) {
    off(state.roomRef);
    state.roomRef = null;
  }
  subscribeSelectedHistory(null); // 선택 종목 history 구독 해제 + 상태 초기화
  state.roomCode = null;
  state.roomData = null;
  state.selectedStockId = null;
  state.lastStatus = null;
  state.catchupDoneFor = null;
  state.liveState = history.createLiveState();
  localStorage.removeItem("mb_roomCode");
  goHome();
  if (msg) ui.setMsg("homeMsg", msg, false);
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

// ----- 클립보드 복사 -----
async function copyRoomCode() {
  if (!state.roomCode) return;
  try {
    await navigator.clipboard.writeText(state.roomCode);
    alert("방 코드가 복사되었습니다: " + state.roomCode);
  } catch {
    // 클립보드 API 미지원 시 fallback
    prompt("아래 방 코드를 복사하세요:", state.roomCode);
  }
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
  // 이메일/비밀번호 로그인
  document.getElementById("btnLogin").addEventListener("click", () => doAuth("login"));
  document.getElementById("btnSignup").addEventListener("click", () => doAuth("signup"));
  document.getElementById("passwordInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") doAuth("login");
  });

  // 닉네임 입력
  document.getElementById("btnNickname").addEventListener("click", () => {
    const nick = document.getElementById("nicknameInput").value.trim();
    if (!nick) return;
    state.nickname = nick;
    localStorage.setItem("mb_nickname", nick);
    goHome();
  });
  document.getElementById("nicknameInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("btnNickname").click();
  });

  // 홈
  document.getElementById("btnCreateRoom").addEventListener("click", createRoom);
  document.getElementById("btnJoinRoom").addEventListener("click", () => {
    joinRoom(document.getElementById("roomCodeInput").value);
  });
  document.getElementById("roomCodeInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("btnJoinRoom").click();
  });
  document.getElementById("btnChangeNick").addEventListener("click", () => {
    ui.showScreen("screen-auth");
  });
  document.getElementById("btnLogout").addEventListener("click", async () => {
    localStorage.removeItem("mb_roomCode");
    try {
      await signOut(auth); // onAuthStateChanged 가 로그인 화면으로 이동시킴
    } catch (e) {
      console.error("[auth] 로그아웃 실패:", e);
    }
  });
  document.getElementById("btnCleanup").addEventListener("click", async () => {
    if (!isAdmin()) { ui.setMsg("homeMsg", "권한이 없습니다."); return; }
    ui.setMsg("homeMsg", "정리 중...", false);
    try {
      const n = await game.cleanupOldRooms();
      ui.setMsg("homeMsg", `오래된 방 ${n}개를 정리했습니다.`, false);
    } catch (e) {
      ui.setMsg("homeMsg", "정리 실패: " + e.message);
    }
  });

  // 대기실
  document.getElementById("btnCopyCode").addEventListener("click", copyRoomCode);
  document.getElementById("btnCopyCode2").addEventListener("click", copyRoomCode);
  document.getElementById("btnCopyMarketBoard").addEventListener("click", copyMarketBoardSnapshot);
  document.getElementById("btnLeaveRoom").addEventListener("click", leaveRoom);
  // 게임 중 나가기 (홈으로 돌아가기 — 방은 유지)
  document.getElementById("btnLeaveGame").addEventListener("click", () => {
    if (confirm("게임에서 나가시겠습니까? 홈으로 돌아갑니다.")) leaveToHome();
  });
  // 방장: 게임 종료 → 결과 화면
  document.getElementById("btnEndGame").addEventListener("click", async () => {
    if (!confirm("게임을 종료하고 최종 순위를 발표할까요?")) return;
    try {
      stopDriving();
      await game.endGame(state.roomCode, state.roomData);
    } catch (e) {
      ui.showToast("종료 실패: " + e.message, "err");
    }
  });
  document.getElementById("btnStartGame").addEventListener("click", async () => {
    try {
      await game.startGame(state.roomCode, state.roomData);
    } catch (e) {
      ui.setMsg("lobbyMsg", e.message);
    }
  });

  // 게임: 종목 선택 (이벤트 위임) — 별 토글은 별도 처리
  document.getElementById("stockList").addEventListener("click", (e) => {
    const star = e.target.closest("[data-star]");
    if (star) {
      e.stopPropagation();
      ui.toggleWatch(star.dataset.star);
      scheduleRender();
      return;
    }
    const item = e.target.closest(".stock-item");
    if (!item) return;
    state.selectedStockId = item.dataset.id;
    subscribeSelectedHistory(item.dataset.id); // 선택 종목 history 로 구독 전환
    prefillOrderPrices(item.dataset.id);
    scheduleRender();
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

  // 결과 → 홈
  document.getElementById("btnBackHome").addEventListener("click", () => leaveToHome());
}

bindEvents();
