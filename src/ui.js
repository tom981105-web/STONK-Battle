// src/ui.js - 화면 렌더링 (실제 주식 거래앱 스타일)
import {
  calcTotalAsset,
  calcRanking,
  START_CASH,
  tickSize,
  upperLimit,
  lowerLimit,
  MIN_PRICE,
  typeLabel,
  roleLabel,
  ipoRatio,
  myOrders,
  TICK_MS,
} from "./game.js";
import { readSeries } from "./history.js";

// 종목 배지 HTML (유형/역할/신규상장)
function stockBadge(id, s) {
  if (id && String(id).startsWith("ipo")) return `<span class="tag tag-new">NEW</span>`;
  const tl = typeLabel(s.type); // 우선주/ETF/리츠/SPAC/인버스/레버리지/채권ETF/원자재
  if (tl) {
    const cls = s.type === "inverse" ? "tag-inv" : s.type === "leverage" ? "tag-lev" : "tag-etf";
    return `<span class="tag ${cls}">${tl}</span>`;
  }
  if (s.role === "leader") return `<span class="tag tag-leader">대장주</span>`;
  if (s.role === "sub") return `<span class="tag tag-sub">부대장</span>`;
  return ""; // 관련주/일반주는 배지 생략 (목록 깔끔하게)
}

// ----- 공통 헬퍼 -----
export function $(id) {
  return document.getElementById(id);
}

// 원 단위 천단위 콤마
export function fmt(n) {
  return Math.round(n ?? 0).toLocaleString("ko-KR") + "원";
}
function fmtNum(n) {
  return Math.round(n ?? 0).toLocaleString("ko-KR");
}
// 거래대금/평가액을 억·만 단위로 짧게 (예: 1,234,500,000 → 12.3억)
function fmtMoneyShort(n) {
  n = n || 0;
  if (n >= 1e12) return (n / 1e12).toFixed(2) + "조";
  if (n >= 1e8) return (n / 1e8).toFixed(1) + "억";
  if (n >= 1e4) return Math.round(n / 1e4).toLocaleString("ko-KR") + "만";
  return fmtNum(n);
}
// 거래량을 주 단위로 (천 단위 콤마)
function fmtVol(n) {
  return fmtNum(n) + "주";
}

const SCREENS = ["screen-auth", "screen-wait", "screen-game", "screen-result"];

export function showScreen(name) {
  SCREENS.forEach((id) => { const el = $(id); if (el) el.classList.toggle("hidden", id !== name); });
}

export function setMsg(id, text, isError = true) {
  const el = $(id);
  if (!el) return;
  el.textContent = text || "";
  el.classList.toggle("error", isError);
}

export function showFirebaseError(msg) {
  $("fbError").classList.remove("hidden");
  if (msg) $("fbErrorMsg").textContent = msg;
}

// ----- 로컬 누적 데이터 (Firebase 사용량 절감: DB에 캔들/로그를 저장하지 않음) -----
// 차트(캔들)는 localStorage에 세션 단위로 저장 → 새로고침/재입장해도 이전 차트가 유지된다.
const CANDLE_TICKS = 3; // 캔들 1개 = 3틱(6초)
const CANDLE_MAX = 120; // 보관할 캔들 수 (약 12분 분량)
const BOT_LOG_MAX = 60;
let localCandles = {}; // { stockId: [ {o,h,l,c,v,_n}, ... ] }
let localBotLog = [];
let lastVolume = {}; // 종목별 직전 누적거래량
let lastTickSeen = 0;
let candleKey = null; // 현재 차트 세션 키 (roomCode + startedAt)
let prevPriceByName = {}; // 알림 판정용 직전 가격

export function resetLocalHistory() {
  localCandles = {};
  localBotLog = [];
  lastVolume = {};
  lastTickSeen = 0;
  candleKey = null;
  prevPriceByName = {};
  lastChartSig = ""; // 새 게임 → 차트 시그니처 초기화(첫 그리기 강제)
  for (const k in lastShownPrice) delete lastShownPrice[k];
}

function saveCandles() {
  if (!candleKey) return;
  try {
    localStorage.setItem(candleKey, JSON.stringify({ candles: localCandles, lastVol: lastVolume, tick: lastTickSeen }));
  } catch (e) {}
}

// 새 틱이면 캔들(시고저종+거래량)과 봇 거래 로그를 로컬에 누적
function accumulateLocal(room, roomCode) {
  const stocks = room.stocks || {};
  const tick = room.marketTick || 0;

  // 세션 키 결정(방+게임시작시각). 바뀌면 localStorage에서 이전 차트 복원
  const key = `mb_candles_${roomCode || "x"}_${room.startedAt || 0}`;
  if (key !== candleKey) {
    candleKey = key;
    localCandles = {};
    lastVolume = {};
    lastTickSeen = 0;
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "null");
      if (saved && saved.candles) {
        localCandles = saved.candles;
        lastVolume = saved.lastVol || {};
        lastTickSeen = saved.tick || 0;
      }
    } catch (e) {}
  }

  for (const [id, s] of Object.entries(stocks)) {
    if (!localCandles[id]) localCandles[id] = [{ t: Date.now(), o: s.price, h: s.price, l: s.price, c: s.price, v: 0, _n: 0 }];
    if (lastVolume[id] == null) lastVolume[id] = s.volume || 0;
  }
  if (tick !== lastTickSeen) {
    lastTickSeen = tick;
    for (const [id, s] of Object.entries(stocks)) {
      const arr = localCandles[id] || (localCandles[id] = []);
      let cur = arr[arr.length - 1];
      if (!cur || cur._n >= CANDLE_TICKS) {
        cur = { t: Date.now(), o: s.price, h: s.price, l: s.price, c: s.price, v: 0, _n: 0 };
        arr.push(cur);
      }
      cur.c = s.price;
      cur.h = Math.max(cur.h, s.price);
      cur.l = Math.min(cur.l, s.price);
      const dv = Math.max(0, (s.volume || 0) - (lastVolume[id] || 0));
      cur.v += dv;
      lastVolume[id] = s.volume || 0;
      cur._n++;
      if (arr.length > CANDLE_MAX) arr.shift();
    }
    const feed = room.botFeed ? Object.values(room.botFeed) : [];
    for (const b of feed) localBotLog.unshift({ ...b, bot: true });
    if (localBotLog.length > BOT_LOG_MAX) localBotLog.length = BOT_LOG_MAX;
    checkAlerts(stocks); // 가격 알림 점검
    accumulateIndices(stocks); // 종합/섹터 지수 스파크라인용 히스토리 누적
    saveCandles(); // 차트 영속화
  }
}

// ===== 관심종목 & 가격 알림 (전부 localStorage, Firebase 미사용) =====
let watchSet = new Set(JSON.parse(localStorage.getItem("mb_watch") || "[]"));
let alertMap = JSON.parse(localStorage.getItem("mb_alerts") || "{}"); // { 종목명: 목표가 }

export function isWatched(name) { return watchSet.has(name); }
export function toggleWatch(name) {
  if (watchSet.has(name)) watchSet.delete(name);
  else watchSet.add(name);
  localStorage.setItem("mb_watch", JSON.stringify([...watchSet]));
}
export function setAlert(name, price) {
  if (price > 0) alertMap[name] = price;
  else delete alertMap[name];
  localStorage.setItem("mb_alerts", JSON.stringify(alertMap));
}
export function getAlert(name) { return alertMap[name] || 0; }

function checkAlerts(stocks) {
  for (const s of Object.values(stocks)) {
    const tgt = alertMap[s.name];
    const prev = prevPriceByName[s.name];
    if (tgt && prev != null) {
      const crossedUp = prev < tgt && s.price >= tgt;
      const crossedDown = prev > tgt && s.price <= tgt;
      if (crossedUp || crossedDown) {
        showToast(`🔔 ${s.name} 알림가 ${fmtNum(tgt)}원 ${crossedUp ? "돌파" : "하향"}!`, crossedUp ? "up" : "down");
        delete alertMap[s.name];
        localStorage.setItem("mb_alerts", JSON.stringify(alertMap));
        try { if (window.Notification && Notification.permission === "granted") new Notification("STONK Battle", { body: `${s.name} ${fmtNum(tgt)}원 도달` }); } catch (e) {}
      }
    }
    prevPriceByName[s.name] = s.price;
  }
}

// ----- 대기실 렌더링 -----
export function renderLobby(roomCode, room, myUid) {
  $("lobbyRoomCode").textContent = roomCode;
  const players = room.players || {};
  const list = $("lobbyPlayers");
  list.innerHTML = "";
  Object.entries(players).forEach(([uid, p]) => {
    const li = document.createElement("li");
    const isHost = uid === room.hostId;
    const off = p.connected === false;
    li.textContent = `${p.nickname}${isHost ? " (방장)" : ""}${uid === myUid ? " - 나" : ""}${off ? " [오프라인]" : ""}`;
    if (off) li.classList.add("muted");
    list.appendChild(li);
  });

  const amHost = myUid === room.hostId;
  const count = Object.keys(players).length;
  $("btnStartGame").classList.toggle("hidden", !amHost);
  $("lobbyWait").classList.toggle("hidden", amHost);
  $("btnStartGame").disabled = count < 1;
  setMsg(
    "lobbyMsg",
    count < 2 ? "혼자서도 테스트 시작이 가능합니다. (정식 대전은 친구를 초대하세요)" : `${count}명 입장 완료`,
    false
  );
}

