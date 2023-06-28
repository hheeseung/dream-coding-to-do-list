# To Do List

## 프로젝트 소개
React.js 기반의 To Do List 프로젝트입니다.<br>
할일을 체크하고 기록할 수 있습니다. 
> 개발기간: 2023.4.20 ~ 2023.4.25 <br> 리팩토링: 2023.6 ~

## 배포
https://splendorous-jalebi-a58714.netlify.app/

## 프로젝트 실행 방법
```
git clone https://github.com/hheeseung/to-do-list.git
cd to-do-list
yarn install
yarn start
```

## 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white">

## 화면 구성
|오늘의 할 일 전체 항목|진행 중인 항목|
|:----------:|:-----------:|
|![all](https://github.com/hheeseung/to-do-list/assets/87454393/4ae3d0cd-5169-4008-9b39-c1bea5c75241)|![in progress](https://github.com/hheeseung/to-do-list/assets/87454393/67dd99b4-bc48-45b6-ac3f-1d87606e53f2)|
|**완료된 항목**|**할 일 입력 모달창**|
|![finished](https://github.com/hheeseung/to-do-list/assets/87454393/0eb1993d-b341-45b9-bff7-383838917532)|![write down](https://github.com/hheeseung/to-do-list/assets/87454393/4293aed2-5ffb-420c-a41a-d7a41152fc71)|

## 주요 기능
- 할일 추가, 삭제
- 할일 완료 여부에 따른 카테고리 기능
- 같은 브라우저에서 재접속 시 데이터 유지 (로컬스토리지 활용)

## 리팩토링
- 디자인을 전면 수정하였습니다.
- JavaScript → TypeScript로 마이그레이션 진행하였습니다.

## 회고
https://hheeseung.notion.site/1-To-Do-App-9b05e187cab340fc85623a7422696e9f
