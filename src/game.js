// src/game.js - 게임 로직 (가상 데이터 생성, 가격 변동, 거래 처리)
// 주의: 이 게임의 모든 회사명/가격/뉴스는 100% 가상 데이터입니다.
import { db } from "./firebase.js";
import {
  ref,
  set,
  get,
  update,
  push,
  remove,
  runTransaction,
} from "firebase/database";

// ----- 게임 상수 -----
export const START_CASH = 10_000_000; // 시작 자본 1천만원 (모의투자 기준)
export const MIN_PRICE = 10; // 최저가 (10원 이하로 안 내려감)
export const MAX_PLAYERS = 6;
export const MIN_PLAYERS = 1; // 1명이면 혼자 테스트 가능 (정식 대전은 2명 이상 권장)
export const STOCK_COUNT = 5; // 시작 시 일반 회사 수
export const MAX_NORMAL_STOCKS = 9; // 일반 회사 최대 수 (IPO 포함)
export const TICK_MS = 4000; // 시장 틱 주기 (4초: '하루' 같은 느린 흐름 + Firebase 사용량 절감)
const NEWS_CHANCE = 0.035; // 매 틱(4초)마다 뉴스 발생 확률 → 평균 약 2분에 1번 (영구 게임에 맞춰 드물게)
const IPO_CHANCE = 0.008; // 진행 중 공모가 없을 때 매 틱마다 새 공모 시작 확률 (평균 약 8분에 1번)
const IPO_SUBSCRIBE_MS = 30000; // 공모주 청약 기간 (30초)

// 거래 비용 (실제 한국 증시 기준 단순화)
export const FEE_RATE = 0.00015; // 위탁수수료 0.015% (매수·매도 공통)
export const TAX_RATE = 0.0018; // 증권거래세 0.18% (매도 시에만)
export const DAY_MS = 3 * 60 * 1000; // '당일' 주문 유효시간 (게임에선 3분으로 단순화)

// ----- 가상 회사 풀 (전부 허구) -----
const COMPANY_POOL = [
  "달빛전자",
  "구름소프트",
  "번개모빌리티",
  "바다식품",
  "별빛바이오",
  "한입게임즈",
  "초록에너지",
  "솜사탕유통",
  "무지개항공",
  "도토리금융",
  "은하반도체",
  "포근화학",
  "두근로보틱스",
  "새벽엔터",
  "고래물산",
  "민들레제약",
];

// IPO 신규 상장 회사 풀 (게임 중 새로 등장)
const IPO_POOL = [
  "떡상테크",
  "유니콘소프트",
  "미래모빌",
  "첫걸음바이오",
  "샛별에너지",
  "루키게임즈",
  "신화엔터",
  "퀀텀반도체",
];

// ----- 업종 구성 (전부 허구) -----
// 업종마다: 대장주 1 + 부대장주 2 + 관련주 7 + 일반주 3 = 13종목
const SECTORS = [
  { key: "semi", name: "반도체", leader: "은하반도체", suffixes: ["반도체", "전자", "소자", "머티리얼즈", "시스템", "테크", "세미콘"] },
  { key: "bio", name: "바이오", leader: "별빛바이오", suffixes: ["바이오", "제약", "파마", "셀", "진단", "메디", "테라퓨틱스"] },
  { key: "battery", name: "2차전지", leader: "번개배터리", suffixes: ["배터리", "에너지", "케미칼", "머티리얼", "파워", "솔라", "ESS"] },
  { key: "net", name: "인터넷·게임", leader: "구름소프트", suffixes: ["소프트", "게임즈", "엔터", "네트웍스", "스튜디오", "플랫폼", "미디어"] },
];
const NAME_PREFIX = [
  "별빛", "달빛", "은하", "구름", "번개", "바다", "초록", "솜사탕", "무지개", "도토리",
  "한입", "포근", "두근", "새벽", "고래", "민들레", "노을", "단비", "햇살", "모래",
  "안개", "서리", "물결", "바람", "이슬", "구슬", "파도", "돌담", "오름", "나래",
  "미르", "해솔", "가람", "마루", "아라", "여울", "보라", "수풀", "겨울", "봄날",
];

// ----- 가상 세력(봇 트레이더) 이름 풀 (전부 허구) -----
const BOT_POOL = [
  "개미부대",
  "왕개미",
  "큰손",
  "수상한세력",
  "외국인",
  "기관",
  "전설의단타",
  "스캘퍼",
  "장기투자자",
  "물타기달인",
];