// ----- 게임 화면 렌더링 -----
export function renderGame(state) {
  const { roomCode, roomData: room, uid, selectedStockId } = state;
  const codeEl = $("gameRoomCode"); if (codeEl) codeEl.textContent = roomCode;
  accumulateLocal(room, roomCode); // 로컬 캔들 + 지수 히스토리 누적
  // 전역(모든 탭 공통)
  renderAccountChip(room, uid);
  renderPortfolio(room, uid);   // myAsset/myAssetTop/myCash/myPnl/holdings (레일+네비 자산)
  renderRanking(room, uid);
  renderNewsBar(room);
  renderIpoPanel(room, uid);
  renderMarketStatus(state);
  renderLogs(room);
  // 활성 탭만 렌더(성능)
  const tab = activeTab();
  if (tab === "home") {
    renderIndexStrip(room);
    renderRankingTable(room, selectedStockId);
  } else if (tab === "detail") {
    renderStockDetail(room, selectedStockId);
    renderOrderbook(room, selectedStockId);
    renderOrders(room, uid);
  } else if (tab === "feed") {
    renderFeed(room, uid);
  } else if (tab === "screener") {
    renderScreener(room, selectedStockId);
  } else if (tab === "account") {
    renderAccount(room, uid);
  }
}

// 상단 네비 계좌 칩(닉네임/아바타)
function renderAccountChip(room, uid) {
  const me = room.players?.[uid];
  const nick = (me && me.nickname) || "나";
  const nk = $("navNick"); if (nk) nk.textContent = nick;
  const av = $("navAvatar"); if (av) av.textContent = (nick || "U").slice(0, 1).toUpperCase();
}

// ----- 시장/연결 상태 (작은 진단 UI) -----
// 추가 Firebase 구독 없음 — 이미 구독 중인 roomData 를 재사용한다.
export function renderMarketStatus(state) {
  const room = state.roomData;
  const chip = $("marketStatusChip");
  const dot = $("msDot");
  const label = $("msLabel");
  const panel = $("marketStatusPanel");
  if (!room || !chip || !dot || !label || !panel) return;
  const m = room.market || {};
  const lastTick = m.lastTickAt || room.marketTick || 0;
  const lastCatch = m.lastCatchupAt || 0;
  const staleMin = lastTick ? Math.max(0, Math.round((Date.now() - lastTick) / 60000)) : null;
  const isHost = room.hostId === state.uid;

  // 전 종목 캔들 수 집계
  let c1 = 0, c5 = 0, c15 = 0, c1h = 0;
  for (const s of Object.values(room.stocks || {})) {
    const h = s.history; if (!h) continue;
    if (h.candles1m) c1 += Object.keys(h.candles1m).length;
    if (h.candles5m) c5 += Object.keys(h.candles5m).length;
    if (h.candles15m) c15 += Object.keys(h.candles15m).length;
    if (h.candles1h) c1h += Object.keys(h.candles1h).length;
  }
  const hasCandles = c1 + c5 + c15 + c1h > 0;

  const fresh = staleMin != null && staleMin < 2;
  dot.className = "status-dot " + (fresh ? "ok" : staleMin == null ? "muted" : "warn");
  label.textContent = fresh ? "시장 최신" : staleMin == null ? "대기" : `${staleMin}분 전`;

  if (panel.classList.contains("hidden")) return; // 펼쳤을 때만 상세 렌더
  const hhmm = (t) => (t ? `${p2(new Date(t).getHours())}:${p2(new Date(t).getMinutes())}` : "-");
  const row = (k, v, cls) => `<div class="ms-row"><span>${k}</span><b class="${cls || ""}">${v}</b></div>`;
  panel.innerHTML =
    row("방 코드", esc(state.roomCode || "-")) +
    row("연결", "연결됨", "up") +
    row("권한", isHost ? "보정 주체 (방장)" : "읽기 전용", isHost ? "" : "muted") +
    row("마지막 tick", hhmm(lastTick)) +
    row("마지막 보정", lastCatch ? hhmm(lastCatch) : "없음") +
    row("시장", fresh ? "최신 상태" : staleMin == null ? "tick 기록 없음" : `${staleMin}분 전 데이터 · ${isHost ? "재접속 시 자동 보정" : "방장/관리자가 보정"}`, fresh ? "up" : "down") +
    row("캔들", hasCandles ? `1m ${c1} · 5m ${c5} · 15m ${c15} · 1h ${c1h}` : "아직 없음");
}

// ----- 내 예약(지정가) 주문 목록 -----
function renderOrders(room, uid) {
  const list = $("orderList");
  if (!list) return;
  const orders = myOrders(room, uid);
  if (!orders.length) {
    list.innerHTML = "";
    return;
  }
  list.innerHTML = orders
    .map((o) => {
      const cls = o.side === "buy" ? "up" : "down";
      const tifTag = o.tif === "day" ? " · 당일" : o.tif === "ioc" ? " · IOC" : "";
      const label = o.label || (o.side === "buy" ? "매수" : "매도");
      return `<li class="order-item">
        <span class="order-badge ${cls}">${esc(label)}</span>
        <span class="order-name">${esc(o.stockName)}</span>
        <span class="order-detail">${fmtNum(o.target)}원 · ${fmtNum(o.qty)}주${tifTag}</span>
        <button class="order-cancel" data-cancel="${o.id}" title="취소">✕</button>
      </li>`;
    })
    .join("");
}

// ----- 공모주 청약 패널 -----
let curIpoEndsAt = 0; // 카운트다운용 마감 시각
function renderIpoPanel(room, uid) {
  const panel = $("ipoPanel");
  if (!panel) return;
  const ipo = room.ipo;
  if (!ipo || ipo.status !== "subscribing") {
    panel.classList.add("hidden");
    curIpoEndsAt = 0;
    return;
  }
  curIpoEndsAt = ipo.endsAt;
  panel.classList.remove("hidden");
  $("ipoName").textContent = ipo.name;
  $("ipoPrice").textContent = fmtNum(ipo.offerPrice) + "원";
  $("ipoShares").textContent = fmtNum(ipo.totalShares) + "주";
  $("ipoRatio").textContent = ipoRatio(ipo).toFixed(1) + " : 1";
  const myQty = ipo.applies?.[uid] || 0;
  $("ipoMyApply").textContent = myQty
    ? `내 청약 ${fmtNum(myQty)}주 (증거금 ${fmtMoneyShort(myQty * ipo.offerPrice)}원)`
    : "아직 청약하지 않았어요";
  tickIpoCountdown(room);
}

// 청약 마감 카운트다운 (clock 타이머에서 250ms마다 호출)
export function tickIpoCountdown(room) {
  const el = $("ipoCountdown");
  if (!el || !curIpoEndsAt) return;
  const left = Math.max(0, Math.ceil((curIpoEndsAt - Date.now()) / 1000));
  el.textContent = left + "초";
  el.classList.toggle("urgent", left <= 5);
}

function dirClass(rate) {
  return rate > 0 ? "up" : rate < 0 ? "down" : "flat";
}
function arrow(rate) {
  return rate > 0 ? "▲" : rate < 0 ? "▼" : "−";
}

// 종목 검색어 (name/id/sector/type/role/badge 대상). main.js 가 setStockQuery 로 설정.
let stockQuery = "";
export function setStockQuery(q) { stockQuery = (q || "").trim().toLowerCase(); }

// 토스 앱 탭/정렬/필터 상태 (main.js 핸들러가 set* 로 변경)
let homeFilter = "all"; // all | watch
let homeSort = "value"; // value | volume | up | down
let screenerPreset = "rising";
let acctSection = "asset"; // asset | tx | orders
export function setHomeFilter(f) { homeFilter = f || "all"; }
export function setHomeSort(s) { homeSort = s || "value"; }
export function setScreenerPreset(p) { screenerPreset = p || "rising"; }
export function setAcctSection(s) { acctSection = s || "asset"; }
function activeTab() { return document.getElementById("screen-game")?.dataset.tab || "home"; }
function matchStock(id, s) {
  if (!stockQuery) return true;
  const parts = [
    s.name, id, s.ticker, s.sector, s.type, s.role,
    typeLabel(s.type), roleLabel(s.role),
    String(id).startsWith("ipo") ? "신규상장 new" : "",
  ];
  return parts.join(" ").toLowerCase().includes(stockQuery);
}

