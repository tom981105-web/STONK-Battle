// src/equip.js — 착용한 배경화면(스킨)을 Battle 화면에 적용
// 값은 rooms/{code}/players/{uid}/equippedBackground 에서 옴(main.js 가 room 구독으로 전달).
// 이미지는 Gacha 사이트의 backgrounds 폴더(같은 origin)에서 webp→jpg→png 순으로 시도.
// 이미지가 없으면(또는 미착용) 기본 배경으로 되돌린다.
const BG_IMG_BASE = "https://tom981105-web.github.io/STONK-Gacha/backgrounds/";

let lastId = undefined;

function clearBg() {
  const b = document.body;
  b.style.backgroundImage = "";
  b.style.backgroundSize = "";
  b.style.backgroundPosition = "";
  b.style.backgroundAttachment = "";
  b.classList.remove("has-equip-bg");
}

function tryLoad(urls, cb) {
  let i = 0;
  const next = () => {
    if (i >= urls.length) { cb(null); return; }
    const u = urls[i++];
    const img = new Image();
    img.onload = () => cb(u);
    img.onerror = next;
    img.src = u;
  };
  next();
}

export function applyEquippedBackground(itemId) {
  const id = itemId || null;
  if (id === lastId) return; // 변화 없으면 무시(깜빡임 방지)
  lastId = id;
  if (!id) { clearBg(); return; }
  const urls = ["webp", "jpg", "png"].map((ext) => `${BG_IMG_BASE}${id}.${ext}`);
  tryLoad(urls, (url) => {
    if (lastId !== id) return; // 그 사이 다른 걸로 바뀌었으면 취소
    if (!url) { clearBg(); return; } // 이미지가 아직 없음 → 기본 배경 유지
    const b = document.body;
    b.style.backgroundImage = `linear-gradient(rgba(8,10,16,0.74), rgba(8,10,16,0.86)), url("${url}")`;
    b.style.backgroundSize = "cover";
    b.style.backgroundPosition = "center";
    b.style.backgroundAttachment = "fixed";
    b.classList.add("has-equip-bg");
  });
}