// ----- 가상 뉴스 풀 (effect: 가격 변동 배율 범위) -----
const NEWS_POOL = [
  { text: "{name}, 신제품 공개에 기대감 폭발", effect: [0.05, 0.15] },
  { text: "{name}, 대형 계약 체결 소식", effect: [0.08, 0.18] },
  { text: "{name}, 깜짝 실적 발표 소문 확산", effect: [0.04, 0.12] },
  { text: "{name}, 신사업 진출 선언", effect: [0.03, 0.1] },
  { text: "{name}, 해외 진출 성공 소식", effect: [0.06, 0.14] },
  { text: "{name}, 핵심 인력 대거 이탈설", effect: [-0.15, -0.05] },
  { text: "{name}, 서비스 대규모 장애 발생", effect: [-0.12, -0.04] },
  { text: "{name}, 규제 이슈로 불확실성 확대", effect: [-0.18, -0.08] },
  { text: "{name}, 자금난 우려 제기", effect: [-0.14, -0.06] },
  { text: "{name}, 경쟁사 등장으로 점유율 하락 전망", effect: [-0.1, -0.03] },
];

// ----- 유틸 -----
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rand(min, max) {
  return Math.random() * (max - min) + min;
}
function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 종목 유형: stock(일반주) | preferred(우선주) | etf | reit | spac | inverse | leverage | bond | commodity
// 역할(role): leader(대장주) | sub(부대장주) | related(관련주) | normal(일반주)
// 종목 객체 하나 생성 — opts: { type, role, sector, link(추종 대상 id) }
function makeStock(name, price, opts = {}) {
  const type = opts.type || "stock";
  const role = opts.role || null;
  price = roundToTick(Math.max(MIN_PRICE, price));
  // 유형/역할별 성격(변동성 volat, 거래활발도 activ)
  let volat = 1, activ = 1;
  if (type === "stock") {
    if (role === "leader") { volat = rand(0.8, 1.4); activ = rand(2.0, 3.0); }
    else if (role === "sub") { volat = rand(0.9, 1.6); activ = rand(1.2, 2.2); }
    else if (role === "related") { volat = rand(0.7, 2.0); activ = rand(0.6, 1.8); }
    else { volat = rand(0.5, 2.4); activ = rand(0.3, 1.2); } // normal
  } else if (type === "preferred") { volat = rand(0.4, 0.8); activ = rand(0.5, 1.1); }
  else if (type === "etf") { volat = rand(0.5, 0.8); activ = rand(1.5, 2.5); }
  else if (type === "reit") { volat = rand(0.35, 0.7); activ = rand(0.6, 1.2); }
  else if (type === "bond") { volat = rand(0.2, 0.45); activ = rand(0.8, 1.4); }
  else if (type === "spac") { volat = rand(0.2, 0.5); activ = rand(0.4, 0.9); }
  else if (type === "commodity") { volat = rand(0.9, 1.8); activ = rand(1.0, 2.0); }
  else if (type === "inverse" || type === "leverage") { volat = 1.0; activ = rand(1.5, 2.5); }

  return {
    name,
    type,
    role: role || "",
    sector: opts.sector || "",
    link: opts.link || "", // 추종 대상(우선주→보통주, 지수형→지수)
    price,
    previousPrice: price,
    basePrice: price,
    open: price,
    high: price,
    low: price,
    changeRate: 0,
    volume: 0,
    value: 0,
    pressure: 0,
    trend: 0,
    volat: +volat.toFixed(2),
    activ: +activ.toFixed(2),
    heat: 0,
    news: "",
  };
}

// ----- 시작 종목 생성: 업종별 13종목 + 다양한 자산(ETF·리츠·SPAC·우선주·채권·원자재·인버스·레버리지) -----
export function generateStocks() {
  const stocks = {};
  const used = new Set();
  const pickName = (suffix) => {
    for (let t = 0; t < 50; t++) {
      const n = NAME_PREFIX[randInt(0, NAME_PREFIX.length - 1)] + suffix;
      if (!used.has(n)) { used.add(n); return n; }
    }
    return NAME_PREFIX[randInt(0, NAME_PREFIX.length - 1)] + suffix + randInt(1, 99);
  };
  let n = 0;
  const add = (price, opts) => { const id = "s" + n++; stocks[id] = makeStock(opts.name, price, opts); return id; };

  // 업종별 구성: 대장주 1 + 부대장주 2 + 관련주 7 + 일반주 3
  SECTORS.forEach((sec) => {
    used.add(sec.leader);
    const sfx = () => sec.suffixes[randInt(0, sec.suffixes.length - 1)];
    const leaderId = add(randInt(60000, 130000), { name: sec.leader, type: "stock", role: "leader", sector: sec.name });
    for (let i = 0; i < 2; i++) add(randInt(25000, 70000), { name: pickName(sec.suffixes[0]), type: "stock", role: "sub", sector: sec.name });
    for (let i = 0; i < 7; i++) add(randInt(4000, 45000), { name: pickName(sfx()), type: "stock", role: "related", sector: sec.name });
    for (let i = 0; i < 3; i++) add(randInt(1500, 22000), { name: pickName(sfx()), type: "stock", role: "normal", sector: sec.name });
    // 업종 대장주의 우선주
    add(Math.round(stocks[leaderId].price * 0.82), { name: sec.leader + "우", type: "preferred", sector: sec.name, link: leaderId });
  });

  // 다양한 자산 (지수/시장 추종형 + 독립형)
  add(10000, { name: "조스피 지수 ETF", type: "etf", link: "index" });
  add(10000, { name: "마켓 인버스 ETF", type: "inverse", link: "index" });
  add(10000, { name: "마켓 레버리지2X ETF", type: "leverage", link: "index" });
  add(10000, { name: "국채 3년 채권 ETF", type: "bond" });
  add(20000, { name: "골드 원자재 ETF", type: "commodity" });
  add(15000, { name: "원유 원자재 ETF", type: "commodity" });
  add(5000, { name: "도심 리츠 REITs", type: "reit" });
  add(5000, { name: "물류 리츠 REITs", type: "reit" });
  add(2000, { name: "미래합병1호 SPAC", type: "spac" });
  add(2000, { name: "성장합병2호 SPAC", type: "spac" });
  return stocks;
}