// 종목별 결정적 발행주식수(시가총액 표기용) — 저장 필드가 없어 id 해시로 안정적으로 생성
function impliedShares(id) {
  let h = 0; const s = String(id);
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return 5_000_000 + (h % 60) * 8_000_000;
}
// 종목 이름 기반 안정적 아이콘 색
function iconColor(name) {
  let h = 0; const s = String(name || "");
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return `hsl(${h % 360} 60% 47%)`;
}
function sortEntries(entries, sort) {
  const by = {
    value: (a, b) => (b[1].value || 0) - (a[1].value || 0),
    volume: (a, b) => (b[1].volume || 0) - (a[1].volume || 0),
    up: (a, b) => (b[1].changeRate || 0) - (a[1].changeRate || 0),
    down: (a, b) => (a[1].changeRate || 0) - (b[1].changeRate || 0),
  };
  return entries.sort(by[sort] || by.value);
}
// 토스식 랭킹 표 한 행
function rankRowHtml(rank, id, s) {
  const sign = s.changeRate > 0 ? "+" : "";
  const cls = dirClass(s.changeRate);
  const watched = watchSet.has(s.name);
  const cap = s.price * impliedShares(id);
  const sub = s.sector || typeLabel(s.type) || "종목";
  return `<li class="rank-item" data-id="${id}">
    <span class="rk-rank"><button class="star-btn ${watched ? "on" : ""}" data-star="${esc(s.name)}" title="관심">${watched ? "★" : "☆"}</button>${rank}</span>
    <span class="rk-name"><span class="stk-ico" style="background:${iconColor(s.name)}">${esc((s.name || "?").slice(0, 1))}</span><span class="stk-meta"><span class="stk-nm">${esc(s.name)} ${stockBadge(id, s)}</span><span class="stk-sub">${esc(sub)}</span></span></span>
    <span class="rk-price ${cls}">${fmtNum(s.price)}</span>
    <span class="rk-rate ${cls}">${arrow(s.changeRate)} ${sign}${(s.changeRate ?? 0).toFixed(2)}%</span>
    <span class="rk-value">${fmtMoneyShort(s.value)}</span>
    <span class="rk-cap">${fmtMoneyShort(cap)}</span>
    <span class="rk-sector"><span class="sec-pill">${esc(s.sector || "-")}</span></span>
  </li>`;
}
// 홈 실시간 차트 랭킹 표(검색/필터/정렬 적용)
function renderRankingTable(room) {
  const list = $("stockList");
  if (!list) return;
  const prev = list.scrollTop;
  const stocks = room.stocks || {};
  let entries = Object.entries(stocks).filter(([id, s]) => matchStock(id, s));
  if (homeFilter === "watch") entries = entries.filter(([, s]) => watchSet.has(s.name));
  entries = sortEntries(entries, homeSort);
  if (!entries.length) {
    list.innerHTML = `<li class="stock-empty">${stockQuery ? "검색 결과 없음" : "종목이 없습니다"}</li>`;
    return;
  }
  list.innerHTML = entries.map(([id, s], i) => rankRowHtml(i + 1, id, s)).join("");
  list.scrollTop = prev;
}

// 종목 상세: 현재가/전일대비/등락률 + 시고저 + 거래량/거래대금 + 캔들차트
function renderStockDetail(room, selectedStockId) {
  const stocks = room.stocks || {};
  const s = stocks[selectedStockId];
  if (!s) {
    $("chartStockName").textContent = "-";
    $("selStockPrice").textContent = "-";
    $("selStockChange").textContent = "";
    return;
  }
  const base = s.basePrice || s.price;
  const diff = s.price - base;
  const cls = dirClass(s.changeRate);
  const sign = s.changeRate > 0 ? "+" : "";

  $("chartStockName").textContent = s.name;
  // 종목 유형/역할/업종 태그
  const tagEl = $("detailTag");
  if (tagEl) {
    const tl = typeLabel(s.type);
    const rl = roleLabel(s.role);
    let label, cls = "virtual-tag";
    if (tl) { label = tl; cls += s.type === "inverse" ? " tag-inv" : s.type === "leverage" ? " tag-lev" : " tag-etf"; }
    else if (String(selectedStockId).startsWith("ipo")) { label = "신규상장"; cls += " tag-new"; }
    else if (s.sector) { label = rl ? `${s.sector}·${rl}` : s.sector; if (s.role === "leader") cls += " tag-leader"; }
    else { label = "가상"; }
    tagEl.textContent = label;
    tagEl.className = cls;
  }
  const priceEl = $("selStockPrice");
  // 가격이 바뀌면 짧게 플래시 (상승=빨강/하락=파랑)
  const prev = lastShownPrice[selectedStockId];
  priceEl.textContent = fmtNum(s.price);
  priceEl.className = "big-price " + cls;
  if (prev != null && s.price !== prev) {
    const flash = s.price > prev ? "flash-up" : "flash-down";
    priceEl.classList.remove("flash-up", "flash-down");
    void priceEl.offsetWidth; // 애니메이션 재시작
    priceEl.classList.add(flash);
  }
  lastShownPrice[selectedStockId] = s.price;

  $("selStockChange").className = "change " + cls;
  $("selStockChange").textContent = `${arrow(s.changeRate)} ${sign}${fmtNum(diff)} (${sign}${(s.changeRate ?? 0).toFixed(2)}%)`;

  // 시가/고가/저가 + 상한가/하한가 + 거래량/거래대금
  setOhlc("ohlcOpen", s.open, base);
  setOhlc("ohlcHigh", s.high, base);
  setOhlc("ohlcLow", s.low, base);
  $("ohlcUpper").textContent = fmtNum(upperLimit(base));
  $("ohlcLower").textContent = fmtNum(lowerLimit(base));
  $("ohlcVol").textContent = fmtVol(s.volume);
  $("ohlcValue").textContent = fmtMoneyShort(s.value) + "원";
  const newsEl = $("selStockNews");
  newsEl.textContent = s.news ? `📰 ${s.news}` : "";
  newsEl.className = "news-line" + (s.news ? " " + cls : " muted");

  drawChart(room, selectedStockId, base, s);
}

const lastShownPrice = {}; // 종목별 직전 표시 가격 (플래시용)

function setOhlc(id, price, base) {
  const el = $(id);
  el.textContent = fmtNum(price);
  el.className = "ohlc-v " + dirClass((price || 0) - base);
}

// ----- 캔들차트 (커스텀 캔버스: 한국식 빨강↑/파랑↓ + 하단 거래량 바) -----
function getCSS(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim() || "#000";
}

// 기간 → 시간창(실제 t 필터) + tier 후보(이상적 입도 우선, 데이터 짧으면 더 촘촘한 tier로 fallback) + 개수
// 핵심: 실제 timestamp 로 필터링한다. 없는 기간을 현재 tick 데이터로 가짜 확장하지 않는다.
const PERIOD_MAP = {
  "tick": { win: 30 * 60000, tiers: ["candles1m", "candles5m"], count: 16 },
  "1d": { win: 86400000, tiers: ["candles5m", "candles1m"], count: 288 },
  "3d": { win: 259200000, tiers: ["candles1h", "candles15m", "candles5m"], count: 216 },
  "1w": { win: 604800000, tiers: ["candles1h", "candles15m"], count: 224 },
  "1m": { win: 2592000000, tiers: ["candles1h", "candles15m", "candles5m", "candles1m"], count: 360 },
  "all": { win: Infinity, tiers: ["candles1h", "candles15m", "candles5m", "candles1m"], count: 500 },
};
const PERIOD_LABEL = { "tick": "1틱", "1d": "1일", "3d": "3일", "1w": "1주", "1m": "1달", "all": "전체" };
function spanTextKo(ms) {
  if (ms <= 0) return "0분";
  const m = Math.round(ms / 60000);
  if (m < 60) return m + "분";
  const h = Math.floor(m / 60), mm = m % 60;
  if (h < 24) return mm ? `${h}시간 ${mm}분` : `${h}시간`;
  const d = Math.floor(h / 24), hh = h % 24;
  return hh ? `${d}일 ${hh}시간` : `${d}일`;
}
function rangeNoteText(period, candles) {
  const lab = PERIOD_LABEL[period] || period;
  if (!candles || !candles.length) return lab + " · 데이터 없음";
  if (period === "tick") return "1틱 · 최근 흐름";
  const first = candles[0].t, last = candles[candles.length - 1].t;
  if (!(first > 1e11) || !(last > 1e11)) return lab + " · 최근 흐름";
  const span = last - first, win = (PERIOD_MAP[period] || {}).win;
  if (win && win !== Infinity && span < win * 0.9) return `${lab} · 아직 ${spanTextKo(span)} 데이터만 있음`;
  return `${lab} · 누적 ${spanTextKo(span)} 데이터`;
}

