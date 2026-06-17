// src/siteConfig.js  ─ STONK 공통 사이트 설정 / roomCode 유틸 (v1.4.0)
// ───────────────────────────────────────────────────────────────────
// board/wiki/admin 의 js/site-config.js 와 동일한 규격(ES 모듈 버전).
// battle 에서 다른 사이트(board/wiki/admin)로 roomCode 를 유지하며 이동할 때 사용.
//
// ★ 배포 주소를 바꾸려면 아래 SITE_URLS 한 곳만 수정하면 됩니다. ★

const SITE_URLS = {
  home:   "https://tom981105-web.github.io/STONK-Home/",
  battle: "https://tom981105-web.github.io/STONK-Battle/",
  board:  "https://tom981105-web.github.io/STONK-Board/",
  wiki:   "https://tom981105-web.github.io/STONK-Wiki/",
  arcade: "https://tom981105-web.github.io/STONK-Arcade/",
  gacha:  "https://tom981105-web.github.io/STONK-Gacha/",
  admin:  "https://tom981105-web.github.io/STONK-Admin/market-admin.html",
};

const LOCAL_FALLBACK = {
  home:   "../STONK-Home/index.html",
  battle: "../Market-battle/index.html",
  board:  "../Market-Board/index.html",
  wiki:   "../Market-Wiki/index.html",
  arcade: "../STONK-Arcade/index.html",
  gacha:  "../STONK-Gacha/index.html",
  admin:  "../Market-Admin/market-admin.html",
};

const LAST_ROOM_KEY = "stonk:lastRoomCode";
const LEGACY_ROOM_KEYS = ["mb-board-room", "wiki-room"];

function isLocal() {
  return location.protocol === "file:" ||
    /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
}

export function getSiteConfig() {
  return { urls: { ...SITE_URLS }, local: isLocal() };
}

export function normalizeRoomCode(code) {
  return String(code || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function getUrlRoomCode() {
  try {
    const p = new URLSearchParams(location.search);
    return normalizeRoomCode(p.get("room") || p.get("roomCode") || p.get("roomId") || "");
  } catch (e) { return ""; }
}

export function setLastRoomCode(code) {
  const c = normalizeRoomCode(code);
  if (!c) return;
  try { localStorage.setItem(LAST_ROOM_KEY, c); } catch (e) {}
}

export function getLastRoomCode() {
  try {
    const c = normalizeRoomCode(localStorage.getItem(LAST_ROOM_KEY));
    if (c) return c;
    for (const k of LEGACY_ROOM_KEYS) {
      const v = normalizeRoomCode(localStorage.getItem(k));
      if (v) return v;
    }
  } catch (e) {}
  return "";
}

export function getCurrentRoomCode() {
  return getUrlRoomCode() || getLastRoomCode();
}

function baseUrl(site) {
  const configured = SITE_URLS[site];
  if (isLocal() && /github\.io/.test(configured || "")) return LOCAL_FALLBACK[site];
  return configured || LOCAL_FALLBACK[site];
}

export function buildSiteUrl(site, params) {
  const url = baseUrl(site);
  const qs = [];
  const room = normalizeRoomCode(params && params.room);
  if (room) qs.push("room=" + encodeURIComponent(room));
  const company = params && (params.company || params.companyId);
  if (company) qs.push("company=" + encodeURIComponent(company));
  if (!qs.length) return url;
  return url + (url.indexOf("?") >= 0 ? "&" : "?") + qs.join("&");
}

export function buildHomeUrl(room)   { return buildSiteUrl("home",   { room }); }
export function buildBattleUrl(room) { return buildSiteUrl("battle", { room }); }
export function buildBoardUrl(room)  { return buildSiteUrl("board",  { room }); }
export function buildWikiUrl(room, companyId) { return buildSiteUrl("wiki", { room, company: companyId }); }
export function buildArcadeUrl(room) { return buildSiteUrl("arcade", { room }); }
export function buildGachaUrl(room)  { return buildSiteUrl("gacha",  { room }); }
export function buildAdminUrl(room)  { return buildSiteUrl("admin",  { room }); }

// 전역에서도 접근 가능하게 (UI 코드 호환)
const SiteConfig = {
  VERSION: "1.4.1",
  getSiteConfig, normalizeRoomCode, getUrlRoomCode, getCurrentRoomCode,
  setLastRoomCode, getLastRoomCode, buildSiteUrl,
  buildHomeUrl, buildBattleUrl, buildBoardUrl, buildWikiUrl,
  buildArcadeUrl, buildGachaUrl, buildAdminUrl, LAST_ROOM_KEY,
};
if (typeof window !== "undefined") window.SiteConfig = SiteConfig;
export default SiteConfig;