// 종목 유형 한글 라벨
export function typeLabel(type) {
  return {
    preferred: "우선주", etf: "ETF", reit: "리츠", spac: "SPAC",
    inverse: "인버스", leverage: "레버리지", bond: "채권ETF", commodity: "원자재",
  }[type] || "";
}
// 업종 내 역할 라벨
export function roleLabel(role) {
  return { leader: "대장주", sub: "부대장주", related: "관련주", normal: "일반주" }[role] || "";
}
// 일반 주식 계열(업종 소속 equity)인지
function isEquity(type) {
  return !type || type === "stock";
}

// 상한가/하한가: 기준가(전일종가) 대비 ±30% (한국 증시 가격제한폭)
export function upperLimit(base) {
  return Math.round(base * 1.3);
}
export function lowerLimit(base) {
  return Math.max(MIN_PRICE, Math.round(base * 0.7));
}

// 호가 단위(틱 사이즈): 가격대별로 다름 (한국거래소 방식 단순화)
export function tickSize(price) {
  if (price < 2000) return 1;
  if (price < 5000) return 5;
  if (price < 20000) return 10;
  if (price < 50000) return 50;
  if (price < 200000) return 100;
  return 500;
}
// 가격을 호가 단위에 맞춰 반올림
export function roundToTick(price) {
  const t = tickSize(price);
  return Math.round(price / t) * t;
}

