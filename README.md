# 3rdweek-energybalance-task

## [Go Demo🚀](https://energybalancee.herokuapp.com/)

## Member

<table>
<tr>
<td align="center"><a href="https://github.com/zerochae"><img src="https://avatars.githubusercontent.com/u/84373490?v=4" width="90%" /></a></td>
<td align="center"><a href="https://github.com/WongueShin"><img src="https://media.vlpt.us/images/yeonbee/post/a3b02f02-0826-4cc9-b63e-9ddce5fbd857/wongyu.jpg" width="100%" /></a></td>
<td align="center"><a href="https://github.com/yunred"><img src="https://avatars.githubusercontent.com/u/84527643?v=4" width="90%" /></a></td>
<td align="center"><a href="https://github.com/jyb1798"><img src="https://avatars.githubusercontent.com/u/64634495?s=400&u=3da5cb5a3ff4338da83a58a23df0608da5092ddc&v=4" width="100%" /></a></td>
</tr>
<tr>
<td align="center"><b>권영채(팀장)</b></td>
<td align="center"><b>신원규</b></td>
<td align="center"><b>김서윤</b></td>
<td align="center"><b>지연비</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

<br />

## 역할 분담

<table>
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>권영채</td>
<td> 프로젝트 매니지먼트 /  </td>
</tr>
<tr>
<td>신원규</td>
<td> 자동완성 / </td>
</tr>
<tr>
<td>김서윤</td>
<td> 프로젝트 초기세팅 /  </td>
</tr>
<tr>
<td>지연비</td>
<td> Nav바 / Data 가공 및 Json-Server 세팅 </td>
</tr>

</table>

<br/>

## 구현 기능

### ✅카테고리

### ✅정렬

### ✅자동완성

### ✅검색어 추천

### ✅초성 검색






<br/>

## 프로젝트 실행 방법

```
$ git clone https://github.com/PreOnboardingTeam-16/3rdweek-energybalance-task.git
$ npm install
$ npm run dev
```

<br/>

## 이슈정리

### 아토믹 디자인 적용
   
                                                                                                                           
![Untitled](https://user-images.githubusercontent.com/84527643/154786601-802f4535-fbf1-4613-b430-4bc3d160a982.png)
리액트는 컴포넌트 기반 라이브러리로, 컴포넌트의 재사용이 중요합니다. 우리팀은 중복되는 컴포넌트의 재사용성을 높이고자 아토믹 디자인 패턴 방식으로 프로젝트를 설계했습니다. 먼저 페이지를 나눌 수 없을때 까지 쪼개서 가장 작은 컴포넌트 단위를 원자로 설정했습니다. 그 후 각 단계별 재사용성 여부를 따지고, 조합하여 상위컴포넌트를 만드는 형식으로 진행했습니다.

이번 프로젝트에서는 재사용되는 컴포넌트가 많지 않았고, 설계과정에서 Molecules와 Organisms의 분류 기준이 명확하지않아서 팀원들과 이 부분들에 대한 논의가 이루어져야했습니다. 이러한 논의가 필요함에도 불구하고 컴포넌트를 쪼개고 팀원들 각자 원자단계부터 개발을 진행하면 불필요한 중복을 줄일 수 있기 때문에 아토믹 디자인을 도입했습니다. 직접 사용해보니 아토믹 디자인 패턴은 역할의 분리가 잘 되어있어 레이아웃을 짜는데 있어 효율적이었고, 조금 더 큰 프로젝트에서 확장 가능성을 고려한다면 적합한 디자인 방법론이라고 생각합니다.
<br/>

### 기획부터 배포까지

<br/>

### 자동완성

<br/>

### 추천 검색어

<br/>

### [⚡구현 중 기술적 이슈들](https://www.notion.so/e0ef02510dad43bc914061e47bf74448)

<br/>

## 디렉토리 구조

```
│─MockServer
├─public
└─src
   ├─Components
   │  ├─Pages
   │  │  └─Main
   │  ├─Templates
   │  ├─Nav
   │  ├─SearchBar
   │  └─SearchResult
   ├─Const
   ├─Style
   ├─Types
   └─UI
     ├─Atoms
     ├─Molecules
     └─Organisms

```

## E2E Test(Cypress)

![Animation](https://images.velog.io/images/yeonbee/post/90610a0c-5147-4030-8544-a9da4af5b92d/cypresstestgif.gif)

`cypress`를 통해 주요 로직을 테스트하였습니다.


## 프로젝트 후기

🎈권영채 :

🎹신원규 :

🎇김서윤 :

💖지연비 :
