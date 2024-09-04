# ResponsiveUserListApp

이 프로젝트는 API로부터 사용자 데이터를 가져와서 반응형 사용자 목록을 제공하는 애플리케이션입니다. 페이징, 정렬, 검색, 상세 사용자 모달 등의 기능을 포함하고 있으며, 다양한 화면 크기에 대응하는 사용자 친화적인 UI를 제공합니다.

---

## 주요 기능

- **사용자 목록 조회**: API에서 사용자 데이터를 가져와 화면에 표시합니다.
- **검색 기능**: 사용자 이름으로 검색할 수 있습니다.
- **정렬 기능**: 오름차순 및 내림차순으로 사용자 목록을 정렬합니다.
- **페이징 기능**: 페이지별로 사용자 목록을 나누어 표시합니다.
- **상세 정보 모달**: 사용자의 상세 정보를 모달로 확인할 수 있습니다.
- **반응형 디자인**: 다양한 기기에서 최적화된 UI를 제공합니다.

---

## 사전 준비 사항

- **Node.js** (버전 12 이상)

---

## 프로젝트 설정 및 실행 방법

1. **저장소 클론**: 
   - `git clone https://github.com/KangMoonJeong/ResponsiveUserListApp.git`
   - `cd ResponsiveUserListApp`

2. **의존성 설치**:
   - **프론트엔드 설치**:
     - `cd frontend`
     - `npm install`
   - **백엔드 설치**:
     - `cd ../backend`
     - `npm install`

3. **환경 변수 설정**:

   1) **백엔드 설정**:
      - `backend` 디렉토리에 `.env` 파일을 생성하고 다음과 같이 설정합니다:
        - `PORT=9090`
        - `CORS_ORIGIN=http://localhost:8080`
   
   2) **프론트엔드 설정**:
      - `frontend` 디렉토리에 `.env` 파일을 생성하고 다음과 같이 설정합니다:
        - `VUE_APP_SERVER_URL=http://localhost:9090`

4. **실행**:

   1) **백엔드 서버 실행**:
      - `cd backend`
      - `npm start`
   
   2) **프론트엔드 서버 실행**:
      - `cd frontend`
      - `npm run serve`

애플리케이션에 접근하려면, 백엔드와 프론트엔드 서버가 실행된 후 브라우저에서 `http://localhost:8080`으로 이동합니다.

---

## API 개요

- **GET** `/api/users`: 전체 사용자 목록을 가져옵니다.
- **GET** `/api/users/random`: 랜덤으로 선택된 사용자 목록을 가져옵니다.

---

## 폴더 구조


오류 처리
API 요청이 실패할 경우, 사용자에게 친화적인 메시지를 표시합니다.



### 프론트엔드 (frontend)

- `components/` - Vue 컴포넌트 파일들이 위치
- `assets/` - 이미지 같은 정적 자원들이 위치
- `mixins/` - 재사용 가능한 Vue Mixin (예: apiMixin.js)

### 백엔드 (backend)

- `controllers/` - API 엔드포인트의 비즈니스 로직 구현
- `models/` - 데이터 모델 및 데이터베이스 연동
- `routes/` - API 라우트 정의
- `data/` - 가짜 사용자 데이터가 저장된 파일

---

## 백엔드 이미지 관리

백엔드에서 사용하는 사용자 이미지 파일은 `backend/public/images` 폴더에 저장됩니다. 해당 폴더에 이미지를 저장하고, 사용자 데이터에서는 `/images/파일명.jpg`로 이미지 경로를 참조합니다.

---

## 오류 처리

API 요청이 실패할 경우, 사용자에게 친화적인 메시지를 표시합니다. 이는 frontend의 ErrorPage.vue가 담당합니다
