# 모두의코딩 홈페이지

## 프로젝트 구조
```
moducoding-homepage/
├── front-end/          # React + Vite 프론트엔드
├── back-end/           # NestJS 백엔드
├── infrastructure/     # Docker 설정 파일들
└── package.json        # 프로젝트 실행 스크립트
```

## 실행 방법

### 개발환경 실행
```bash
# 개발환경 실행 (포트: 프론트엔드 8888, 백엔드 8889)
npm run up

# 로그 확인
npm run logs

# 서비스 중지
npm run down

# 재시작
npm run restart
```

### 운영환경 배포
```bash
# 운영환경 빌드 및 배포
npm run deploy
```

## 접속 URL

### 개발환경 (npm run up)
- **프론트엔드**: http://localhost:8000
- **백엔드 API**: http://localhost:8001
- **CMS 관리자**: http://localhost:8002
- **데이터베이스**: localhost:5432

### 운영환경 (npm run deploy) - Nginx Reverse Proxy
- **홈페이지**: http://localhost/
- **CMS 관리자**: http://localhost/admin
- **백엔드 API**: http://localhost/api
- **데이터베이스**: localhost:5432

## 기술 스택
- **Frontend**: React + TypeScript + Vite
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL
- **Infrastructure**: Docker + Docker Compose