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
    if (!localCandles[id]) localCandles[id] = [{ o: s.price, h: s.price, l: s.price, c: s.price, v: 0, _n: 0 }];
    if (lastVolume[id] == null) lastVolume[id] = s.volume || 0;
  }
  if (tick !== lastTickSeen) {
    lastTickSeen = tick;
    for (const [id, s] of Object.entries(stocks)) {
      const arr = localCandles[id] || (localCandles[id] = []);
      let cur = arr[arr.length - 1];
      if (!cur || cur._n >= CANDLE_TICKS) {
        cur = { o: s.price, h: s.price, l: s.price, c: s.price, v: 0, _n: 0 };
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

  renderCandles($("priceChart"), localCandles[selectedStockId] || [], base);
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

function renderCandles(canvas, candles, basePrice) {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth || 600;
  const cssH = canvas.clientHeight || 260;
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);
  if (!candles.length) return;

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

  const n = Math.max(candles.length, 14); // 최소 칸 수 확보
  const cw = plotW / n;
  const bodyW = Math.max(2.5, Math.min(14, cw * 0.64));

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
