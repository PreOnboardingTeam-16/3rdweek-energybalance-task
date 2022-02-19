# 3rdweek-energybalance-task

### [Go Demo🚀](https://energybalancee.herokuapp.com/)
### [Figma🍎](https://www.figma.com/file/6TcoVKgjmlWfYzTfCwEMLl/%EC%97%90%EB%84%88%EC%A7%80-%EB%B0%B8%EB%9F%B0%EC%8A%A4-%EA%B8%B0%EC%97%85-%EA%B3%BC%EC%A0%9C-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%98%88%EC%8B%9C?node-id=0%3A1)

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
<td> 프로젝트 매니지먼트 / 피그마 제작 / 카테고리,정렬,검색어에 따른 데이터 필터링 </td>
</tr>
<tr>
<td>신원규</td>
<td> 검색어 자동완성 구현 / dev 버전 Json-Server, React server 설정 / 문자열 유사도 기반 검색어 추천기능 구현 </td>
</tr>
<tr>
<td>김서윤</td>
<td> 프로젝트 초기세팅 / 검색결과 컴포넌트 구현 </td>
</tr>
<tr>
<td>지연비</td>
<td> Nav바 / Data 가공 및 Json-Server 세팅 / E2E test </td>
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
<br/>
  
### 기획부터 배포까지
과제의 영양제 리스트에는 제품명과 브랜드 칼럼이 있었습니다. 우리팀은 소비자가 보다 쉽게 원하는 데이터를 찾을 수 있도록 성분, 가격, 검색 횟수 등을 임의로 추가하여 데이터를 재가공하였습니다.

- **카테고리** 버튼 구성은 모든 데이터의 성분
- **분류기준**(인기순/ 높은가격 / 낮은가격)은 검색량과 가격 기준

json-server을 사용하여 Mock Rest API 서버를 만들었고, 가공한 Mock Data를 불러와서 사용했습니다.

```jsx
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "craco eject",
  "dev": "concurrently \"craco start\" \"npx json-server MockServer/db.json --port 4000\" "
},
```

Rest API가 같은 폴더 안에 존재하고, jsonData와 craco start가 동시에 실행되어야하기 때문에 여러 명령어를 하나의 커맨드로 동시에 실행하는 `concurrently` 모듈을 설치했습니다.
<br/>
<br/>

### 자동완성
  Input tag의 value를 subString으로 가지는 Product.name을 순회하여 찾아, 검색량 기준으로 정렬해 상위 5개의 결과를 검색창이 Focused일때 검색창 밑에 render 시켜줍니다.<br/>
  한번 코드가 실행될때 500개가 넘는 길이의 리스트를 순회해야하므로 너무 많은 리렌더 방지를 위해 Throttling를 구현하였습니다.<br/>
  동시에, OnChange 이벤트는 실시간으로 렌더되어 UX의 저하는 방지하였습니다.
<br/>

### ✨[추천 검색어](https://www.notion.so/EnergyBalance-83203fb9ab6d43da87ab2292117929f6)

<br/>

### ⚡구현 중 기술적 이슈들

기술 구현을 위해 2가지의 라이브러리를 사용했습니다.

1. [string-similarity](https://www.npmjs.com/package/string-similarity)
  
문자열의 유사성을 계산할 수 있는 라이브러리입니다.

2. [Hangul.js](https://github.com/e-/Hangul.js)

한글로 이루어진 문장의 자음과 모음을 분리할수 있는 라이브러리입니다. 초성검색에 사용되었습니다.

```js
// disassemble method는 문자열을 분해하여 배열:string[]로 return합니다.
Hangul.disassemble("가나다"); // ['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']
// disassemble method의 2번째 인자는 `grouped` 옵션입니다. `true`일때는 2차원 배열로 변환됩니다.
Hangul.disassemble("에너지", true); // [['ㅇ', 'ㅔ'], ['ㄴ', 'ㅓ'], ['ㅈ', 'ㅣ']]
// isConsonantAll method는 문자열이 자음만으로 이루어져 있는지를 return합니다.
Hangul.isConsonantAll("ㅇㄴㅈ"); // true
```
  
아래는 초성검색에 사용한 로직입니다.

```js
const input = "ㅎㅅ"; // 검색할 문자 'ㅎㅅ'
  
if(Hangul.isConsonantAll(input)) // input이 초성으로 이루어져 있으면

data.filter((el) => { // 전체 데이터에서 `ㅎㅅ`초성을 가진 상품을 필터링하여 return합니다
  const strArr: string[] = []; // 반복문 안에서 초성들을 결합할 배열변수입니다.
  // el = '홍삼'
  Hangul.disassemble(el.productName, true).map((itemArr) => { // [ ['ㅎ','ㅗ','ㅇ'],['ㅅ','ㅏ','ㅁ'] ]
  //분해결과 2차원배열이 생성되고 
    itemArr.map((item, index) => {
      index === 0 && strArr.push(item); // 각 배열의 0번 인덱스['ㅎ'],['ㅅ']를 strArr에 저장합니다.
    });
  });

  return strArr.join("").trim().indexOf(searchInput) !== -1; // '홍삼'을 return 합니다.
});
```

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

![Animation](https://media.vlpt.us/images/yeonbee/post/5d88bc9f-e821-4c88-9ad7-85c59853e9d9/cypresstestgif%20(1).gif)

`cypress`를 통해 주요 로직을 테스트하였습니다.


## 프로젝트 후기

🎈권영채 :

🎹신원규 : Throttling 코드를 구현하는 방법이 흥미로웠습니다. 프론트 업무에서는 잘 다루지 않는 서치로직을 구현하는 경험도요. 

🎇김서윤 :

💖지연비 :