// ----- 시장 틱 (방장만 2초마다 실행) -----
// 1) 약한 랜덤 변동  2) 플레이어 매수/매도 압력  3) 봇 세력 거래  4) 확률적 뉴스 이벤트
// ※ Firebase 사용량 절감을 위해:
//   - 가격 기록(history)은 DB에 저장하지 않고 각 클라이언트가 로컬로 누적한다
//   - 봇 거래는 별도 노드에 쌓지 않고 매 틱 botFeed 필드 하나만 덮어쓴다
export async function marketTick(roomCode, roomData) {
  const stocks = roomData.stocks || {};
  const ids = Object.keys(stocks);
  if (ids.length === 0) return;

  // 뉴스 이벤트 발생 여부 결정 — 활발/과열된 종목일수록 뉴스가 잘 붙는다 (정보가 행동을 따라감)
  let newsTargetId = null;
  let newsEffect = 0;
  let newsText = "";
  if (Math.random() < NEWS_CHANCE) {
    const normalIds = ids.filter((id) => isEquity(stocks[id].type));
    const pool = normalIds.length ? normalIds : ids;
    const weights = pool.map((id) => 1 + (stocks[id].activ || 1) + (stocks[id].heat || 0) * 2);
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    newsTargetId = pool[pool.length - 1];
    for (let i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) { newsTargetId = pool[i]; break; } }
    const tpl = NEWS_POOL[randInt(0, NEWS_POOL.length - 1)];
    newsEffect = rand(tpl.effect[0], tpl.effect[1]) * 0.4; // 뉴스 충격 완화(하루 흐름)
    newsText = tpl.text.replace("{name}", stocks[newsTargetId].name);
  }

  const now = Date.now();
  const updates = {};
  const botCandidates = []; // 이번 틱에 발생한 모든 봇 거래 후보

  // 종목별 봇 거래 생성 (순매수량 + 거래량 반환)
  // 종목의 거래활발도(activ)와 과열(heat)에 따라 거래량이 크게 달라진다 → 한산한 주식 ~ 폭발하는 주식
  function genBots(s) {
    const activ = (s.activ || 1) * (1 + (s.heat || 0)); // 과열되면 거래 폭증
    let botNet = 0, botVolume = 0;
    const tradeChance = clamp(0.35 + activ * 0.2, 0.25, 0.97);
    if (Math.random() < tradeChance) {
      const count = randInt(1, Math.max(2, Math.round(1 + activ * 3)));
      for (let i = 0; i < count; i++) {
        const qty = randInt(10, Math.round(60 + activ * 220));
        const buyChance = 0.5 + clamp((s.trend || 0) * 15, -0.3, 0.3);
        const isBuy = Math.random() < buyChance;
        botNet += isBuy ? qty : -qty;
        botVolume += qty;
        botCandidates.push({
          nickname: BOT_POOL[randInt(0, BOT_POOL.length - 1)],
          type: isBuy ? "buy" : "sell",
          stockName: s.name,
          qty,
          price: s.price,
          time: now,
        });
      }
    }
    // 배경 거래량: 거래활발도에 비례 (한산한 종목은 적게, 활발한 종목은 폭발적으로)
    botVolume += Math.round(randInt(300, 2500) * activ);
    return { botNet, botVolume };
  }

  // 계산된 drift로 종목 가격/시고저/거래량 업데이트를 기록 (공통, 변경 필드만 기록 → 전송량 절감)
  function applyStock(id, s, drift, botVolume, extra = {}) {
    const base = s.basePrice || s.price;
    let newPrice = roundToTick(s.price * (1 + drift));
    newPrice = clamp(newPrice, lowerLimit(base), upperLimit(base));
    newPrice = Math.max(MIN_PRICE, newPrice);
    const P = `stocks/${id}/`;
    updates[P + "previousPrice"] = s.price;
    updates[P + "price"] = newPrice;
    updates[P + "changeRate"] = +(((newPrice - base) / base) * 100).toFixed(2);
    updates[P + "volume"] = (s.volume || 0) + botVolume;
    updates[P + "value"] = (s.value || 0) + botVolume * newPrice;
    if (newPrice > (s.high || s.price)) updates[P + "high"] = newPrice;
    if (newPrice < (s.low || s.price)) updates[P + "low"] = newPrice;
    if ((s.pressure || 0) !== 0) updates[P + "pressure"] = 0;
    if (extra.trend != null) updates[P + "trend"] = +extra.trend.toFixed(5);
    if (extra.heat != null && (extra.heat > 0.001 || (s.heat || 0) > 0.001)) updates[P + "heat"] = +extra.heat.toFixed(3);
    if (extra.news != null) updates[P + "news"] = extra.news;
    return (newPrice / s.price) - 1; // 이번 틱 변동률 (지수/추종 계산용)
  }

  // 일반주(업종 소속)의 자체 변동 성분 (느린 '하루' 흐름 — 매우 완만)
  function equityOwn(s) {
    const volat = s.volat || 1;
    let heat = (s.heat || 0) * 0.92;
    if (Math.random() < 0.008) heat = clamp(heat + rand(0.4, 1.2), 0, 2.0); // 가끔 테마 발동
    const effVolat = volat * (1 + heat * 0.6);
    const trend = clamp((s.trend || 0) * 0.95 + (Math.random() - 0.5) * 0.0015 * effVolat, -0.006 * (1 + heat * 0.5), 0.006 * (1 + heat * 0.5));
    let own = (Math.random() - 0.5) * 0.0035 * effVolat + trend;
    if (Math.random() < 0.008) own += (Math.random() - 0.5) * 0.02 * (1 + heat * 0.5); // 돌발 변동(예측 불가)
    return { own, trend, heat };
  }

  const moveById = {};
  const sectorMove = {};
  const equityMoves = [];

  // ===== 1패스: 업종 대장주 → 업종 흐름 결정 =====
  for (const id of ids) {
    const s = stocks[id];
    if (!isEquity(s.type) || s.role !== "leader") continue;
    const { own, trend, heat } = equityOwn(s);
    const { botNet, botVolume } = genBots({ ...s, heat });
    let drift = own + clamp((s.pressure || 0) * 0.002, -0.02, 0.02) + clamp(botNet * 0.0002, -0.008, 0.008);
    if (id === newsTargetId) drift += newsEffect;
    const chg = applyStock(id, s, drift, botVolume, { trend, heat, news: id === newsTargetId ? newsText : null });
    moveById[id] = chg;
    sectorMove[s.sector] = chg;
    equityMoves.push(chg);
  }

  // ===== 2패스: 부대장주·관련주·일반주 → 대장주(업종) 흐름을 추종 =====
  for (const id of ids) {
    const s = stocks[id];
    if (!isEquity(s.type) || s.role === "leader") continue;
    const follow = s.role === "related" ? 0.7 : s.role === "sub" ? 0.45 : 0.2; // 관련주가 가장 강하게 추종
    const secMv = sectorMove[s.sector] || 0;
    const { own, trend, heat } = equityOwn(s);
    const { botNet, botVolume } = genBots({ ...s, heat });
    let drift = secMv * follow + own * (1 - follow * 0.5);
    drift += clamp((s.pressure || 0) * 0.002, -0.02, 0.02) + clamp(botNet * 0.0002, -0.008, 0.008);
    if (id === newsTargetId) drift += newsEffect;
    const chg = applyStock(id, s, drift, botVolume, { trend, heat, news: id === newsTargetId ? newsText : null });
    moveById[id] = chg;
    equityMoves.push(chg);
  }
  const indexChange = equityMoves.length ? equityMoves.reduce((a, b) => a + b, 0) / equityMoves.length : 0;

  // ===== 3패스: 다양한 자산(ETF·인버스·레버리지·채권·원자재·리츠·SPAC·우선주) =====
  for (const id of ids) {
    const s = stocks[id];
    if (isEquity(s.type)) continue;
    const { botNet, botVolume } = genBots(s);
    const noise = Math.random() - 0.5;
    let drift = 0;
    switch (s.type) {
      case "etf": drift = indexChange + noise * 0.0015; break; // 지수 추종
      case "inverse": drift = -indexChange + noise * 0.0015; break; // 지수 역방향
      case "leverage": drift = 2 * indexChange + noise * 0.002; break; // 지수 2배
      case "bond": drift = -0.25 * indexChange + 0.0002 + noise * 0.0012; break; // 안전자산: 약한 역상관 + 미세 우상향
      case "reit": drift = 0.2 * indexChange + 0.0002 + noise * 0.004 * (s.volat || 1); break; // 약한 동조 + 인컴
      case "commodity": drift = noise * 0.011 * (s.volat || 1) + (Math.random() < 0.01 ? (Math.random() - 0.5) * 0.05 : 0); break; // 독립 + 가끔 급변
      case "preferred": drift = (sectorMove[s.sector] || moveById[s.link] || 0) * 0.85 + noise * 0.002; break; // 보통주 추종
      case "spac": drift = noise * 0.003 + (Math.random() < 0.008 ? (Math.random() < 0.7 ? 1 : -1) * rand(0.06, 0.2) : 0); break; // 평소 잠잠 + 가끔 합병기대 점프
      default: drift = noise * 0.005;
    }
    drift += clamp((s.pressure || 0) * 0.002, -0.02, 0.02) + clamp(botNet * 0.0003, -0.01, 0.01);
    applyStock(id, s, drift, botVolume, {});
  }

  // ※ 신규 상장은 공모주 청약(processIpo)을 통해 이루어진다.

  updates["marketTick"] = now;
  // 봇 거래 후보 중 최대 4건만 골라 botFeed에 담는다 (전송량 절약 + 매 틱 덮어쓰기).
  // 클라이언트가 이 값을 로컬 로그에 누적하므로 화면 로그는 끊기지 않고 계속 흐른다.
  shuffle(botCandidates);
  updates["botFeed"] = botCandidates.slice(0, 4);

  // 최신 뉴스도 필드 하나로 덮어쓰기 (IPO 공지가 이미 있으면 유지)
  if (newsText && !updates["latestNews"]) {
    updates["latestNews"] = { text: newsText, time: now };
  }

  await update(ref(db, `rooms/${roomCode}`), updates);
}

