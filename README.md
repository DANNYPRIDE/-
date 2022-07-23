# **미식시간 - 다이닝 예약 웹서비스**

## 📌 **Stack**

React, TypeScript, Style-Components
Express.js, Typescript, Redis, AWS S3, GCP mysql

<br>

## 🎨 **UI/UX**

- [UI](<https://www.figma.com/file/nYOFEN9P3gkQjose5IsAOb/%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B7%B0(page-view)?node-id=0%3A1>)
- [UX-와이어프레임](https://www.figma.com/file/hRU3MEFfLbzvmrZPO9ydnK/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1)
- [UX-기능정의서 & IA](https://docs.google.com/spreadsheets/d/1If_DiGqzzMLq2RoYxdmxknQlypDzHpWkzbWGPazsW0c/edit?usp=sharing)

<br>

## 🚙 **Initial Setting**

client, server 환경이 각자 구분되어 있어서 해당 작업 폴더로 들어가서 서버를 구동해야 한다.

```
cd ./client or cd ./server
npm i
npx prettier --write ".prettierrc.json" // prettier 설정
npm run start
```

<br>

## 👩‍👩‍👧👨‍👨‍👦 **GIT**

### **Branch Naming**

```
feature-front-(router경로 && 파일형식)-nn(본인이니셜)
feature-back-(router경로 && 파일형식)-nn(본인이니셜)
```

### **Commit Convetion**

```
먼저 커밋 메시지는 크게 제목, 본문, 꼬리말 세 가지 파트로 나누고, 각 파트는 빈줄을 두어서 구분합니다.
Subject(태그): Body(커밋내용) Footer(issue tracker ID) => Footer는 생략 가능

Feat: 새로운 기능을 추가할 경우
Fix: 버그를 고친 경우
Design: CSS 등 사용자 UI 디자인 변경
!BREAKING CHANGE: 커다란 API 변경의 경우
!HOTFIX: 급하게 치명적인 버그를 고쳐야하는 경우
Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
Refactor: 프로덕션 코드 리팩토링
Comment: 필요한 주석 추가 및 변경
Docs: 문서를 수정한 경우
Test: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
Chore: 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove: 파일을 삭제하는 작업만 수행한 경우
```

[Commit Convention 출처 내용](https://overcome-the-limits.tistory.com/entry/협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기)

<br>

## 🖥 **Client**

### **Client Architecture**

```
reservation_web
├─ client
│  ├─ public
│  │  ├─ images
│  │  │  ├─ favicon
│  │  ├─ index.html
│  │  └─ robots.txt
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ api
│  │  ├─ assets
│  │  │  └─ svg
│  │  ├─ components
│  │  │  ├─ atoms
│  │  │  ├─ molecules
│  │  │  └─ oranisms
│  │  ├─ constants
│  │  ├─ functions
│  │  ├─ index.tsx
│  │  ├─ pages
│  │  ├─ router
│  │  └─ styles

```

- client/public => static 파일 폴더
- clent/src/api => api 파일 폴더
- clent/src/assets => svg 파일 폴더
- client/src/componets => components 파일 폴더 : atomic design pattern
  - client/src/componets/atoms => 인터페이스를 구성하는 기본 HTML 태그 구성
  - client/src/componets/molecules => atmos를 기반으로 결합하여 하나의 분자(inputSearch, menuItem) 생성
  - client/src/componets/oranisms => molecules를 기반으로 하나의 유기체(header, footer) 생성
- client/constants => 상수 파일 폴더
- client/functions => 함수 파일 폴더
- client/src/pages => router에 연결되는 page 파일 폴더
- client/src/router => router 파일 폴더
- client/src/style => 전역적으로 사용될 style 파일 폴더

[Atomic Design Pattern 관련 내용 바로가기 - 개념](https://brunch.co.kr/@ultra0034/63)<br>
[Atomic Design Pattern 관련 내용 바로가기 - 활용](https://yeoulcoding.me/m/220)
<br><br>

### **Client Folder & File Naming**

- client/src 바로 최하단에 있는 폴더 구조 및 이름은 수정하지 않는다.
- ui 구성을 이루는 components, pages 하위 폴더 및 네이밍은 => PascalCase
- 그외 나머지 파일 하위 폴더 및 네이밍은 => camelCase
  <br><br>

## 🗄 Server

### **Title**

내용적기
