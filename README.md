# Task Today

## 프로젝트 소개
React.js 기반의 할 일을 기록하는 프로젝트입니다.<br>
오늘 할 일을 기록하고 완료 여부를 조회할 수 있습니다. 
> 개발기간: 2023.4.20 ~ 2023.4.25 <br> 리팩토링: 2023.6 ~

## 배포
https://splendorous-jalebi-a58714.netlify.app/

## 프로젝트 실행 방법
```
git clone https://github.com/hheeseung/task-today.git
cd task-today
yarn install
yarn start
```

## 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white">

## 화면 구성
|초기 화면|오늘의 할 일 전체 항목|
|:----------:|:-----------:|
|![01 initial](https://github.com/hheeseung/task-today/assets/87454393/586919c7-a1ff-410f-bcb8-0220afe9459f)|![02 alltask](https://github.com/hheeseung/task-today/assets/87454393/25f07fc4-7e6c-4f25-b18b-0219d8c74351)|
|**진행 중인 항목**|**완료된 항목**|
|![03 inprogress](https://github.com/hheeseung/task-today/assets/87454393/c0fb5e77-3018-4de4-bf34-7bd2c4ebd22b)|![04 complete](https://github.com/hheeseung/task-today/assets/87454393/b2a37885-7b6a-49a4-8527-f611eeaaec1f)|
|**할 일 입력 모달창**|
|![05 input](https://github.com/hheeseung/task-today/assets/87454393/380c3ead-e6ba-4abb-92f2-b28ba2e20220)|

## 주요 기능
- 할일 추가, 삭제
- 할일 완료 여부에 따른 카테고리 기능
- 같은 브라우저에서 재접속 시 데이터 유지 (로컬스토리지 활용)

## 리팩토링
- 디자인을 전면 수정하였습니다.
- JavaScript → TypeScript로 마이그레이션 진행하였습니다.

## 회고
https://hheeseung.notion.site/1-To-Do-App-9b05e187cab340fc85623a7422696e9f
