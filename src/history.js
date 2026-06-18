// src/history.js — 시장 경과 보정(catch-up) + 압축 캔들 히스토리 (Firebase 부분 저장)
//
// 목적(STONK 1.4.x):
//   1) 사람이 접속하지 않아도 시장이 멈춘 것처럼 보이지 않게: 마지막 tick 이후 흐른 시간을
//      "그동안 움직인 것처럼" 보정한다(catch-up). 시간 제한 없음(2시간·5시간·하루도 전부 반영).
//   2) Firebase 사용량 절감: 4초 tick 을 전부 저장하지 않고 1분/5분/15분/1시간 압축 캔들 +
//      최종 가격만 부분 update() 한다. 전체 roomData/stocks/history set() 금지.
//   3) 보정으로 만든 흐름이 차트에 끊김 없이 이어지도록 OHLC 캔들을 생성한다.
//
// 저장 구조(기존 필드는 보존, 아래는 추가):
//   rooms/{code}/market = { tickMs, lastTickAt, lastHistoryAt, lastCatchupAt, catchupVersion, catchupLock }
//   rooms/{code}/stocks/{id}/history/{candles1m,candles5m,candles15m,candles1h}/{bucketStart} = {t,o,h,l,c,v}
//   (currentPrice/price/changeRate 등 기존 가격 필드는 그대로 유지)

import { db } from "./firebase.js";
import { ref, update, runTransaction, get } from "firebase/database";
import { roundToTick, lowerLimit, upperLimit, MIN_PRICE } from "./game.js";

export const CATCHUP_VERSION = 1;

// 캔들 tier: 윈도우(ms)와 보관 개수 상한(사용량 폭증 방지)
export const TIERS = [
  { key: "candles1m", win: 60_000, cap: 240 },
  { key: "candles5m", win: 300_000, cap: 288 },
  { key: "candles15m", win: 900_000, cap: 192 },
  { key: "candles1h", win: 3_600_000, cap: 168 },
];

const MIN_CATCHUP_MS = 2 * 60_000; // 2분 미만이면 보정 생략(실시간 tick 이 처리)
const LOCK_TTL_MS = 60_000; // catch-up 락 유효시간(오래되면 자동 해제)
const WRITE_BUDGET = 4500; // 1분봉 기준 종목당 step 예산(상위 tier 가 더해져 총 기록은 ~1.4배)

// ---- 유틸 ----
function bucketStart(t, win) {
  return Math.floor(t / win) * win;
}
function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}
// 표준정규난수(Box–Muller)
function randn() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// 종목 history 객체에서 특정 tier 의 캔들 배열(시간 오름차순)을 돌려준다 — 차트/보드/위키 공용 읽기
export function readSeries(history, tierKey) {
  const obj = (history && history[tierKey]) || null;
  if (!obj) return [];
  return Object.values(obj)
    .filter((c) => c && typeof c.t === "number")
    .sort((a, b) => a.t - b.t);
}

// 여러 tier 중 가장 촘촘한(=캔들 많은) 시리즈를 고른다 (없으면 빈 배열)
export function bestSeries(history) {
  for (const tier of TIERS) {
    const s = readSeries(history, tier.key);
    if (s.length) return { tier: tier.key, candles: s };
  }
  return { tier: null, candles: [] };
}