// ── 기간별 시간 표시 (브라우저 local time 기준) ──
function p2(n) { return (n < 10 ? "0" : "") + n; }
function fmtChartTime(t, period) {
  if (!(t > 1e11)) return ""; // 합성 인덱스(실 timestamp 아님)면 비움
  const d = new Date(t);
  const hm = p2(d.getHours()) + ":" + p2(d.getMinutes());
  const md = (d.getMonth() + 1) + "/" + d.getDate();
  if (period === "tick" || period === "1d") return hm;
  if (period === "3d" || period === "1w") return md + " " + hm;
  return md;
}
function fmtChartFull(t) {
  if (!(t > 1e11)) return "";
  const d = new Date(t);
  return (d.getMonth() + 1) + "/" + p2(d.getDate()) + " " + p2(d.getHours()) + ":" + p2(d.getMinutes());
}

let chartPeriod = "1d";
let chartHover = -1; // 선택(호버/터치)된 캔들 인덱스
let chartGeom = null; // 마지막 렌더 좌표계 { cw, plotW, priceH, volH, yP, candles, lo, hi }
let chartCtx = null; // { room, id, base }
let chartBound = false;
let lastChartSig = ""; // 마지막으로 그린 차트 시그니처(동일하면 캔버스 재그리기 생략)

// 현재가가 마지막 종가와 다르면 현재가 캔들을 이어 붙여 연속·현재가 강조
function appendLive(series, stock) {
  if (series.length && stock.price != null && series[series.length - 1].c !== stock.price) {
    const last = series[series.length - 1];
    const t = last.t > 1e11 ? last.t + 1000 : last.t + 1;
    series.push({ t, o: last.c, h: Math.max(last.c, stock.price), l: Math.min(last.c, stock.price), c: stock.price, v: 0, _live: true });
  }
  return series;
}

// 선택 종목의 차트 시리즈 구성: 실제 timestamp 로 기간 필터링(가짜 확장 없음)
function buildSeries(stock, id, period) {
  const map = PERIOD_MAP[period] || PERIOD_MAP["1d"];
  const hist = stock.history || null;
  const local = localCandles[id] || [];
  const now = Date.now();
  const cutoff = map.win === Infinity ? -Infinity : now - map.win;

  // 1틱: "방금 움직임" — 로컬 현재 캔들(초단기) 우선, 없으면 candles1m 최근 일부
  if (period === "tick") {
    let s = local.slice(-12).map((c, i) => ({ t: c.t || (now - (12 - i) * 6000), o: c.o, h: c.h, l: c.l, c: c.c, v: c.v || 0 }));
    if (s.length < 2 && hist) {
      const fb = readSeries(hist, "candles1m");
      if (fb.length) s = fb.slice(-map.count).map((c) => ({ ...c }));
    }
    return appendLive(s, stock);
  }

  // tier 후보를 차례로: 실제 t 기준 cutoff 필터 후 충분하면 채택(짧으면 더 촘촘한 tier)
  let series = [];
  if (hist) {
    for (const tk of map.tiers) {
      let arr = readSeries(hist, tk);
      if (!arr.length) continue;
      arr = arr.filter((c) => c.t >= cutoff);
      if (arr.length >= 2) { series = arr.map((c) => ({ ...c })); break; }
      if (!series.length && arr.length) series = arr.map((c) => ({ ...c }));
    }
  }
  // Firebase 히스토리가 전혀 없을 때만(갓 시작) 로컬 누적 캔들로 대체 — 차트가 비지 않게
  if (!series.length && local.length) {
    series = local
      .map((c, i) => ({ t: c.t || (now - (local.length - i) * 6000), o: c.o, h: c.h, l: c.l, c: c.c, v: c.v || 0 }))
      .filter((c) => c.t >= cutoff);
  }
  series = appendLive(series, stock); // 현재가 캔들 1개만 이어 붙임(가짜 확장 아님)
  if (series.length > map.count) series = series.slice(series.length - map.count);
  return series;
}

// 차트 그리기 진입점 (renderStockDetail 에서 호출)
function drawChart(room, id, base, stock) {
  chartCtx = { room, id, base };
  const series = buildSeries(stock, id, chartPeriod);
  // 선택 종목과 무관한 변경(다른 종목 체결·순위·로그 등)으로 renderGame 이 와도
  // 데이터가 같으면 캔버스 재그리기를 생략한다(틱 사이 불필요한 redraw 제거).
  const tail = series.length ? series[series.length - 1] : null;
  const sig = `${id}|${chartPeriod}|${series.length}|${tail ? tail.c + ":" + tail.v : ""}|${base}`;
  if (sig === lastChartSig) { setupChartInteraction(); return; }
  lastChartSig = sig;
  chartHover = -1;
  hideChartTip();
  renderCandles($("priceChart"), series, base, -1);
  const note = $("chartRangeNote");
  if (note) note.textContent = rangeNoteText(chartPeriod, series);
  setupChartInteraction();
}

