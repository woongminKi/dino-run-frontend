# 🦖 Dino Run

디노런은 인터넷 연결이 안 됐을 때 크롬에서 할 수 있는 구글 공룡 게임을 온라인화 해 친구들과 함께 즐길 수 있는 게임입니다.

키보드 조작도 가능하지만, 안면 인식으로 감정에 따라 공룡 캐릭터를 조작할 수도 있습니다.

## 📈Preview

https://user-images.githubusercontent.com/96522144/158065592-c8e80a69-4aaf-4ada-82d4-909f59805ad0.mov

배포 사이트 : https://www.dinorun.site/

## 🚀 ShortCut

- 💡 Motivation
- ✅ Features
- 📅 Schedule
- 🖥 Tech Stack
- 🕹 Getting Started
- 🤔 Why we used it
- 🔥 Challenge

## 💡 Motivation

쿠키런을 재밌게 했으며 이와 유사하지만 인터넷 연결이 안 될 때만 할 수 있는 구글 공룡 게임을 온라인으로 친구들과 함께 플레이하면 어떨까 하는 생각에 프로젝트를 기획했습니다.

유투브에서 눈썹으로 게임을 하는 것을 보고선 영감을 받아 모니터를 보며 키보드로 조작을 하는 게임은 많지만 내 얼굴을 보며 감정에 따라 캐릭터가 움직인다면 게임 몰입도를 향상시켜 재미를 더할 수 있지 않을까? 하는 생각에 안면인식 기능을 추가했습니다.

## ✅ Features

|                                          |                                          |
| ---------------------------------------- | ---------------------------------------- | 
|<p align="center"><img width="3000" src="https://user-images.githubusercontent.com/96522144/160890784-a65f525b-e5a1-44a6-b074-928ec26292e2.png"/></p><p align="center">👉 소셜 로그인(Google)로 로그인을 할 수 있습니다.</p>|<p align="center"><img width="3000" src="https://user-images.githubusercontent.com/96522144/159103191-218f8f2a-d9fb-4770-afb1-83982236c771.gif" /></p><div align="center">👉 플레어이어는 방을 생성해 상대 플레이어와 실시간 대전을 할 수 있습니다.</div>
|<p align="center"><img width="3000" src="https://user-images.githubusercontent.com/96522144/159103217-d20b567a-5224-4593-aaae-92156e8d8ed6.gif" /></p><p align="center" fontsize="3">👉 방장은 게임을 시작, 방 삭제를 할 수 있으며 게임 시작을 누르면 게임이 시작됩니다.</p><p align="center" fontsize="3">👉 방 삭제를 누르면 상대 플레이어에게 방이 삭제됐다는 알림이 뜹니다.</p><p align="center" fontsize="3">👉 방 나가기를 누르면 누른 플레이어는 로비로 나가게 되고, 상대방 화면에서는 사라지게 됩니다.</p>  | <p align="center"><img width="3000" src="https://user-images.githubusercontent.com/96522144/159103322-c4b844d1-4786-4b17-88ab-33caa21112d6.gif" /></p><p align="center">👉 게임이 시작하면 카메라가 켜지며 안면 인식을 시작함과 동시에 웃는 얼굴(Happy)일 때 캐릭터가 점프를 합니다. 스페이스바로도 조작 할 수 있습니다.</p><p align="center">👉 실시간으로 상대방의 점수가 화면에 나타나며 그에 따른 승 패 여부도 실시간으로 확인 할 수 있습니다.</p><p align="center">👉 장애물에 부딪히면 게임이 종료되며 방을 나갈 수 있습니다.</p> |

## 📅 Schedule

2022.02.21 ~ 2022.03.13(21일)
총 3주 동안 프로젝트를 진행했습니다.

### 1주차 - 기획 및 설계

- 아이디어 검토
- DB Schema 설계
- Mock up Design
- 기술 스택 조사 및 선정
- API 명세 작성
- Task Card 작성

### 2,3주차 - 개발 및 마무리

- Frontend, Backend Setup
- Frontend
  - 로그인 기능
  - face-api로 안면, 감정 인식에 따른 캐릭터 점프 기능(키보드 조작도 가능)
  - Socket.io 실시간 통신
  - Redux-Saga 도입
- Backend
  - 로그인 정보 GET, POST
  - 방 정보 GET, POST, DELETE
  - Socket 통신
- Test Code 작성
- CSS 작업
- Frontend 배포 (Netlify)
- Backend 배포 (AWS Elastic Beanstalk)
- README 작성

## 🖥 Tech Stack

### Frontend

- Javascript
- React
- Redux
- Redux-saga
- Redux-toolkit
- Redux-presist
- socket.io-client
- face-api
- firebase
- styled-component
- jest
- react-test-library

### Backend

- node.js
- mongoDB
- mongoose
- Express
- socket.io
- mocha, chai, supertest

### Convention

- prettier
- eslint

## 🕹 Getting Started

### Installation

- Local 환경에서 실행하기 위해서 몇 가지 사전 준비가 필요합니다.
- 각 Repository를 Clone 한 후, .env 파일에 환경 변수를 입력해주세요.

- Frontend
```
git clone https://github.com/woongminKi/dino-run-frontend.git
npm install
npm run start
```

```
REACT_APP_SERVER_URL=http://localhost:8000
REACT_APP_API_KEY=YOUR FIREBASE API KEY
REACT_APP_AUTH_DOMAIN=YOUR FIREBASE AUTH DOMAIN
REACT_APP_PROJECT_ID=YOUR FIREBASE PROJECT ID
REACT_APP_STORAGE_BUCKET=YOUR FIREBASE STORAGE BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR FIREBASE MESSAGE SENDER ID
REACT_APP_APP_ID=YOUR FIREBASE APP ID
```