// ===== 오프라인 시뮬레이션: 한 종목을 fromT→toT 동안 step 캔들로 전개 =====
// 핵심: catch-up 은 "살짝만 움직이는 보정"이 아니라, 사람이 없던 시간 동안 실제 4초 tick 이
// 계속 돈 것처럼 가격 흐름을 재현한다. 따라서:
//  - 각 캔들이 대표하는 실제 4초 tick 수(ticksPerCandle)를 기준으로 변동을 누적한다.
//    → step 예산(numSteps)을 줄여도 분산은 sqrt(ticks) 로 보존되어 변동폭이 약해지지 않는다.
//  - 평균회귀(base 로 끌어당김) 없음. 기준가(base)는 실시간 tick 과 동일하게 고정(±30% 밴드).
//  - 추세(모멘텀)·과열(heat)·뉴스 충격을 실시간 marketTick 성격대로 반영 → 방향성 있는 큰 흐름.
//  - 핀 고정 방지: ±30% 경계 근처에서만 약한 반발.
function simulateStock(stock, fromT, toT, numSteps) {
  const stepMs = (toT - fromT) / numSteps;
  const ticksPerCandle = Math.max(1, stepMs / 4000); // 이 캔들 = 실제 4초 tick 몇 개분
  const volat = stock.volat || 1;
  const activ = stock.activ || 1;
  const base = stock.basePrice || stock.price || MIN_PRICE; // 실시간과 동일: 기준가 고정
  let price = stock.price || base;
  let trend = stock.trend || 0;
  let heat = stock.heat || 0;
  const isEquity = !stock.type || stock.type === "stock";
  const perTick = 0.0011 * volat * (isEquity ? 1 : 0.7); // 실시간 1틱 own 표준편차 근사
  const sub = 5;
  const candles = [];

  for (let i = 0; i < numSteps; i++) {
    const t0 = fromT + stepMs * i;
    const open = price;
    const tps = ticksPerCandle / sub; // sub-step 당 실제 tick 수
    let hi = open, lo = open, cur = open;
    for (let k = 0; k < sub; k++) {
      // 추세(모멘텀): 완만한 OU 워크 — 방향성은 주되 한 방향 폭주는 막음
      trend = clamp(trend * Math.pow(0.99, tps) + randn() * 0.00018 * volat * Math.sqrt(tps), -0.0016, 0.0016);
      // 과열(테마) 가끔 발동 → 변동/거래 일시 확대
      if (Math.random() < 0.005 * tps) heat = clamp(heat + (0.3 + Math.random() * 0.7), 0, 1.6);
      heat *= Math.pow(0.94, tps);
      const effStd = perTick * (1 + heat * 0.5);
      // 변동 = 추세*틱수 + 랜덤워크(분산은 틱수에 비례 → 경과시간만큼 누적·증가)
      let ret = trend * tps + randn() * effStd * Math.sqrt(tps);
      // 뉴스 한 방 충격(드물게)
      if (Math.random() < 0.0025 * tps) ret += (Math.random() < 0.5 ? 1 : -1) * (0.006 + Math.random() * 0.018) * (isEquity ? 1 : 0.6);
      cur = cur * (1 + ret);
      // 평균회귀: 기준가 쪽으로 지수 감쇠(per-tick 1%). 절대 base 를 넘어 과도하게 당기지 않음(tps 가 커도 안전)
      cur = base + (cur - base) * Math.exp(-0.01 * tps);
      cur = clamp(cur, lowerLimit(base), upperLimit(base)); // ±30% 하드 밴드(실시간과 동일)
      cur = Math.max(MIN_PRICE, cur);
      hi = Math.max(hi, cur);
      lo = Math.min(lo, cur);
    }
    const close = roundToTick(cur);
    // 거래량: 실제 4초 tick 약 ticksPerCandle 회가 누적된 것처럼 — tick당 봇 거래량 × tick수 ×
    // (변동폭이 클수록 증가). 라이브 1분봉(≈15tick 누적)과 비슷한 수준이 되도록 스케일.
    const chg = open ? Math.abs((close - open) / open) : 0;
    const perTickVol = (400 + Math.random() * 1800) * activ * (1 + heat * 0.8);
    const vol = Math.round(perTickVol * ticksPerCandle * (1 + chg * 8));
    candles.push({
      t: t0,
      o: roundToTick(open),
      h: roundToTick(hi),
      l: roundToTick(lo),
      c: close,
      v: vol,
    });
    price = close;
  }
  return { candles, finalPrice: price, finalBase: base };
}

