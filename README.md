# 3rdweek-energybalance-task

## [Go Demo🚀](https://)

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
<td> 프로젝트 초기세팅 / </td>
</tr>
<tr>
<td>지연비</td>
<td> Nav바 / Data 가공 및 Json-Server 세팅 </td>
</tr>

</table>

<br/>

## 구현 요구사항

### ✅레이아웃

### ✅기능

<br/>

## 프로젝트 실행 방법

```
$ git clone https://github.com/PreOnboardingTeam-16/3rdweek-energybalance-task.git
$ npm install
$ npm start
```

<br/>

## 이슈정리

### 아토믹 디자인 적용

<br/>

### 기획부터 배포까지

<br/>

### 자동완성

<br/>

### 추천 검색어

<br/>

### ⚡구현 중 기술적 이슈들

기술 구현을 위해 2가지의 라이브러리를 사용했습니다.

1. [string-similarity](https://www.npmjs.com/package/string-similarity)
   문자열의 유사성을 계산할 수 있는 라이브러리입니다. 검색어와 데이터와 100% 일치하지 않아도 유사성 기준으로 Select 하기 위해 채택하였습니다.

해당 기술을 위해 위의 라이브러리와 [levenshtein method](https://lovit.github.io/nlp/2018/08/28/levenshtein_hangle/) 중에서 고민을 했으나, 테스트 결과 Sorensen–Dice coefficient 기반인 `stringSimilarity`가 더 나은 결과를 보였습니다.

```js
const input = '마그네슘',

// levenshtein method
const result = [
  {0, name: '마그네슘정', similarity: 2},
  {1, name: '키즈칼슘', similarity: 3},
  {2, name: '코어업', similarity: 4},
  {3, name: '코준', similarity: 4},
  {4, name: '코케어', similarity: 4},
  {5, name: '코큐넥신', similarity: 4},
]

// Sorensen–Dice coefficient(stringSimilarity)
const result = [
 {0, name: '마그네슘정', similarity: 0.5714285714285714},
 {1, name: '트리플 마그네슘', similarity: 0.4444444444444444},
 {2, name: '키즈칼슘마그네슘디', similarity: 0.36363636363636365},
 {3, name: '탑칼슘마그네슘골드', similarity: 0.36363636363636365},
 {4, name: '트리엔 칼슘마그네슘', similarity: 0.36363636363636365},
 {5, name: '키즈비타칼슘마그네슘', similarity: 0.3333333333333333},
]
```

2. [Hangul.js](https://github.com/e-/Hangul.js)
3. 
한글로 이루어진 문장의 자음과 모음을 분리할수 있는 라이브러리입니다. 초성검색에 이용하기 위해 채택하였습니다.

```js
// disassemble method는 문자열을 분해하여 배열:string[]로 return합니다.
Hangul.disassemble("가나다"); // ['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']
// disassemble method의 2번째 인자는 `grouped` 옵션입니다. `true`일때는 2차원 배열로 변환됩니다.
Hangul.disassemble("에너지", true); // [['ㅇ', 'ㅔ'], ['ㄴ', 'ㅓ'], ['ㅈ', 'ㅣ',]]
// isConsonantAll method는 문자열이 자음만으로 이루어져 있는지를 return합니다.
Hangul.isConsonantAll("ㅇㄴㅈ"); // true
```

```js
const input = "ㅎㅅ"; // 검색할 문자 'ㅎㅅ'

data.filter((el) => { // 전체 데이터에서 `ㅁㄱ`초성을 가진 상품을 필터링하여 return합니다
  const strArr: string[] = []; // 반복문 안에서 초성들을 결합할 배열변수입니다.
  // el = '홍삼'
  Hangul.disassemble(el.productName, true).map((itemArr) => { // [ ['ㅎ','ㅗ','ㅇ'],['ㅅ','ㅏ','ㅁ'] ]
  //분해결과 2차원배열이 생성되고 
    itemArr.map((item, index) => {
      index === 0 && strArr.push(item); // 각 배열의 0번 인덱스['ㅎ'],['ㅅ']를 strArr에 저장합니다.
    });
  });
  // 제품명에 영어가 포함될 시 대/소문자가 같이 검색되기 위해 toLowerCase()를 사용하였습니다.
  return strArr.join("").trim().toLowerCase().indexOf(searchInput) !== -1;
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
   │  └─Templates
   ├─Style
   ├─Types
   └─UI
     ├─Atoms
     ├─Molecules
     └─Organisms

```

## 프로젝트 후기

🎈권영채 :

🎹신원규 :

🎇김서윤 :

💖지연비 :
