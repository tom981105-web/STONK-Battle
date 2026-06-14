// src/firebase.js - Firebase 초기화
//
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// ★ 아래 firebaseConfig 에 본인의 Firebase 설정을 붙여넣으세요!     ★
// ★                                                              ★
// ★ 1. https://console.firebase.google.com 접속                  ★
// ★ 2. 프로젝트 생성 → 웹 앱 추가(</>)                            ★
// ★ 3. 표시되는 firebaseConfig 객체를 그대로 복사해서             ★
// ★    아래 값들을 교체하면 됩니다.                               ★
// ★ 4. Authentication → Sign-in method → 이메일/비밀번호 사용 설정 ★
// ★ 5. Realtime Database 생성 후 databaseURL 확인                ★
// ★    (databaseURL 이 빠져 있으면 직접 추가해야 합니다!)          ★
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
const firebaseConfig = {
  apiKey: "AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",
  authDomain: "market-6e66a.firebaseapp.com",
  databaseURL: "https://market-6e66a-default-rtdb.firebaseio.com",
  projectId: "market-6e66a",
  storageBucket: "market-6e66a.firebasestorage.app",
  messagingSenderId: "402312269082",
  appId: "1:402312269082:web:cf304afc54057ea162b0a3",
};

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// 설정이 아직 비어 있는지(placeholder 그대로인지) 검사
export const isConfigured =
  !!firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.startsWith("여기에") &&
  !!firebaseConfig.databaseURL &&
  !firebaseConfig.databaseURL.startsWith("여기에");

let app = null;
let auth = null;
let db = null;

// 설정이 잘못되어도 앱 전체가 죽지 않도록 try/catch 로 감싼다.
try {
  if (isConfigured) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getDatabase(app);
  }
} catch (e) {
  console.error("[firebase] 초기화 실패:", e);
}

export { app, auth, db };