// step 캔들들을 tier 버킷으로 합쳐 OHLC 병합
function mergeIntoTiers(stepCandles) {
  const tiers = {}; // { tierKey: { bucketStart: candle } }
  for (const tier of TIERS) tiers[tier.key] = {};
  for (const c of stepCandles) {
    for (const tier of TIERS) {
      const bs = bucketStart(c.t, tier.win);
      const m = tiers[tier.key];
      const ex = m[bs];
      if (!ex) {
        m[bs] = { t: bs, o: c.o, h: c.h, l: c.l, c: c.c, v: c.v };
      } else {
        ex.h = Math.max(ex.h, c.h);
        ex.l = Math.min(ex.l, c.l);
        ex.c = c.c;
        ex.v += c.v;
      }
    }
  }
  return tiers;
}

// ===== 중복 보정 방지: market/catchupLock 트랜잭션 =====
async function acquireLock(roomCode, uid) {
  const now = Date.now();
  const res = await runTransaction(ref(db, `rooms/${roomCode}/market/catchupLock`), (cur) => {
    if (cur && cur.expiresAt && cur.expiresAt > now) return; // 유효한 락 존재 → 중단
    return { by: uid || "anon", at: now, expiresAt: now + LOCK_TTL_MS };
  });
  return res.committed;
}
async function releaseLock(roomCode) {
  try {
    await update(ref(db, `rooms/${roomCode}/market`), { catchupLock: null });
  } catch (e) {}
}

// 보정이 필요한지 판단 (읽기만) — board/wiki 가 "최신화" 여부 결정에 사용
export function needsCatchup(roomData) {
  if (!roomData || roomData.status !== "playing") return false;
  const last = (roomData.market && roomData.market.lastTickAt) || roomData.marketTick || 0;
  if (!last) return false;
  return Date.now() - last >= MIN_CATCHUP_MS;
}

