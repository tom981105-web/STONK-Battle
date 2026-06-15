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

const SCREENS = ["screen-login", "screen-auth", "screen-home", "screen-lobby", "screen-game", "screen-result"];

export function showScreen(name) {
  SCREENS.forEach((id) => $(id).classList.toggle("hidden", id !== name));
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
  $("gameRoomCode").textContent = roomCode;
  accumulateLocal(room, roomCode);
  renderStockList(room, selectedStockId);
  renderStockDetail(room, selectedStockId);
  renderOrderbook(room, selectedStockId);
  renderPortfolio(room, uid);
  renderRanking(room, uid);
  renderLogs(room);
  renderNewsBar(room);
  renderIpoPanel(room, uid);
  renderOrders(room, uid);
  renderMarketStatus(state);
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

function renderStockList(room, selectedStockId) {
  const list = $("stockList");
  const stocks = room.stocks || {};
  list.innerHTML = "";
  // 관심종목을 위로 정렬
  const entries = Object.entries(stocks).sort((a, b) => {
    const aw = watchSet.has(a[1].name) ? 0 : 1;
    const bw = watchSet.has(b[1].name) ? 0 : 1;
    return aw - bw;
  });
  entries.forEach(([id, s]) => {
    const li = document.createElement("li");
    li.className = "stock-item" + (id === selectedStockId ? " selected" : "");
    li.dataset.id = id;
    const sign = s.changeRate > 0 ? "+" : "";
    const cls = dirClass(s.changeRate);
    const watched = watchSet.has(s.name);
    li.innerHTML = `
      <div class="stock-name"><button class="star-btn ${watched ? "on" : ""}" data-star="${esc(s.name)}" title="관심종목">${watched ? "★" : "☆"}</button>${esc(s.name)} ${stockBadge(id, s)}</div>
      <div class="stock-price ${cls}">${fmtNum(s.price)}</div>
      <div class="stock-rate ${cls}">${arrow(s.changeRate)} ${sign}${(s.changeRate ?? 0).toFixed(2)}%</div>
      <div class="stock-vol muted">${fmtMoneyShort(s.value)}</div>
    `;
    list.appendChild(li);
  });
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

// 기간 → tier/개수 매핑 (STONK 게임 구조: 1틱/1일/3일/1주/1달/전체)
//  1틱: 방금 움직임(로컬 현재 캔들 우선) / 1일: 1m·5m / 3일: 5m·15m / 1주: 15m·1h / 1달: 1h·15m / 전체: 가장 넓게
const PERIOD_MAP = {
  "tick": { tiers: ["candles1m", "candles5m"], count: 12 },
  "1d": { tiers: ["candles1m", "candles5m"], count: 240 },
  "3d": { tiers: ["candles5m", "candles15m"], count: 216 },
  "1w": { tiers: ["candles15m", "candles1h"], count: 224 },
  "1m": { tiers: ["candles1h", "candles15m"], count: 360 },
  "all": { tiers: ["candles1h", "candles15m", "candles5m", "candles1m"], count: 500 },
};

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

// 현재가가 마지막 종가와 다르면 현재가 캔들을 이어 붙여 연속·현재가 강조
function appendLive(series, stock) {
  if (series.length && stock.price != null && series[series.length - 1].c !== stock.price) {
    const last = series[series.length - 1];
    const t = last.t > 1e11 ? last.t + 1000 : last.t + 1;
    series.push({ t, o: last.c, h: Math.max(last.c, stock.price), l: Math.min(last.c, stock.price), c: stock.price, v: 0, _live: true });
  }
  return series;
}

// 선택 종목의 차트 시리즈 구성: Firebase 압축 캔들 + 로컬 누적 캔들 병합(끊김 방지)
function buildSeries(stock, id, period) {
  const map = PERIOD_MAP[period] || PERIOD_MAP["1d"];
  const hist = stock.history || null;
  const local = localCandles[id] || [];

  // 1틱: "방금 움직임" — 로컬 현재 캔들(초단기) 우선, 없으면 candles1m 최근 일부
  if (period === "tick") {
    let s = local.slice(-12).map((c, i) => ({ t: c.t || i, o: c.o, h: c.h, l: c.l, c: c.c, v: c.v || 0 }));
    if (s.length < 2 && hist) {
      const fb = readSeries(hist, "candles1m");
      if (fb.length) s = fb.slice(-map.count).map((c) => ({ ...c }));
    }
    return appendLive(s, stock);
  }

  let series = [];
  if (hist) {
    for (const tk of map.tiers) {
      const s = readSeries(hist, tk);
      if (s.length) { series = s.map((c) => ({ ...c })); break; }
    }
  }
  // Firebase 히스토리가 없으면(갓 시작/구버전) 로컬 누적 캔들로 대체 — 차트가 비지 않게
  if (!series.length) {
    series = local.map((c, i) => ({ t: c.t || i, o: c.o, h: c.h, l: c.l, c: c.c, v: c.v || 0 }));
  } else if (local.length) {
    // 최신 실시간 흐름을 마지막에 이어 붙여 현재가까지 연속되게(실 timestamp 유지)
    const lastT = series[series.length - 1].t;
    const tail = local.slice(-Math.min(local.length, 8));
    tail.forEach((c, i) => series.push({ t: (c.t && c.t > lastT) ? c.t : lastT + i + 1, o: c.o, h: c.h, l: c.l, c: c.c, v: c.v || 0 }));
  }
  series = appendLive(series, stock);
  if (series.length > map.count) series = series.slice(series.length - map.count);
  return series;
}

// 차트 그리기 진입점 (renderStockDetail 에서 호출)
function drawChart(room, id, base, stock) {
  chartCtx = { room, id, base };
  const series = buildSeries(stock, id, chartPeriod);
  chartHover = -1;
  hideChartTip();
  renderCandles($("priceChart"), series, base, -1);
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
  const grid = "rgba(20,28,46,0.06)";
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
  for (const [stockId, qty] of entries) {
    const s = stocks[stockId];
    if (!s) continue;
    const avg = avgCost[stockId] || 0;
    const pl = avg ? (s.price - avg) * qty : 0;
    const plPct = avg ? ((s.price - avg) / avg) * 100 : 0;
    const c = pl > 0 ? "up" : pl < 0 ? "down" : "flat";
    const li = document.createElement("li");
    li.className = "holding-item";
    li.innerHTML = `
      <div class="hold-row1"><span class="hold-name">${esc(s.name)}</span><b>${fmtNum(qty)}주</b></div>
      <div class="hold-row2 muted">평단 ${avg ? fmtNum(avg) : "-"} · 평가 ${fmtMoneyShort(s.price * qty)}원</div>
      <div class="hold-row2 ${c}">${pl >= 0 ? "+" : ""}${fmtNum(pl)}원 (${plPct >= 0 ? "+" : ""}${plPct.toFixed(2)}%)</div>`;
    list.appendChild(li);
  }
}

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