// 기간 버튼/포인터 상호작용 1회 바인딩 (모바일 터치 대응)
function setupChartInteraction() {
  if (chartBound) return;
  chartBound = true;
  const periods = $("chartPeriods");
  if (periods) {
    periods.addEventListener("click", (e) => {
      const btn = e.target.closest(".cp-btn");
      if (!btn) return;
      chartPeriod = btn.dataset.period;
      periods.querySelectorAll(".cp-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
      if (chartCtx) {
        const s = chartCtx.room.stocks?.[chartCtx.id];
        if (s) drawChart(chartCtx.room, chartCtx.id, chartCtx.base, s);
      }
    });
  }
  const canvas = $("priceChart");
  if (canvas) {
    const onMove = (e) => {
      if (!chartGeom) return;
      const rect = canvas.getBoundingClientRect();
      const px = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const idx = Math.max(0, Math.min(chartGeom.candles.length - 1, Math.floor(px / chartGeom.cw)));
      if (idx !== chartHover) {
        chartHover = idx;
        renderCandles(canvas, chartGeom.candles, chartGeom.base, idx);
        showChartTip(idx);
      }
    };
    const onLeave = () => {
      chartHover = -1;
      if (chartGeom) renderCandles(canvas, chartGeom.candles, chartGeom.base, -1);
      hideChartTip();
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchstart", onMove, { passive: true });
    canvas.addEventListener("touchmove", onMove, { passive: true });
    canvas.addEventListener("touchend", onLeave);
  }
}

// 상세 정보 카드 (날짜/시작/마지막/최고/최저/거래량/등락률)
function showChartTip(idx) {
  const tip = $("chartTip");
  if (!tip || !chartGeom) return;
  const c = chartGeom.candles[idx];
  if (!c) return;
  const rate = c.o ? ((c.c - c.o) / c.o) * 100 : 0;
  const cls = rate > 0 ? "up" : rate < 0 ? "down" : "flat";
  const when = fmtChartFull(c.t) || `구간 ${idx + 1}`;
  tip.innerHTML = `
    <div class="tip-when">${esc(when)}</div>
    <div class="tip-row"><span>시작</span><b>${fmtNum(c.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${fmtNum(c.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${fmtNum(c.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${fmtNum(c.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${fmtNum(c.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${cls}">${rate >= 0 ? "+" : ""}${rate.toFixed(2)}%</b></div>`;
  tip.classList.remove("hidden");
  // 캔들 위치 근처에 배치 (좌/우 넘침 방지)
  const x = idx * chartGeom.cw + chartGeom.cw / 2;
  const place = x > chartGeom.plotW * 0.6 ? "left" : "right";
  tip.style.left = place === "right" ? `${x + 10}px` : "";
  tip.style.right = place === "left" ? `${chartGeom.cssW - x + 10}px` : "";
  tip.style.top = "8px";
}
function hideChartTip() {
  const tip = $("chartTip");
  if (tip) tip.classList.add("hidden");
}

function renderCandles(canvas, candles, basePrice, hoverIndex) {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth || 600;
  const cssH = canvas.clientHeight || 260;
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);
  if (!candles.length) { chartGeom = null; return; }

  const RIGHT = 56; // 우측 가격축 영역
  const plotW = cssW - RIGHT;
  const volH = cssH * 0.18; // 하단 거래량 영역
  const gap = cssH * 0.06;
  const priceH = cssH - volH - gap;

  let hi = -Infinity, lo = Infinity, maxV = 0;
  for (const c of candles) {
    hi = Math.max(hi, c.h);
    lo = Math.min(lo, c.l);
    maxV = Math.max(maxV, c.v || 0);
  }
  if (hi === lo) { hi += 1; lo -= 1; }
  const pad = (hi - lo) * 0.14;
  hi += pad; lo -= pad;

  const up = getCSS("--up");
  const down = getCSS("--down");
  const grid = "rgba(255,255,255,0.07)"; // 다크 테마: 밝은 반투명 그리드
  const axisText = getCSS("--muted") || "#999";
  const yP = (p) => priceH * (1 - (p - lo) / (hi - lo));

  const n = Math.max(candles.length, 14); // 최소 칸 수 확보
  const cw = plotW / n;
  const bodyW = Math.max(2.5, Math.min(14, cw * 0.64));

  // 렌더 좌표계 저장(포인터 → 캔들 매핑용)
  chartGeom = { cw, plotW, priceH, volH, cssW, cssH, candles, base: basePrice, lo, hi };

  // 가로 그리드 + 우측 가격 라벨
  ctx.font = "11px Pretendard, sans-serif";
  ctx.textBaseline = "middle";
  const GRID_N = 4;
  for (let i = 0; i <= GRID_N; i++) {
    const y = (priceH / GRID_N) * i;
    const price = hi - ((hi - lo) / GRID_N) * i;
    ctx.strokeStyle = grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, Math.round(y) + 0.5);
    ctx.lineTo(plotW, Math.round(y) + 0.5);
    ctx.stroke();
    ctx.fillStyle = axisText;
    ctx.textAlign = "left";
    ctx.fillText(fmtNum(price), plotW + 6, Math.min(priceH - 6, Math.max(8, y)));
  }

  // 선택(호버) 캔들 세로 하이라이트
  if (hoverIndex >= 0 && hoverIndex < candles.length) {
    const hx = hoverIndex * cw + cw / 2;
    ctx.strokeStyle = "rgba(120,140,180,0.55)";
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(Math.round(hx) + 0.5, 0);
    ctx.lineTo(Math.round(hx) + 0.5, cssH);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  candles.forEach((c, i) => {
    const x = i * cw + cw / 2;
    const isUp = c.c >= c.o;
    const color = isUp ? up : down;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    // 꼬리(고가-저가)
    ctx.beginPath();
    ctx.moveTo(Math.round(x) + 0.5, yP(c.h));
    ctx.lineTo(Math.round(x) + 0.5, yP(c.l));
    ctx.stroke();
    // 몸통(시가-종가)
    const yo = yP(c.o), yc = yP(c.c);
    const top = Math.min(yo, yc);
    const bh = Math.max(1.5, Math.abs(yc - yo));
    ctx.fillRect(x - bodyW / 2, top, bodyW, bh);
    // 거래량 바
    if (maxV > 0) {
      const vh = (volH - 4) * ((c.v || 0) / maxV);
      ctx.globalAlpha = 0.4;
      ctx.fillRect(x - bodyW / 2, cssH - vh, bodyW, vh);
      ctx.globalAlpha = 1;
    }
  });

  // 현재가(마지막 종가) 점선 + 라벨
  const last = candles[candles.length - 1].c;
  if (last <= hi && last >= lo) {
    const y = yP(last);
    const isUp = last >= (basePrice || last);
    const color = isUp ? up : down;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(0, Math.round(y) + 0.5);
    ctx.lineTo(plotW, Math.round(y) + 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
    // 라벨 박스
    const label = fmtNum(last);
    ctx.font = "bold 11px Pretendard, sans-serif";
    const tw = ctx.measureText(label).width;
    const ly = Math.min(priceH - 9, Math.max(9, y));
    ctx.fillStyle = color;
    ctx.beginPath();
    const bx = plotW + 2, bw = Math.min(RIGHT - 4, tw + 10), bh = 17;
    roundRect(ctx, bx, ly - bh / 2, bw, bh, 4);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.textAlign = "left";
    ctx.fillText(label, bx + 5, ly);
  }

  // x축 시간 라벨 (처음/중간/끝, 실제 t 값·local time 기준)
  if (candles.length >= 2) {
    ctx.font = "10px Pretendard, sans-serif";
    ctx.fillStyle = axisText;
    const marks = [0, Math.floor((candles.length - 1) / 2), candles.length - 1];
    const seen = {};
    marks.forEach((mi) => {
      if (seen[mi]) return;
      seen[mi] = 1;
      const tlabel = fmtChartTime(candles[mi].t, chartPeriod);
      if (!tlabel) return;
      ctx.textAlign = mi === 0 ? "left" : mi === candles.length - 1 ? "right" : "center";
      const tx = mi === 0 ? 2 : mi === candles.length - 1 ? plotW - 2 : (mi * cw + cw / 2);
      ctx.fillText(tlabel, tx, cssH - 2);
    });
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// 화면 정리 시 캔버스 비우기
export function destroyChart() {
  lastChartSig = ""; // 재진입 시 첫 그리기 강제
  const canvas = $("priceChart");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// ----- 호가창 (매도호가 5단계 / 매수호가 5단계 + 잔량) -----
function renderOrderbook(room, selectedStockId) {
  const box = $("orderbook");
  if (!box) return;
  const s = room.stocks?.[selectedStockId];
  if (!s) {
    box.innerHTML = "";
    return;
  }
  const t = tickSize(s.price);
  const base = s.basePrice || s.price;
  const maxQ = 50000;
  const randQty = () => Math.floor((Math.random() * 0.9 + 0.1) * 12000);
  const rows = [];
  // 매도호가 (위쪽, 높은 가격 → 현재가 방향)
  for (let i = 5; i >= 1; i--) {
    const p = clampPrice(s.price + i * t, base);
    rows.push(orderRow(p, randQty(), "ask", maxQ, base));
  }
  // 현재가 구분선
  rows.push(`<div class="ob-current ${dirClass(s.changeRate)}">${fmtNum(s.price)}</div>`);
  // 매수호가 (아래쪽)
  for (let i = 1; i <= 5; i++) {
    const p = clampPrice(s.price - i * t, base);
    rows.push(orderRow(p, randQty(), "bid", maxQ, base));
  }
  box.innerHTML = rows.join("");
}

function clampPrice(p, base) {
  return Math.max(lowerLimit(base), Math.min(upperLimit(base), Math.max(MIN_PRICE, p)));
}

function orderRow(price, qty, side, maxQ, base) {
  const cls = dirClass(price - base);
  const barW = Math.min(100, (qty / maxQ) * 100);
  // 매도호가는 잔량바가 왼쪽, 매수호가는 오른쪽 (실제 호가창 느낌)
  if (side === "ask") {
    return `<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${barW}%"></span><b>${fmtNum(qty)}</b></span>
      <span class="ob-price ${cls}">${fmtNum(price)}</span>
      <span></span>
    </div>`;
  }
  return `<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${cls}">${fmtNum(price)}</span>
    <span class="ob-qty"><b>${fmtNum(qty)}</b><span class="ob-bar" style="width:${barW}%"></span></span>
  </div>`;
}

let expandedHoldId = null; // 인라인 매수/매도 카드를 펼친 보유종목 id
let holdQtyVal = 1;        // 인라인 카드 수량 (재렌더에도 유지)
let bankBalance = 0;       // STONK 금고(영구 계좌) 잔액 — main.js 가 setBankBalance 로 주입
export function setBankBalance(v) { bankBalance = Number(v) || 0; }
function renderPortfolio(room, uid) {
  const me = room.players?.[uid];
  const stocks = room.stocks || {};
  if (!me) return;
  const total = calcTotalAsset(me, stocks);
  $("myCash").textContent = fmt(me.cash);
  $("myAsset").textContent = fmt(total);
  const topEl = $("myAssetTop");
  if (topEl) topEl.textContent = fmtMoneyShort(total) + "원";

  // 총 평가손익 (보유 평가액 − 매입원가) 표시
  const avgCost = me.avgCost || {};
  const holdings = me.holdings || {};
  const entries = Object.entries(holdings).filter(([, qty]) => qty > 0);
  let plTotal = 0, costTotal = 0;
  entries.forEach(([sid, qty]) => {
    const s = stocks[sid];
    if (!s) return;
    const cost = (avgCost[sid] || s.price) * qty;
    plTotal += s.price * qty - cost;
    costTotal += cost;
  });
  const plEl = $("myPnl");
  if (plEl) {
    if (entries.length) {
      const plPct = costTotal ? (plTotal / costTotal) * 100 : 0;
      const c = plTotal > 0 ? "up" : plTotal < 0 ? "down" : "flat";
      plEl.className = "asset-pnl " + c;
      plEl.textContent = `평가손익 ${plTotal >= 0 ? "+" : ""}${fmtNum(plTotal)}원 (${plPct >= 0 ? "+" : ""}${plPct.toFixed(2)}%)`;
    } else {
      plEl.className = "asset-pnl muted";
      plEl.textContent = "평가손익 —";
    }
  }

  const list = $("holdingsList");
  list.innerHTML = "";
  if (entries.length === 0) {
    const li = document.createElement("li");
    li.className = "muted";
    li.textContent = "보유 종목이 없습니다";
    list.appendChild(li);
    return;
  }
  // 확장된 보유종목이 더 이상 없으면 확장 해제
  if (expandedHoldId && !entries.some(([id]) => id === expandedHoldId)) expandedHoldId = null;

  for (const [stockId, qty] of entries) {
    const s = stocks[stockId];
    if (!s) continue;
    const avg = avgCost[stockId] || 0;
    const pl = avg ? (s.price - avg) * qty : 0;
    const plPct = avg ? ((s.price - avg) / avg) * 100 : 0;
    const c = pl > 0 ? "up" : pl < 0 ? "down" : "flat";
    const open = expandedHoldId === stockId;
    const li = document.createElement("li");
    li.className = "holding-item" + (open ? " is-open" : "");
    li.dataset.hold = stockId;
    li.innerHTML = `
      <button class="hold-main" type="button" data-holdtoggle="${stockId}">
        <div class="hold-row1"><span class="hold-name">${esc(s.name)}</span><b>${fmtNum(qty)}주</b></div>
        <div class="hold-row2 muted">평단 ${avg ? fmtNum(avg) : "-"} · 평가 ${fmtMoneyShort(s.price * qty)}원</div>
        <div class="hold-row2 ${c}">${pl >= 0 ? "+" : ""}${fmtNum(pl)}원 (${plPct >= 0 ? "+" : ""}${plPct.toFixed(2)}%)</div>
      </button>
      ${open ? holdTradeHtml(stockId, s) : ""}`;
    list.appendChild(li);
  }
}

// 보유종목 인라인 매수/매도 카드
function holdTradeHtml(stockId, s) {
  return `
    <div class="hold-trade" data-trade="${stockId}">
      <div class="ht-price">현재가 <b>${fmtNum(s.price)}원</b></div>
      <div class="ht-qtyrow">
        <button type="button" data-htq="-10">-10</button>
        <button type="button" data-htq="-1">-1</button>
        <input class="ht-input" type="number" min="1" value="${holdQtyVal}" inputmode="numeric" />
        <button type="button" data-htq="1">+1</button>
        <button type="button" data-htq="10">+10</button>
        <button type="button" data-htq="max">최대</button>
      </div>
      <div class="ht-btns">
        <button type="button" class="btn buy" data-ht="buy">매수</button>
        <button type="button" class="btn sell" data-ht="sell">매도</button>
        <button type="button" class="btn sell-all" data-ht="all">전량매도</button>
      </div>
    </div>`;
}
// 인라인 매수/매도 토글 상태 (매 틱 재렌더에도 유지)
export function toggleHoldExpand(id) { expandedHoldId = expandedHoldId === id ? null : id; }
export function getHoldQty() { return holdQtyVal; }
export function setHoldQty(v) { holdQtyVal = Math.max(1, Math.floor(Number(v) || 1)); }

// ----- 토스트 알림 -----
let toastTimer = null;
export function showToast(text, kind = "") {
  const el = $("toast");
  if (!el) return;
  el.textContent = text;
  el.className = "toast show" + (kind ? " toast-" + kind : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.className = "toast" + (kind ? " toast-" + kind : "");
  }, 1800);
}

function renderRanking(room, uid) {
  const list = $("rankingList");
  list.innerHTML = "";
  const ranking = calcRanking(room.players, room.stocks);
  ranking.forEach((r) => {
    const li = document.createElement("li");
    const ratePct = (((r.total - START_CASH) / START_CASH) * 100).toFixed(2);
    const cls = r.total >= START_CASH ? "up" : "down";
    li.innerHTML = `<span>${esc(r.nickname)}${r.uid === uid ? " (나)" : ""}</span> <b>${fmtMoneyShort(r.total)}원</b> <span class="${cls}">${ratePct >= 0 ? "+" : ""}${ratePct}%</span>`;
    if (!r.connected) li.classList.add("muted");
    list.appendChild(li);
  });
}

// 거래 로그: 플레이어 거래(room.logs) + 로컬 누적 봇 거래(localBotLog)를 합쳐 표시
function renderLogs(room) {
  const list = $("logList");
  list.innerHTML = "";
  const playerLogs = Object.values(room.logs || {});
  const logs = [...playerLogs, ...localBotLog]
    .sort((a, b) => b.time - a.time)
    .slice(0, 40);
  for (const log of logs) {
    const li = document.createElement("li");
    const action = log.type === "buy" ? "매수" : "매도";
    const cls = log.type === "buy" ? "up" : "down";
    const time = new Date(log.time).toLocaleTimeString("ko-KR", { hour12: false });
    const nameTag = log.bot
      ? `<b class="bot-name">${esc(log.nickname)}</b>`
      : `<b>${esc(log.nickname)}</b>`;
    li.innerHTML = `<span class="muted">${time}</span> ${nameTag} <span class="${cls}">${action}</span> ${esc(log.stockName)} ${fmtNum(log.qty)}주 @ ${fmtNum(log.price)}`;
    list.appendChild(li);
  }
}

// 최신 뉴스 이벤트를 상단 바에 표시
function renderNewsBar(room) {
  const bar = $("newsBar");
  const latest = room.latestNews;
  if (!latest || Date.now() - latest.time > 12000) {
    bar.classList.add("hidden");
    return;
  }
  bar.classList.remove("hidden");
  bar.textContent = `📢 ${latest.text}`;
}

// ----- 4초 tick 체감 개선: 다음 변동까지 진행바 + 카운트다운 (tick 간격은 그대로) -----
export function updateTickProgress(room) {
  const bars = [$("tickBar"), $("tickBarHome")];
  const cds = [$("tickCountdown"), $("tickCountdownHome")];
  const lastTick = (room && (room.marketTick || (room.market && room.market.lastTickAt))) || 0;
  if (!lastTick) {
    bars.forEach((b) => { if (b) b.style.width = "0%"; });
    cds.forEach((c) => { if (c) c.textContent = ""; });
    return;
  }
  const since = Date.now() - lastTick;
  const frac = Math.max(0, Math.min(1, since / TICK_MS));
  const w = (frac * 100).toFixed(1) + "%";
  bars.forEach((b) => { if (b) b.style.width = w; });
  const left = Math.max(0, Math.ceil((TICK_MS - since) / 1000));
  const t = left > 0 ? left + "s" : "곧";
  cds.forEach((c) => { if (c) c.textContent = t; });
}

// ----- 경과 시간 표시 (카운트업) -----
export function updateTimer(msElapsed) {
  const sec = Math.max(0, Math.floor(msElapsed / 1000));
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  $("gameTimer").textContent = `${m}:${s}`;
}

// ----- 결과 화면 렌더링 -----
export function renderResult(room, uid) {
  const list = $("resultList");
  list.innerHTML = "";
  const ranking = calcRanking(room.players, room.stocks);
  ranking.forEach((r, i) => {
    const li = document.createElement("li");
    const medals = ["🥇", "🥈", "🥉"];
    const mark = medals[i] || `${i + 1}.`;
    const ratePct = (((r.total - START_CASH) / START_CASH) * 100).toFixed(2);
    const cls = r.total >= START_CASH ? "up" : "down";
    li.innerHTML = `<span class="rank-mark">${mark}</span> <span>${esc(r.nickname)}${r.uid === uid ? " (나)" : ""}</span> <b>${fmt(r.total)}</b> <span class="${cls}">${ratePct >= 0 ? "+" : ""}${ratePct}%</span>`;
    list.appendChild(li);
  });
}

// XSS 방지용 이스케이프
function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ===================== 토스 탭: 지수 스트립 ===================== */
let indexHistory = {}; // key -> number[] (스파크라인용 링버퍼)
const INDEX_MAX = 60;
// 시장 분류: 대형주(대장주·부대장주·우선주·지수형 ETF)=코스피 / 그 외(관련·일반·리츠·SPAC·원자재·신규상장)=코스닥
function isKospi(s) {
  const role = s.role, type = s.type;
  return role === "leader" || role === "sub" || type === "preferred" ||
    type === "etf" || type === "leverage" || type === "inverse" || type === "bond";
}
function computeIndices(stocks) {
  let wSum = 0, rSum = 0, kw = 0, kr = 0, dw = 0, dr = 0;
  const sec = {};
  for (const s of Object.values(stocks || {})) {
    const w = (s.value || 0) + 1;
    const rw = w * (s.changeRate || 0);
    wSum += w; rSum += rw;
    const k = s.sector || "기타";
    const e = sec[k] || (sec[k] = { w: 0, r: 0 });
    e.w += w; e.r += rw;
    if (isKospi(s)) { kw += w; kr += rw; } else { dw += w; dr += rw; }
  }
  const comp = wSum ? rSum / wSum : 0;
  const kospi = kw ? kr / kw : 0;
  const kosdaq = dw ? dr / dw : 0;
  const sectors = Object.entries(sec)
    .map(([name, v]) => ({ name, rate: v.w ? v.r / v.w : 0, w: v.w }))
    .sort((a, b) => b.w - a.w);
  return { comp, kospi, kosdaq, sectors };
}
function pushIndex(key, val) {
  const a = indexHistory[key] || (indexHistory[key] = []);
  a.push(val);
  if (a.length > INDEX_MAX) a.shift();
}
function accumulateIndices(stocks) {
  const { comp, kospi, kosdaq, sectors } = computeIndices(stocks);
  pushIndex("__comp__", 1000 * (1 + comp / 100));
  pushIndex("__kospi__", 1000 * (1 + kospi / 100));
  pushIndex("__kosdaq__", 1000 * (1 + kosdaq / 100));
  sectors.forEach((s) => pushIndex("sec:" + s.name, 1000 * (1 + s.rate / 100)));
}
function sparkSvg(arr, rate) {
  if (!arr || arr.length < 2) return "";
  const w = 140, h = 28;
  const min = Math.min(...arr), max = Math.max(...arr), rng = (max - min) || 1;
  const pts = arr.map((v, i) => `${(i / (arr.length - 1) * w).toFixed(1)},${(h - ((v - min) / rng) * h).toFixed(1)}`).join(" ");
  const col = rate >= 0 ? "var(--up)" : "var(--down)";
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
}
function indexCardHtml(name, val, rate, hist, extraClass = "") {
  const cls = dirClass(rate), sign = rate > 0 ? "+" : "";
  return `<div class="index-card ${extraClass}"><span class="ix-name">${esc(name)}</span><span class="ix-val">${val.toFixed(2)}</span><span class="ix-rate ${cls}">${arrow(rate)} ${sign}${rate.toFixed(2)}%</span><div class="ix-spark">${sparkSvg(hist, rate)}</div></div>`;
}
// 업종 한 줄(이름 · 지수값 · 등락률) — 한 카드에 여러 업종을 담기 위한 컴팩트 행
function sectorRowHtml(s) {
  const rate = s.rate, cls = dirClass(rate), sign = rate > 0 ? "+" : "";
  const val = (1000 * (1 + rate / 100)).toFixed(2);
  return `<div class="ixs-row"><span class="ixs-name">${esc(s.name)}</span><span class="ixs-val">${val}</span><span class="ixs-rate ${cls}">${arrow(rate)} ${sign}${rate.toFixed(2)}%</span></div>`;
}
// 시장 한 줄(코스피/코스닥): 이름 · 지수값 · 등락률 (큼직하게)
function marketRowHtml(name, rate) {
  const cls = dirClass(rate), sign = rate > 0 ? "+" : "";
  const val = (1000 * (1 + rate / 100)).toFixed(2);
  return `<div class="ixm-row"><span class="ixm-name">${esc(name)}</span><b class="ixm-val">${val}</b><span class="ixm-rate ${cls}">${arrow(rate)} ${sign}${rate.toFixed(2)}%</span></div>`;
}
function renderIndexStrip(room) {
  const el = $("indexStrip");
  if (!el) return;
  const { kospi, kosdaq, sectors } = computeIndices(room.stocks || {});
  // 코스피/코스닥 시장 카드 1개 + 나머지 업종 8개씩 2카드로 (가로 스크롤 없이 한눈에)
  const top = sectors.slice(0, 16);
  const g1 = top.slice(0, 8), g2 = top.slice(8, 16);
  const marketCard = `<div class="index-card index-market">
    ${marketRowHtml("코스피", kospi)}
    ${marketRowHtml("코스닥", kosdaq)}
  </div>`;
  const html = [
    marketCard,
    `<div class="index-card index-sectors">${g1.map(sectorRowHtml).join("")}</div>`,
    g2.length ? `<div class="index-card index-sectors">${g2.map(sectorRowHtml).join("")}</div>` : "",
  ];
  el.innerHTML = html.join("");
}

/* ===================== 토스 탭: 피드 ===================== */
function feedCardHtml(p) {
  const ago = new Date(p.when).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
  return `<div class="feed-card"><div class="feed-card-head"><span class="feed-ava">${esc((p.who || "S").slice(0, 1))}</span><div><div class="feed-who">${esc(p.who)}</div><div class="feed-when">${ago}</div></div></div>${p.title ? `<div class="feed-title">${esc(p.title)}</div>` : ""}<div class="feed-body">${esc(p.body)}</div></div>`;
}
function renderFeed(room, uid) {
  const el = $("feedView");
  if (!el) return;
  const posts = [];
  const ln = room.latestNews;
  if (ln && (ln.text || ln.title)) posts.push({ who: "STONK 뉴스", when: ln.time || Date.now(), title: ln.title || "📢 시장 속보", body: ln.text || ln.body || "" });
  Object.values(room.botFeed || {}).slice(-10).reverse().forEach((b) =>
    posts.push({ who: b.nickname || "트레이더", when: b.time || Date.now(), title: "", body: `${b.type === "buy" ? "매수" : "매도"} · ${b.stockName || "종목"} ${fmtNum(b.qty || 0)}주 @ ${fmtNum(b.price || 0)}` }));
  const ranking = calcRanking(room.players, room.stocks).slice(0, 5);
  const sectors = [...new Set(Object.values(room.stocks || {}).map((s) => s.sector).filter(Boolean))].slice(0, 8);
  const rankLi = ranking.map((r, i) => {
    const pct = ((r.total - START_CASH) / START_CASH) * 100;
    return `<li><span class="fr-no">${i + 1}</span><span class="fr-name">${esc(r.nickname)}</span><span class="fr-val ${pct >= 0 ? "up" : "down"}">${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%</span></li>`;
  }).join("");
  el.innerHTML = `
    <aside class="feed-side"><button class="is-active">전체</button><button>팔로잉</button><button>뉴스</button></aside>
    <div class="feed-main">
      ${posts.length ? posts.map(feedCardHtml).join("") : `<div class="feed-card"><div class="feed-body muted">아직 소식이 없습니다. 거래가 시작되면 시장 속보와 체결 소식이 올라옵니다.</div></div>`}
      <a class="feed-card" id="feedBoardLink" target="_blank" rel="noopener" style="text-decoration:none;color:var(--brand);font-weight:700">전체 소식 보기 → STONK Board ↗</a>
    </div>
    <aside class="feed-aside">
      <div class="feed-rank-card"><h4 class="rail-h">주간 프로필 랭킹</h4><ol class="feed-rank-list">${rankLi || '<li class="muted">참가자 없음</li>'}</ol></div>
      <div class="feed-rank-card"><h4 class="rail-h">주제별 커뮤니티</h4><div class="feed-comm">${sectors.map((s) => `<span>＃ ${esc(s)}</span>`).join("") || '<span class="muted">-</span>'}</div></div>
    </aside>`;
}

/* ===================== 토스 탭: 주식 골라보기(스크리너) ===================== */
const SCREENER_PRESETS = [
  { key: "rising", label: "연속 상승세", badge: "인기", fn: (id, s) => (s.changeRate || 0) > 0, sort: "up" },
  { key: "value", label: "거래대금 상위", fn: () => true, sort: "value" },
  { key: "surge", label: "급등주", fn: (id, s) => (s.changeRate || 0) >= 5, sort: "up" },
  { key: "plunge", label: "급락주", fn: (id, s) => (s.changeRate || 0) <= -5, sort: "down" },
  { key: "cheap", label: "저가주", fn: (id, s) => (s.price || 0) < 2000, sort: "value" },
  { key: "pricey", label: "고가주", fn: (id, s) => (s.price || 0) >= 100000, sort: "value" },
  { key: "lev", label: "레버리지·인버스", fn: (id, s) => s.type === "leverage" || s.type === "inverse", sort: "value" },
  { key: "etf", label: "ETF·리츠", fn: (id, s) => s.type === "etf" || s.type === "reit", sort: "value" },
  { key: "leader", label: "대장주", fn: (id, s) => s.role === "leader", sort: "value" },
];
function renderScreener(room) {
  const presetEl = $("screenerPresets"), headEl = $("screenerHead"), listEl = $("screenerList");
  if (!presetEl || !listEl) return;
  presetEl.innerHTML = `<div class="sa-title">주식 골라보기 목록</div>` +
    SCREENER_PRESETS.map((p) => `<button data-preset="${p.key}" class="${p.key === screenerPreset ? "is-active" : ""}">${esc(p.label)}${p.badge ? ` <span class="sa-badge">${p.badge}</span>` : ""}</button>`).join("");
  const preset = SCREENER_PRESETS.find((p) => p.key === screenerPreset) || SCREENER_PRESETS[0];
  if (headEl) headEl.innerHTML = `<h2>${esc(preset.label)}</h2><p>조건에 맞는 종목을 모았습니다 · 모두 가상 데이터</p>`;
  let entries = Object.entries(room.stocks || {}).filter(([id, s]) => preset.fn(id, s));
  entries = sortEntries(entries, preset.sort);
  listEl.innerHTML = entries.length
    ? entries.map(([id, s], i) => rankRowHtml(i + 1, id, s)).join("")
    : `<li class="stock-empty">조건에 맞는 종목이 없습니다</li>`;
}

/* ===================== 토스 탭: 내 계좌 ===================== */
function renderAccount(room, uid) {
  const el = $("accountView");
  if (!el) return;
  const me = room.players?.[uid];
  if (!me) { el.innerHTML = `<div class="acct-main"><div class="acct-section muted">계좌 정보를 불러오는 중…</div></div>`; return; }
  const stocks = room.stocks || {};
  const total = calcTotalAsset(me, stocks);
  const avgCost = me.avgCost || {};
  const holdings = Object.entries(me.holdings || {}).filter(([, q]) => q > 0);
  let invest = 0, pl = 0, cost = 0;
  holdings.forEach(([sid, q]) => {
    const s = stocks[sid]; if (!s) return;
    const c = (avgCost[sid] || s.price) * q;
    invest += s.price * q; pl += s.price * q - c; cost += c;
  });
  const plPct = cost ? pl / cost * 100 : 0;
  const plCls = pl > 0 ? "up" : pl < 0 ? "down" : "flat";
  const code = $("gameRoomCode")?.textContent || "-";
  const myLogs = Object.values(room.logs || {}).filter((l) => l.uid === uid).sort((a, b) => b.time - a.time).slice(0, 20);
  const myOrders = Object.values(room.orders || {}).filter((o) => o.uid === uid);

  const side = ["asset", "tx", "orders"].map((k) => {
    const label = { asset: "자산", tx: "거래내역", orders: "주문내역" }[k];
    return `<button data-acct="${k}" class="${k === acctSection ? "is-active" : ""}">${label}</button>`;
  }).join("");

  let main = "";
  if (acctSection === "asset") {
    const holdRows = holdings.length ? holdings.map(([sid, q]) => {
      const s = stocks[sid]; if (!s) return "";
      const avg = avgCost[sid] || 0;
      const p = avg ? (s.price - avg) * q : 0;
      const pp = avg ? (s.price - avg) / avg * 100 : 0;
      const c = p > 0 ? "up" : p < 0 ? "down" : "flat";
      return `<div class="acct-row"><div><div class="ar-name">${esc(s.name)}</div><div class="ar-sub">${fmtNum(q)}주 · 평단 ${avg ? fmtNum(avg) : "-"}</div></div><div class="ar-val ${c}">${fmtNum(s.price * q)}원<br><small>${p >= 0 ? "+" : ""}${pp.toFixed(2)}%</small></div></div>`;
    }).join("") : `<div class="acct-row muted">보유 종목이 없습니다</div>`;
    main = `
      <div class="acct-hero">
        <div class="ah-no">기본계좌 · ${esc(code)}</div>
        <div class="ah-asset">${fmt(total)}</div>
        <div class="ah-pnl ${plCls}">평가손익 ${pl >= 0 ? "+" : ""}${fmtNum(pl)}원 (${plPct >= 0 ? "+" : ""}${plPct.toFixed(2)}%)</div>
        <div class="acct-actions"><button class="btn small" data-acctact="tobank">채우기(넣기)</button><button class="btn small" data-acctact="send">보내기</button><button class="btn small" data-acctact="tomarket">환전(빼기)</button></div>
      </div>
      <div class="acct-grid">
        <div class="acct-stat"><div class="as-k">🏦 STONK 금고(영구)</div><div class="as-v">${fmt(bankBalance)}</div></div>
        <div class="acct-stat"><div class="as-k">주문가능 현금</div><div class="as-v">${fmt(me.cash)}</div></div>
        <div class="acct-stat"><div class="as-k">총 투자금액(평가)</div><div class="as-v">${fmt(invest)}</div></div>
        <div class="acct-stat"><div class="as-k">평가손익</div><div class="as-v ${plCls}">${pl >= 0 ? "+" : ""}${fmtNum(pl)}</div></div>
      </div>
      <div class="acct-section"><h3>보유 종목</h3>${holdRows}</div>`;
  } else if (acctSection === "tx") {
    const rows = myLogs.length ? myLogs.map((l) => {
      const c = l.type === "buy" ? "up" : "down";
      const t = new Date(l.time).toLocaleString("ko-KR", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
      return `<div class="acct-row"><div><div class="ar-name">${esc(l.stockName)}</div><div class="ar-sub">${t}</div></div><div class="ar-val ${c}">${l.type === "buy" ? "매수" : "매도"} ${fmtNum(l.qty)}주<br><small>@ ${fmtNum(l.price)}</small></div></div>`;
    }).join("") : `<div class="acct-row muted">거래내역이 없습니다</div>`;
    main = `<div class="acct-section"><h3>거래내역</h3>${rows}</div>`;
  } else {
    const rows = myOrders.length ? myOrders.map((o) => {
      const c = o.side === "buy" ? "up" : "down";
      return `<div class="acct-row"><div><div class="ar-name">${esc(o.stockName || o.stockId || "")}</div><div class="ar-sub">${o.kind || "지정가"} · ${o.tif || ""}</div></div><div class="ar-val ${c}">${o.side === "buy" ? "매수" : "매도"} ${fmtNum(o.qty)}주<br><small>${o.price ? "@ " + fmtNum(o.price) : ""}</small></div></div>`;
    }).join("") : `<div class="acct-row muted">미체결 주문이 없습니다</div>`;
    main = `<div class="acct-section"><h3>주문내역(미체결)</h3>${rows}</div>`;
  }
  el.innerHTML = `<aside class="acct-side">${side}</aside><div class="acct-main">${main}</div>`;
}

/* ===================== 종목 호버 미리보기 (토스식 미니차트 팝업) ===================== */
export function hideHoverCard() {
  const el = $("stockHover");
  if (el) el.classList.add("hidden");
}
export function renderHoverCard(room, id) {
  const el = $("stockHover");
  if (!el) return;
  const s = room && room.stocks && room.stocks[id];
  if (!s) { el.classList.add("hidden"); return; }
  const cls = dirClass(s.changeRate);
  const sign = s.changeRate > 0 ? "+" : "";
  const why = (s.changeRate || 0) >= 0 ? "왜 올랐을까?" : "왜 내렸을까?";
  const news = s.news ? esc(s.news) : "아직 특별한 소식은 없어요. 거래대금과 수급에 따라 움직이고 있어요.";
  el.innerHTML = `
    <div class="sh-head">
      <span class="sh-ico" style="background:${iconColor(s.name)}">${esc((s.name || "?").slice(0, 1))}</span>
      <div class="sh-meta">
        <b class="sh-name">${esc(s.name)} ${stockBadge(id, s)}</b>
        <span class="sh-price"><b>${fmtNum(s.price)}원</b> <span class="${cls}">${arrow(s.changeRate)} ${sign}${(s.changeRate ?? 0).toFixed(2)}%</span></span>
      </div>
    </div>
    <div class="sh-chartwrap"><span class="sh-tf">일봉</span><canvas class="sh-chart"></canvas></div>
    <div class="sh-news"><b class="sh-why">${why}</b><p>${news}</p></div>`;
  el.classList.remove("hidden");
  const canvas = el.querySelector(".sh-chart");
  const base = s.basePrice || s.previousPrice || s.price;
  drawMiniCandles(canvas, buildSeries(s, id, "1d"), base);
}
// 미니 캔들+거래량 (공용 차트 상태 chartGeom/lastChartSig 등은 건드리지 않음)
function drawMiniCandles(canvas, candles, base) {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth || 272, cssH = canvas.clientHeight || 118;
  canvas.width = Math.round(cssW * dpr); canvas.height = Math.round(cssH * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);
  if (!candles || candles.length < 2) {
    ctx.fillStyle = getCSS("--muted"); ctx.font = "12px Pretendard, sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("데이터 수집 중…", cssW / 2, cssH / 2);
    return;
  }
  const priceH = cssH * 0.72, volH = cssH - priceH - 4;
  let hi = -Infinity, lo = Infinity, maxV = 0;
  for (const c of candles) { hi = Math.max(hi, c.h); lo = Math.min(lo, c.l); maxV = Math.max(maxV, c.v || 0); }
  if (hi === lo) { hi += 1; lo -= 1; }
  const pad = (hi - lo) * 0.12; hi += pad; lo -= pad;
  const yP = (p) => priceH * (1 - (p - lo) / (hi - lo));
  ctx.strokeStyle = getCSS("--chart-grid") || "rgba(0,0,0,.06)";
  ctx.lineWidth = 1;
  for (let i = 1; i <= 2; i++) { const y = (priceH / 3) * i; ctx.beginPath(); ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(cssW, Math.round(y) + 0.5); ctx.stroke(); }
  const up = getCSS("--up"), down = getCSS("--down");
  const n = candles.length, cw = cssW / n, bodyW = Math.max(1.5, Math.min(7, cw * 0.62));
  candles.forEach((c, i) => {
    const x = i * cw + cw / 2;
    const col = c.c >= c.o ? up : down;
    ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(Math.round(x) + 0.5, yP(c.h)); ctx.lineTo(Math.round(x) + 0.5, yP(c.l)); ctx.stroke();
    const yo = yP(c.o), yc = yP(c.c), top = Math.min(yo, yc), bh = Math.max(1, Math.abs(yc - yo));
    ctx.fillRect(x - bodyW / 2, top, bodyW, bh);
    if (maxV > 0) { const vh = (volH - 2) * ((c.v || 0) / maxV); ctx.globalAlpha = 0.35; ctx.fillRect(x - bodyW / 2, cssH - vh, bodyW, vh); ctx.globalAlpha = 1; }
  });
}
