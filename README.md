# Market Battle

친구 2~6명이 방을 만들고 접속해서, **가상의 회사 주식**을 사고팔며 제한시간(5분) 안에 가장 높은 총자산을 만드는 실시간 멀티플레이 웹 게임입니다.

> ⚠️ 이 게임의 모든 회사명, 가격, 뉴스는 **100% 가상 데이터**입니다.
> 실제 주식, 실제 기업, 실제 투자 정보와는 아무 관련이 없습니다.

## 주요 기능

- 닉네임 입력 → 방 만들기 / 방 코드 6자리로 입장
- 방당 1~6명(혼자 테스트 가능), 방장만 게임 시작 가능
- 시작 시 전원에게 모의투자 자본 **1천만원** 지급, 가상 회사 5개 + 인버스 + 레버리지 생성
- 매수 / 매도 / 전량 매도, 실시간 시세·순위·거래 로그 동기화
- **실제 주식 거래앱 스타일**: 캔들차트(봉차트, 그리드·가격축·현재가선) + 거래량 바, 호가창(매도·매수 5단계 잔량), 시가/고가/저가, 거래량/거래대금, 전일대비·등락률
- **인버스 / 레버리지2X**: 시장 지수를 역방향(-1배)·2배로 추종하는 가상 ETF — 하락장에 베팅하거나 변동을 증폭
- **공모주 청약(IPO)**: 게임 중 새 회사가 공모를 시작 → 플레이어·봇이 **청약**(증거금 선납) → **경쟁률**만큼 비례 **배정** + 미배정분 **환불** → **상장**(경쟁률 높을수록 시초가↑, 따상 차익). 상장 종목엔 NEW 배지
- **시간 제한 없음**: 방장이 원할 때 **게임 종료** 버튼으로 마감, 상단에는 경과 시간 표시
- **상한가/하한가 ±30%**, 가격대별 **호가 단위**, 매수·매도 **수수료(0.015%)·증권거래세(0.18%)** 반영
- **가상 세력(개미부대·기관·외국인 등)** 이 끊임없이 거래해 거래량과 시세가 실제 시장처럼 살아 움직임
- 매수가 많으면 상승, 매도가 많으면 하락 + 약한 랜덤 변동 + 랜덤 뉴스 이벤트로 급등/급락
- 새로고침해도 기존 방에 자동 재접속 (localStorage)
- PC / 모바일 모두 지원 (데스크톱 4분할 / 모바일 카드형 세로 배치)

## 기술 스택

Vite + Vanilla JavaScript + Firebase (Email/Password Auth, Realtime Database) + Canvas 캔들차트

---

## 설치 방법

```bash
git clone <이 저장소 주소>
cd market-battle
npm install
```

## Firebase 프로젝트 생성 방법

1. https://console.firebase.google.com 접속 후 로그인
2. **프로젝트 추가** 클릭 → 프로젝트 이름 입력(예: market-battle) → 생성
3. 프로젝트 메인 화면에서 **웹 앱 추가** (`</>` 아이콘) 클릭
4. 앱 닉네임 입력 후 등록하면 `firebaseConfig` 객체가 표시됩니다
5. 그 값을 **`src/firebase.js` 상단의 `firebaseConfig`에 그대로 붙여넣기**
   - ⚠️ `databaseURL`이 빠져 있으면 Realtime Database 생성 후 직접 추가해야 합니다
     (예: `databaseURL: "https://xxxx-default-rtdb.firebaseio.com"`)

## 이메일/비밀번호 Auth 활성화 방법

1. Firebase 콘솔 좌측 메뉴 → **빌드 → Authentication**
2. **시작하기** 클릭
3. **Sign-in method** 탭 → **이메일/비밀번호** 선택 → **사용 설정** 토글 ON → 저장
4. 게임 첫 화면에서 이메일과 비밀번호(6자 이상)를 입력하고 **회원가입** 버튼으로 계정을 만든 뒤,
   이후에는 **로그인** 버튼으로 접속합니다

## Realtime Database 생성 방법

1. Firebase 콘솔 좌측 메뉴 → **빌드 → Realtime Database**
2. **데이터베이스 만들기** 클릭
3. 위치 선택(가까운 리전 권장, 예: `asia-southeast1`) → **테스트 모드**로 시작
4. 생성된 데이터베이스 URL(`https://...firebaseio.com`)을 `src/firebase.js`의 `databaseURL`에 입력

## 개발용 Database Rules

Realtime Database → **규칙** 탭에 아래를 붙여넣고 게시:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

> ⚠️ 위 규칙은 **개발/친구끼리 테스트용**입니다. 누구나 읽고 쓸 수 있으므로
> 공개 서비스로 운영하려면 반드시 인증 기반 규칙으로 강화하세요.

## 실행

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 실행 (http://localhost:5173)
npm run build    # 프로덕션 빌드 (dist/ 생성)
```

## GitHub Pages 배포 방법

1. GitHub에 새 저장소를 만들고 이 프로젝트를 push 합니다

```bash
git init
git add .
git commit -m "Market Battle"
git branch -M main
git remote add origin https://github.com/<아이디>/<저장소이름>.git
git push -u origin main
```

2. 배포 명령 실행 (빌드 후 `gh-pages` 브랜치로 자동 배포)

```bash
npm run deploy
```

3. GitHub 저장소 → **Settings → Pages** 에서
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)** 선택 → 저장
4. 잠시 후 `https://<아이디>.github.io/<저장소이름>/` 에서 플레이할 수 있습니다

> 빌드 시 `--base=./` 옵션을 사용하므로 저장소 이름이 무엇이든 그대로 동작합니다.

## Firebase 데이터 구조

```
rooms/{roomCode}
  status        # waiting | playing | ended
  hostId        # 방장 uid
  createdAt
  startedAt
  endsAt
  players/{playerId}
    nickname, cash, holdings, totalAsset, joinedAt, connected
  stocks/{stockId}
    name, price, previousPrice, basePrice, open, high, low
    changeRate, volume, value(거래대금), trend, news
  logs          # 플레이어 거래 로그
  botFeed       # 직전 틱의 가상 세력 거래 (매 틱 덮어쓰기)
  latestNews    # 최신 뉴스 이벤트 (매번 덮어쓰기)
  marketTick    # 마지막 시장 틱 시각
```

> 캔들·가격 기록·봇 거래 로그는 **DB에 저장하지 않고 각 클라이언트가 로컬로 누적**하여
> Firebase 사용량을 최소화했습니다 (무료 요금제로 충분).

## 게임 방법

1. 닉네임 입력 → **방 만들기** (방장) 또는 친구의 **방 코드 입력** 후 입장
2. 방장이 **게임 시작** 클릭 (혼자도 테스트 가능, 정식 대전은 2명 이상 권장)
3. 자본 1천만원으로 일반주·인버스·레버리지·신규상장주를 사고팔아 총자산을 최대한 불리기
4. 호가창·캔들차트를 보며 매매, 뉴스 이벤트·IPO·가상 세력 흐름을 활용하면 역전 가능
5. **시간 제한 없이** 진행되며, 방장이 **게임 종료**를 누르면 총자산 기준 순위 발표 🏆

## 알아두면 좋은 점

- 시장 가격 틱은 **방장 브라우저**가 2초마다 계산해서 모두에게 동기화합니다.
  방장이 새로고침해도 재접속하면 자동으로 다시 시작되지만, 방장이 완전히 나가면 가격이 멈춥니다.
- 홈 화면의 **오래된 방 정리** 버튼은 생성 2시간 경과 또는 종료 10분 경과한 방을 삭제합니다.
