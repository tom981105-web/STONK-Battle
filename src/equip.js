// src/equip.js — 착용한 배경화면(스킨)을 Battle 화면에 적용
// 값은 rooms/{code}/players/{uid}/equippedBackground 에서 옴(main.js 가 room 구독으로 전달).
//
// 성능 노트: 예전엔 document.body 에 background-attachment:fixed 로 깔았는데,
// Battle 은 시세 틱마다 화면이 자주 다시 그려져서 "고정 배경"이 매 프레임 재페인트되어
// 렉을 유발했다. 그래서 별도의 position:fixed 레이어(#equip-bg)를 만들고
// transform:translateZ(0) 로 독립 GPU 합성 레이어로 승격시킨다.
// → 콘텐츠가 아무리 자주 갱신돼도 배경 레이어는 다시 그리지 않는다.
const BG_IMG_BASE = "https://tom981105-web.github.io/STONK-Gacha/backgrounds/";

let lastId = undefined;
let layer = null;

function ensureLayer() {
  if (layer) return layer;
  layer = document.createElement("div");
  layer.id = "equip-bg";
  Object.assign(layer.style, {
    position: "fixed",
    inset: "0",
    zIndex: "-1", // body 배경 위 · 앱 콘텐츠 아래
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    pointerEvents: "none",
    opacity: "0",
    transition: "opacity 0.35s ease",
    transform: "translateZ(0)", // 독립 합성 레이어로 승격(틱마다 재페인트 방지)
    backfaceVisibility: "hidden",
  });
  document.body.appendChild(layer);
  return layer;
}

function hide() {
  if (layer) {
    layer.style.opacity = "0";
    // 페이드 아웃 후 이미지 해제(메모리)
    const el = layer;
    setTimeout(() => { if (lastId === null && el) el.style.backgroundImage = ""; }, 400);
  }
}

function tryLoad(urls, cb) {
  let i = 0;
  const next = () => {
    if (i >= urls.length) { cb(null); return; }
    const u = urls[i++];
    const img = new Image();
    img.decoding = "async";
    img.onload = () => cb(u);
    img.onerror = next;
    img.src = u;
  };
  next();
}

export function applyEquippedBackground(itemId) {
  const id = itemId || null;
  if (id === lastId) return; // 변화 없으면 무시(틱마다 호출돼도 비용 0)
  lastId = id;
  if (!id) { hide(); return; }
  const urls = ["webp", "jpg", "png"].map((ext) => `${BG_IMG_BASE}${id}.${ext}`);
  tryLoad(urls, (url) => {
    if (lastId !== id) return; // 그 사이 다른 걸로 바뀌었으면 취소
    if (!url) { hide(); return; } // 이미지가 아직 없음 → 기본 배경 유지
    const el = ensureLayer();
    el.style.backgroundImage = `linear-gradient(rgba(8,10,16,0.72), rgba(8,10,16,0.85)), url("${url}")`;
    el.style.opacity = "1";
  });
}