// 천단위 콤마 (게임 로직용)
function comma(n) {
  return Math.round(n || 0).toLocaleString("ko-KR");
}

// ----- 공모주 청약 시스템 (방장만 실행) -----
// 1) 진행 중 공모가 없으면 확률적으로 새 공모를 연다
// 2) 청약 마감 시각이 지나면 경쟁률만큼 비례 배정 + 미배정분 환불 + 상장
export async function processIpo(roomCode, roomData) {
  const now = Date.now();
  const stocks = roomData.stocks || {};
  const ipo = roomData.ipo;

  // ===== 청약 마감 → 배정 & 상장 =====
  if (ipo && ipo.status === "subscribing") {
    if (now < ipo.endsAt) return; // 아직 청약 기간

    const applies = ipo.applies || {};
    const playerDemand = Object.values(applies).reduce((a, b) => a + (b || 0), 0);
    const totalDemand = (ipo.botDemand || 0) + playerDemand;
    const ratio = Math.max(1, totalDemand / ipo.totalShares); // 경쟁률
    // 시초가: 경쟁률이 높을수록 비싸게 형성 (따상 느낌), 공모가의 0.9~2.3배
    const factor = clamp(0.92 + (ratio - 1) * 0.1 + rand(-0.1, 0.15), 0.9, 2.3);
    const listPrice = Math.max(MIN_PRICE, roundToTick(ipo.offerPrice * factor));

    // 종목 상장 + 공모 종료 (한 번에 기록)
    const newStock = makeStock(ipo.name, listPrice, { type: "stock", role: "normal", sector: "신규상장" });
    newStock.ipo = true; // 공모주 출신 표시
    const rr = (((listPrice - ipo.offerPrice) / ipo.offerPrice) * 100).toFixed(1);
    await update(ref(db, `rooms/${roomCode}`), {
      [`stocks/${ipo.stockId}`]: newStock,
      ipo: null,
      latestNews: {
        text: `🎉 ${ipo.name} 상장! 공모가 ${comma(ipo.offerPrice)} → 시초가 ${comma(listPrice)} (${rr >= 0 ? "+" : ""}${rr}%) · 경쟁률 ${ratio.toFixed(1)}:1`,
        time: now,
      },
    });

    // 청약한 플레이어에게 배정 + 미배정분 환불 (개별 트랜잭션)
    for (const [uid, qtyRaw] of Object.entries(applies)) {
      const qty = qtyRaw || 0;
      const allocated = Math.floor(qty / ratio);
      const refund = ipo.offerPrice * (qty - allocated);
      await runTransaction(ref(db, `rooms/${roomCode}/players/${uid}`), (p) => {
        if (!p) return p;
        if (refund > 0) p.cash = (p.cash || 0) + refund;
        if (allocated > 0) {
          p.holdings = p.holdings || {};
          p.holdings[ipo.stockId] = (p.holdings[ipo.stockId] || 0) + allocated;
        }
        return p;
      });
    }
    return;
  }

  // ===== 새 공모 시작 =====
  if (ipo) return; // 이미 진행 중
  if (Object.keys(stocks).length >= 90) return; // 전체 종목 수 상한
  if (Math.random() >= IPO_CHANCE) return;

  const used = Object.values(stocks).map((s) => s.name);
  const pool = [...COMPANY_POOL, ...IPO_POOL].filter((n) => !used.includes(n));
  if (!pool.length) return;

  const name = pool[randInt(0, pool.length - 1)];
  const offerPrice = roundToTick(randInt(5000, 60000));
  const totalShares = randInt(50000, 200000);
  // 봇 청약 수요: 총 공모주식의 0.4~9배 (경쟁률을 다양하게)
  const botDemand = Math.floor(totalShares * rand(0.4, 9));
  const stockId = "ipo" + now.toString(36);

  await update(ref(db, `rooms/${roomCode}`), {
    ipo: {
      stockId,
      name,
      offerPrice,
      totalShares,
      botDemand,
      status: "subscribing",
      startedAt: now,
      endsAt: now + IPO_SUBSCRIBE_MS,
    },
    latestNews: {
      text: `공모주 청약 시작! '${name}' 공모가 ${comma(offerPrice)}원 · ${Math.round(IPO_SUBSCRIBE_MS / 1000)}초 후 마감`,
      time: now,
    },
  });
}