// ===== 핵심: 시장 경과 보정 실행 (부분 update 만) =====
// opts.force = true 면 lock 경합 시에도 시도(관리자 수동). 반환: 결과 요약 객체.
export async function runCatchUp(roomCode, roomData, uid, opts = {}) {
  if (!roomData || !roomData.stocks) return { applied: false, reason: "no-stocks" };
  if (roomData.status !== "playing") return { applied: false, reason: "not-playing" };

  const now = Date.now();
  const lastTick = (roomData.market && roomData.market.lastTickAt) || roomData.marketTick || 0;
  const elapsed = now - lastTick;
  if (!opts.force && elapsed < MIN_CATCHUP_MS) return { applied: false, reason: "fresh", elapsed };

  const locked = await acquireLock(roomCode, uid);
  if (!locked && !opts.force) return { applied: false, reason: "locked" };

  try {
    // 렌더용 roomData 는 history 를 제외하므로, 병합 정확성을 위해 stocks(history 포함)를 신선하게 읽는다.
    let stocks = roomData.stocks || {};
    try {
      const fresh = await get(ref(db, `rooms/${roomCode}/stocks`));
      if (fresh.exists()) stocks = fresh.val();
    } catch (e) { /* 읽기 실패 시 전달된 roomData.stocks 로 폴백 */ }
    const ids = Object.keys(stocks);
    if (!ids.length) return { applied: false, reason: "no-stocks" };

    // 종목 수에 맞춰 종목당 step 수를 정해 전체 기록량을 예산 내로 제한(시간이 아닌 계산/저장량 제한)
    const perStock = clamp(Math.round(WRITE_BUDGET / ids.length), 30, 480);
    // 경과 분 기준이 더 적으면 그만큼만 (1분=1step 이하로는 의미 없음)
    const byMinutes = Math.max(1, Math.round(elapsed / 60_000));
    const numSteps = Math.min(perStock, byMinutes, 480);

    const updates = {};
    let candlesWritten = 0;

    for (const id of ids) {
      const s = stocks[id];
      if (!s || typeof s.price !== "number") continue;
      const sim = simulateStock(s, lastTick, now, numSteps);
      const tierObjs = mergeIntoTiers(sim.candles);
      const P = `stocks/${id}/`;
      const hist = s.history || {};

      for (const tier of TIERS) {
        const existing = hist[tier.key] || {};
        const merged = { ...existing };
        for (const [bk, cd] of Object.entries(tierObjs[tier.key])) {
          const prev = merged[bk];
          merged[bk] = prev
            ? { t: cd.t, o: prev.o, h: Math.max(prev.h, cd.h), l: Math.min(prev.l, cd.l), c: cd.c, v: (prev.v || 0) + cd.v }
            : cd;
        }
        // 최신 cap 개만 유지, 오버플로는 null 로 부분 삭제
        const keysAsc = Object.keys(merged).map(Number).sort((a, b) => a - b);
        const overflow = keysAsc.length - tier.cap;
        if (overflow > 0) {
          for (let i = 0; i < overflow; i++) updates[P + `history/${tier.key}/${keysAsc[i]}`] = null;
        }
        // 새로 생성/갱신된 버킷만 기록 (기존과 동일한 건 건너뜀)
        for (const [bk, cd] of Object.entries(tierObjs[tier.key])) {
          if (Number(bk) < keysAsc[Math.max(0, overflow)]) continue; // 잘려나갈 구간은 기록 안 함
          updates[P + `history/${tier.key}/${bk}`] = merged[bk];
          candlesWritten++;
        }
      }

      // 최종 가격/등락률 등 기존 필드 부분 갱신(보드/위키 호환 유지)
      const base = sim.finalBase;
      const finalPrice = Math.max(MIN_PRICE, roundToTick(sim.finalPrice));
      const volSum = sim.candles.reduce((a, c) => a + (c.v || 0), 0);
      updates[P + "previousPrice"] = s.price;
      updates[P + "price"] = finalPrice;
      updates[P + "currentPrice"] = finalPrice; // 일부 리더가 currentPrice 를 읽음(호환)
      // 기준가(base)는 실시간 tick 과 동일하게 고정 → basePrice 는 건드리지 않음(불필요 쓰기 제거)
      updates[P + "changeRate"] = +(((finalPrice - base) / base) * 100).toFixed(2);
      updates[P + "volume"] = (s.volume || 0) + volSum;
      updates[P + "value"] = (s.value || 0) + volSum * finalPrice;
      if (finalPrice > (s.high || s.price)) updates[P + "high"] = finalPrice;
      if (finalPrice < (s.low || s.price)) updates[P + "low"] = finalPrice;
      if (s.heat) updates[P + "heat"] = 0;
      if (s.pressure) updates[P + "pressure"] = 0;
    }

    updates["market/tickMs"] = 4000;
    updates["market/lastTickAt"] = now;
    updates["market/lastHistoryAt"] = now;
    updates["market/lastCatchupAt"] = now;
    updates["market/catchupVersion"] = CATCHUP_VERSION;
    updates["market/catchupBy"] = uid || "anon";
    updates["market/catchupLock"] = null; // 락 해제 동시 처리
    updates["marketTick"] = now; // 기존 리더들이 보는 tick 갱신

    await update(ref(db, `rooms/${roomCode}`), updates);
    return { applied: true, elapsed, numSteps, candlesWritten, stocks: ids.length };
  } catch (e) {
    await releaseLock(roomCode);
    console.error("[catchup] 실패:", e);
    return { applied: false, reason: "error", error: e?.message };
  }
}

// ===== 라이브 캔들 플러시 (방장 전용, tick 마다 호출하되 1분 경계에서만 저장) =====
// liveState: 호출자가 보관하는 가변 객체 { cur:{id:candle}, lastFlush, seeded }
export function createLiveState() {
  return { cur: {}, lastBucket: 0, seeded: false };
}

