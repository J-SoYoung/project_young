개발 설계 문서는 어떤 서비스를 만들고, 
왜 만들었으며, 어떻게 구현했는지를 정리한 문서다. 
프로젝트의 구조와 흐름 그리고 선택한 이유 등을 글로 정리한 문서다. 

# 프로젝트 개요
- 제목 : DEV.SoYOung Blog
- 한 줄 소개 : 신입 프론트엔드 개발자의 기술 블로그
- 주요 기능 : 글 작성/수정/삭제 기능, darkmode, 반응형UI
- 개발 목적 : 포트폴리오와 기록용 기술 블로그를 구현하고 싶었기 때문입니다

# 기술 스택
- Frontend : React, Vite, TypeScript, module.css
- Database : Firebase Firestore
- Auth : Firebase Authentication
- 배포 : Vercel
- 기타 : React router DOM

# 프로젝트 구조 
📦src
 ┣ 📂assets     
 ┣ 📂pages
 ┣ 📂routers
 ┣ 📂shared       // 각 컴포넌트에서 공통으로 사용하는 파일 모음
    ┣ 📂apis.
    ┣ 📂components 
    ┣ 📂hooks
    ┣ 📂Layout
    ┣ 📂service   // firebase 관련 로직 (firestore, auth)
    ┣ 📂types
    ┣ 📂utils
 ┣ 📂index.css
 ┣ 📜main.tsx

# 배포 링크 

# Github

-------------
# 기능 명세
### 글 작성
### 글 수정

# 화면 구성 

# 데이터 흐름

# 개발 중 고민 & 해결

# 추후 개선 계획