// ----- 공모주 청약 (플레이어) -----
export async function applyIpo(roomCode, uid, qty, roomData) {
  const ipo = roomData.ipo;
  if (!ipo || ipo.status !== "subscribing") throw new Error("청약 가능한 공모주가 없습니다.");
  if (Date.now() >= ipo.endsAt) throw new Error("청약이 마감되었습니다.");
  qty = Math.floor(qty);
  if (!qty || qty < 1) throw new Error("청약 수량을 확인하세요.");
  const cost = ipo.offerPrice * qty; // 청약 증거금 (전액 선납, 미배정분은 환불)

  // 현금에서 증거금 차감 (부족하면 중단)
  const res = await runTransaction(ref(db, `rooms/${roomCode}/players/${uid}/cash`), (c) => {
    if (c == null) return c;
    if (c < cost) return; // 중단
    return c - cost;
  });
  if (!res.committed) throw new Error("청약 증거금(현금)이 부족합니다.");

  // 청약 수량 누적
  await runTransaction(ref(db, `rooms/${roomCode}/ipo/applies/${uid}`), (v) => (v || 0) + qty);
}

// 공모 경쟁률(현재까지) 계산 — UI 표시용
export function ipoRatio(ipo) {
  if (!ipo) return 0;
  const playerDemand = Object.values(ipo.applies || {}).reduce((a, b) => a + (b || 0), 0);
  return ((ipo.botDemand || 0) + playerDemand) / ipo.totalShares;
}

// ===== 예약 주문 (지정가 / 손절 / 익절) =====
// spec: { side:'buy'|'sell', trigger:'below'|'above', tif:'gtc'|'day'|'ioc', label }
//  - 지정가 매수: side buy, trigger 'below' (이 가격 이하로 내려오면 매수)
//  - 지정가/익절 매도: side sell, trigger 'above' (이 가격 이상이면 매도)
//  - 손절 매도: side sell, trigger 'below' (이 가격 이하로 내려가면 매도)
export async function placeOrder(roomCode, uid, nickname, stockId, spec, qty, target, roomData) {
  const stock = roomData.stocks?.[stockId];
  if (!stock) throw new Error("종목을 선택하세요.");
  const side = spec.side;
  if (side !== "buy" && side !== "sell") throw new Error("주문 유형 오류");
  const trigger = spec.trigger === "above" ? "above" : "below";
  const tif = ["gtc", "day", "ioc"].includes(spec.tif) ? spec.tif : "gtc";
  qty = Math.floor(qty);
  if (!qty || qty < 1) throw new Error("수량을 확인하세요.");
  target = roundToTick(Number(target));
  if (!target || target < MIN_PRICE) throw new Error("주문 가격을 확인하세요.");

  const now = Date.now();
  const order = {
    uid,
    nickname,
    stockId,
    stockName: stock.name,
    side,
    trigger,
    tif,
    label: spec.label || "지정가",
    qty,
    target,
    createdAt: now,
    expiresAt: tif === "day" ? now + DAY_MS : null,
  };
  const key = push(ref(db, `rooms/${roomCode}/orders`)).key;
  await set(ref(db, `rooms/${roomCode}/orders/${key}`), order);
  return key;
}