// 매 tick: 진행 중 1분 캔들을 메모리에 갱신하고, 1분 경계를 넘으면 부분 update 로 저장
export async function flushLiveCandles(roomCode, roomData, live) {
  const stocks = roomData.stocks || {};
  const now = Date.now();
  const curBucket = bucketStart(now, 60_000);
  if (!live.lastBucket) live.lastBucket = curBucket;

  // 진행 중 1분 캔들 갱신(메모리)
  for (const [id, s] of Object.entries(stocks)) {
    if (!s || typeof s.price !== "number") continue;
    let c = live.cur[id];
    if (!c || c.t !== curBucket) {
      c = { t: curBucket, o: s.price, h: s.price, l: s.price, c: s.price, v: 0, _lastVol: s.volume || 0 };
      live.cur[id] = c;
    }
    c.c = s.price;
    c.h = Math.max(c.h, s.price);
    c.l = Math.min(c.l, s.price);
    const dv = Math.max(0, (s.volume || 0) - (c._lastVol || 0));
    c.v += dv;
    c._lastVol = s.volume || 0;
  }

  if (curBucket === live.lastBucket) return; // 아직 같은 분 → 저장 안 함(사용량 절감)

  // 분 경계 넘음 → 직전 분 캔들들을 한 번의 update 로 저장
  const closedBucket = live.lastBucket;
  // 렌더용 roomData 는 history 를 제외하므로, 상위 tier(5m/15m/1h) 병합·prune 을 위해
  // history 를 신선하게 읽는다(분 경계에서만 = 분당 1회, 사용량 무시 가능).
  let histStocks = stocks;
  try {
    const fresh = await get(ref(db, `rooms/${roomCode}/stocks`));
    if (fresh.exists()) histStocks = fresh.val();
  } catch (e) { /* 읽기 실패 시 전달된 roomData 로 폴백 */ }
  const updates = {};
  let wrote = false;
  for (const id of Object.keys(stocks)) {
    const c = live.cur[id];
    if (!c) continue;
    const closed = { t: closedBucket, o: c.o, h: c.h, l: c.l, c: c.c, v: c.v };
    const P = `stocks/${id}/`;
    const hist = (histStocks[id] && histStocks[id].history) || {};
    for (const tier of TIERS) {
      const bk = bucketStart(closedBucket, tier.win);
      const existing = (hist[tier.key] && hist[tier.key][bk]) || null;
      const m = existing
        ? { t: bk, o: existing.o, h: Math.max(existing.h, closed.h), l: Math.min(existing.l, closed.l), c: closed.c, v: (existing.v || 0) + closed.v }
        : { t: bk, o: closed.o, h: closed.h, l: closed.l, c: closed.c, v: closed.v };
      updates[P + `history/${tier.key}/${bk}`] = m;
      // cap 초과분 정리(가벼운 prune): 기존 키 수가 cap 이상이면 가장 오래된 것 1개 제거
      const keys = hist[tier.key] ? Object.keys(hist[tier.key]).map(Number).sort((a, b) => a - b) : [];
      if (keys.length > tier.cap && keys[0] !== bk) updates[P + `history/${tier.key}/${keys[0]}`] = null;
    }
    wrote = true;
  }
  live.lastBucket = curBucket;
  if (!wrote) return;
  updates["market/lastTickAt"] = now;
  updates["market/lastHistoryAt"] = now;
  updates["market/tickMs"] = 4000;
  try {
    await update(ref(db, `rooms/${roomCode}`), updates);
  } catch (e) {
    console.warn("[history] 라이브 캔들 저장 실패:", e?.message);
  }
}

// 매 tick 의 가벼운 lastTickAt 갱신은 비용이 크므로 하지 않는다.
// 대신 1분마다 flushLiveCandles 가 market/lastTickAt 을 갱신한다.