- Backend
```
git clone https://github.com/woongminKi/dino-run-backend.git
npm install
npm run start
```

```
PORT=8000
MONGO_URL=YOUR MONGO URL
DINORUN_CLIENT_URL="http://localhost:3000"
SECRET_KEY=YOUR SECRET KEY
TEST_DB_LOCAL_URL=YOUR DB LOCAL URL
ACCESS_KEY=YOUR ACCESS KEY
SECURE_ACCESS_KEY=YOUR SECURE ACCESS KEY
```

## 🔥 Challenge

### - 실시간 통신 Socket IO

1p, 2p의 상태를 각 플레이어에게 실시간으로 전달해야했기에 프로젝트의 기획 목표대로 온라인화를 시키기 위해 실시간 통신을 하는 Socket IO를 사용했습니다. 그리고 비동기 처리를 제어하기 위해 Redux-saga로 Redux state를 관리하고 있기 때문에 Event Channel을 사용해 관리했습니다.

방에 유저가 입장, 퇴장, 삭제, 게임 시작과 같은 서로의 인터렉션이 있는 상황을 통신 시켜주며 상태 값을 관리해줘야했기 때문에 어떻게 관리해야 하는지에 대한 고민이 많았습니다. 실제로 개발을 하면서 socket을 통해 넘어오는 push된 값들을 어떻게 처리해줘야하는지에 대한 고민으로 꽤 헤매었지만 pusher를 구독해 이벤트를 관리하는 Event Channel을 알고 이해한 이후로는 작업을 순조롭게 진행할 수 있었습니다.

socket을 통해 비동기적으로 들어오는 상태 값을 saga의 generator 함수로 동기적으로 값을 처리하고, socket의 pull, push 성질을 Event channel로 관리하는 작업은 제게 낯설었지만 새로운 도전에 대한 성취감을 느끼게 해준 작업이었습니다.

배우고 익히는 과정에서 고난도 있었지만 러닝 커브가 높은 Saga와 socket을 함께 처리한 작업한 경험을 토대로 새로운 도전을 해낼 수 있다는 용기를 얻은 값진 경험이었습니다.

### - 안면 인식, 감정 분석 face-api

게임 조작을 키보드로 하는 것은 많이 있지만 안면 인식을 해 나의 감정을 분석해 게임 조작을 하면 어떨까? 하는 생각이 들었습니다. 그러던 도중 유투브에서 눈썹으로 위치를 이동하며 점수를 올리는 게임을 보게 되면서 그것에 영감을 받아 디노런에 접목 시키면 게임의 재미를 향상시킬 수 있겠다고 생각했습니다.

안면 인식을 통해 유저의 감정을 인식해 점수로 환산하는 값을 Redux state로 관리를 해주며 일정 점수 이상이 되었을 때 점프가 되는 식으로 구현했습니다. 기쁨, 슬픔, 화남, 두려움, 놀람, 역겨움의 감정을 인지할 수 있으며 이 중에 게임을 하면서 조금이라도 많이 웃으면 좋겠다고 생각해 웃었을 때 캐릭터가 점프를 할 수 있게끔 구현했습니다.

face-api는 라이브러리이기 때문에 구현하는데에는 큰 어려움은 없었지만 감정 점수를 통해 점프 이벤트를 발생시키는 부분이 제겐 챌린지였습니다. 키보드, 마우스 외에 이벤트를 발생시켜 액션을 주는 것은 예제로도 접해보지 못했기 때문입니다. 결국 new Event 함수를 사용해 여러 감정 중 웃었을 때 나오는 Happy 점수를 통해 jump 이벤트를 발생시켜 캐릭터를 점프 시킬 수 있게 구현했습니다.

처음 기획 떄 시도해보고 싶었지만 구현 하면서 여러 이슈로 후순위로 미루어 둔 기능까지 다 구현할 수 있어 하면 할 수 있다 라는 자신감과 성취감을 얻을 수 있었던 순간이었습니다.

링크 : https://github.com/justadudewhohacks/face-api.js/

## 🎉프로젝트를 마치며

개발자로 전향하기로 마음 먹기 전 마케터로 2년동안 있었습니다. 고객들의 불편함을 파악해 더 나은 서비스를 만들고 홍보하는 업을 하면서, 기술로서 불편함을 해결하고 편리한 기능을 만들어 내는 분들을 보며 “언젠가 기술로서 다른 사람들에게 편리함을 제공할 수 있는 사람이 되고 싶다” 라는 생각을 했습니다.

새로운 것을 만들어 편리함을 제공해주는 것도 좋지만 기존의 것에서 기능을 추가, 개선해 더 나은 경험을 제공하는 것도 새로운 편리함을 주는 것이라 생각합니다. 그 첫 시작이 이 프로젝트라고 생각합니다.

심심풀이로 하는 구글 공룡 게임을 온라인화 해 함께 즐길 수 있도록 하고, 내 감정 상태에 따라 동작하게 하면 게임의 재미를 한층 향상시킬 수 있을 것이라 생각했습니다. 그리고 머릿속에 그린 것들을 실제로 ‘실현시켰다!’는 것에 의미가 깊습니다.

앞으로 이러한 경험을 바탕으로 기술로서 좋은 경험, 편리함을 전할 수 있는 개발자가 되고 싶습니다.