export async function cancelOrder(roomCode, orderId) {
  await remove(ref(db, `rooms/${roomCode}/orders/${orderId}`));
}

// 방장 전용: 매 틱 예약 주문을 점검해 조건 충족 시 시장가로 체결한다.
export async function processOrders(roomCode, roomData) {
  const orders = roomData.orders;
  if (!orders) return;
  const now = Date.now();
  for (const [id, o] of Object.entries(orders)) {
    const stock = roomData.stocks?.[o.stockId];
    if (!stock) {
      await remove(ref(db, `rooms/${roomCode}/orders/${id}`));
      continue;
    }
    const price = stock.price;
    const trigger = o.trigger || (o.side === "buy" ? "below" : "above"); // 구버전 호환
    const hit = trigger === "below" ? price <= o.target : price >= o.target;

    if (hit) {
      try {
        if (o.side === "buy") {
          await buyStock(roomCode, o.uid, o.nickname, o.stockId, o.qty, roomData);
        } else {
          await sellStock(roomCode, o.uid, o.nickname, o.stockId, o.qty, roomData);
        }
      } catch (e) {
        console.warn("[order] 예약 체결 실패, 취소:", o, e?.message);
      }
      await remove(ref(db, `rooms/${roomCode}/orders/${id}`));
      continue;
    }
    // 미체결 처리: IOC 는 즉시 취소, 당일(day) 은 만료 시 취소
    if (o.tif === "ioc") {
      await remove(ref(db, `rooms/${roomCode}/orders/${id}`));
    } else if (o.expiresAt && now > o.expiresAt) {
      await remove(ref(db, `rooms/${roomCode}/orders/${id}`));
    }
  }
}

// 내 예약 주문 목록 (UI용)
export function myOrders(roomData, uid) {
  const orders = roomData.orders || {};
  return Object.entries(orders)
    .filter(([, o]) => o.uid === uid)
    .map(([id, o]) => ({ id, ...o }))
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}

// ----- 매수 -----
export async function buyStock(roomCode, uid, nickname, stockId, qty, roomData) {
  const stock = roomData.stocks?.[stockId];
  if (!stock) throw new Error("종목을 선택하세요.");
  qty = Math.floor(qty);
  if (!qty || qty < 1) throw new Error("수량을 확인하세요.");
  const price = stock.price;
  // 매수 총비용 = 체결금액 + 위탁수수료
  const cost = Math.ceil(price * qty * (1 + FEE_RATE));

  // 트랜잭션으로 현금/보유량을 안전하게 변경 (동시 거래 충돌 방지)
  const result = await runTransaction(
    ref(db, `rooms/${roomCode}/players/${uid}`),
    (p) => {
      if (!p) return p;
      if ((p.cash || 0) < cost) return; // undefined 반환 = 중단(현금 부족)
      p.cash = (p.cash || 0) - cost;
      p.holdings = p.holdings || {};
      const prevQty = p.holdings[stockId] || 0;
      // 평균 매입단가(체결가 기준) 가중평균 갱신
      p.avgCost = p.avgCost || {};
      const prevAvg = p.avgCost[stockId] || 0;
      p.avgCost[stockId] = Math.round((prevQty * prevAvg + qty * price) / (prevQty + qty));
      p.holdings[stockId] = prevQty + qty;
      return p;
    }
  );
  if (!result.committed) throw new Error("현금(수수료 포함)이 부족합니다.");

  await afterTrade(roomCode, stockId, qty, +qty, {
    type: "buy",
    nickname,
    stockName: stock.name,
    qty,
    price,
    time: Date.now(),
  });
}

// ----- 매도 -----
export async function sellStock(roomCode, uid, nickname, stockId, qty, roomData) {
  const stock = roomData.stocks?.[stockId];
  if (!stock) throw new Error("종목을 선택하세요.");
  qty = Math.floor(qty);
  if (!qty || qty < 1) throw new Error("수량을 확인하세요.");
  const price = stock.price;

  // 매도 실수령액 = 체결금액 − 위탁수수료 − 증권거래세
  const proceeds = Math.floor(price * qty * (1 - FEE_RATE - TAX_RATE));

  const result = await runTransaction(
    ref(db, `rooms/${roomCode}/players/${uid}`),
    (p) => {
      if (!p) return p;
      const have = p.holdings?.[stockId] || 0;
      if (have < qty) return; // 보유량 부족 → 중단
      p.cash = (p.cash || 0) + proceeds;
      p.holdings[stockId] = have - qty;
      if (p.holdings[stockId] === 0) {
        delete p.holdings[stockId];
        if (p.avgCost) delete p.avgCost[stockId]; // 전량 매도 시 평균단가 제거
      }
      return p;
    }
  );
  if (!result.committed) throw new Error("보유 수량이 부족합니다.");

  await afterTrade(roomCode, stockId, qty, -qty, {
    type: "sell",
    nickname,
    stockName: stock.name,
    qty,
    price,
    time: Date.now(),
  });
}

// ----- 전량 매도 -----
export async function sellAllStock(roomCode, uid, nickname, stockId, roomData) {
  const have = roomData.players?.[uid]?.holdings?.[stockId] || 0;
  if (have < 1) throw new Error("보유 수량이 없습니다.");
  return sellStock(roomCode, uid, nickname, stockId, have, roomData);
}

// 거래 후 공통 처리: 거래량/거래대금/압력 갱신 + 거래 로그 기록
async function afterTrade(roomCode, stockId, qty, pressureDelta, log) {
  await Promise.all([
    runTransaction(
      ref(db, `rooms/${roomCode}/stocks/${stockId}/volume`),
      (v) => (v || 0) + qty
    ),
    runTransaction(
      ref(db, `rooms/${roomCode}/stocks/${stockId}/value`),
      (v) => (v || 0) + qty * log.price
    ),
    runTransaction(
      ref(db, `rooms/${roomCode}/stocks/${stockId}/pressure`),
      (v) => (v || 0) + pressureDelta
    ),
    push(ref(db, `rooms/${roomCode}/logs`), log),
  ]);
}

// ----- 총자산 계산 (현금 + 보유 주식 평가액) -----
export function calcTotalAsset(player, stocks) {
  let total = player?.cash || 0;
  const holdings = player?.holdings || {};
  for (const [stockId, qty] of Object.entries(holdings)) {
    const price = stocks?.[stockId]?.price || 0;
    total += price * qty;
  }
  return total;
}

// ----- 순위 계산 (총자산 내림차순) -----
export function calcRanking(players, stocks) {
  return Object.entries(players || {})
    .map(([uid, p]) => ({
      uid,
      nickname: p.nickname,
      connected: p.connected !== false,
      total: calcTotalAsset(p, stocks),
    }))
    .sort((a, b) => b.total - a.total);
}

// ----- 게임 시작 (방장 전용) -----
export async function startGame(roomCode, roomData) {
  const players = roomData.players || {};
  const count = Object.keys(players).length;
  if (count < MIN_PLAYERS) throw new Error(`최소 ${MIN_PLAYERS}명이 필요합니다.`);
  if (count > MAX_PLAYERS) throw new Error(`최대 ${MAX_PLAYERS}명까지 가능합니다.`);

  const now = Date.now();
  const updates = {
    status: "playing",
    startedAt: now,
    endsAt: null, // 시간 제한 없음 (방장이 직접 종료)
    stocks: generateStocks(),
    logs: null, // 이전 로그 초기화
    latestNews: null, // 이전 뉴스 초기화
    botFeed: null, // 이전 봇 거래 초기화
    orders: null, // 이전 예약 주문 초기화
    ipo: null, // 이전 공모 초기화
    marketTick: now,
  };
  // 모든 플레이어에게 시작 자본 지급, 보유 주식 초기화
  for (const uid of Object.keys(players)) {
    updates[`players/${uid}/cash`] = START_CASH;
    updates[`players/${uid}/holdings`] = null;
    updates[`players/${uid}/totalAsset`] = START_CASH;
  }
  await update(ref(db, `rooms/${roomCode}`), updates);
}

// ----- 게임 종료 (방장 전용): 최종 총자산 기록 후 상태 변경 -----
export async function endGame(roomCode, roomData) {
  const updates = { status: "ended", endedAt: Date.now() };
  const players = roomData.players || {};
  for (const [uid, p] of Object.entries(players)) {
    updates[`players/${uid}/totalAsset`] = calcTotalAsset(p, roomData.stocks);
  }
  await update(ref(db, `rooms/${roomCode}`), updates);
}

// ----- 방 정리 (관리자 전용) -----
// 방은 시간이 지나도 자동 삭제되지 않는다(영구). 이 함수는 '종료된' 방만 정리한다.
export async function cleanupOldRooms() {
  const snap = await get(ref(db, "rooms"));
  if (!snap.exists()) return 0;
  const rooms = snap.val();
  let removed = 0;
  for (const [code, room] of Object.entries(rooms)) {
    if (room.status === "ended") {
      await remove(ref(db, `rooms/${code}`));
      removed++;
    }
  }
  return removed;
}

// 특정 방 삭제 (관리자 전용)
export async function deleteRoom(roomCode) {
  await remove(ref(db, `rooms/${roomCode}`));
}
