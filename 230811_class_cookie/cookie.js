const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// app.set('views', './views') // views 이름으로 폴더 생성할거면 생략 가능

// cookie-parser
// 일반 쿠키
// app.use(cookieParser());

// 암호화 쿠키
app.use(cookieParser("abcdef")); // abcdef 암호화 값(비밀번호 같은 것)

// cookie 옵션 객체 생성
const cookieConfig = {
  // httpOnly: 웹 서버를 통해서만 쿠키에 접근 가능(자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는 것을 차단)
  // maxAge: 쿠키의 수명 (밀리초 단위)
  // expires: 만료 날짜를 GMT 시간 설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송 / 쿠키가 전송될 URL 특정 가능(기본값: '/')
  // domain: 쿠키가 전송 될 도메인을 특정 가능(기본값: 현재 도메인)
  // secure: 웹 브라우저와 웹 서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정 (req.signedCookies 객체에 들어있음)
  httpOnly: true,
  maxAge: 60 * 1000, // 1분
  signed: true, // 암호화 설정
};

app.get("/", (req, res) => {
  res.render("index");
});

// 쿠키 설정
app.get("/setCookie", (req, res) => {
  // 쿠키 이름, 쿠키 값, 옵션 객체
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send("set cookie"); // 페이지 열기 위해서 만든 것 다른 의미 없음
});

// 쿠키 만료시간 확인
app.get("/getCookie", (req, res) => {
  // res.send(req.cookies); // 일반 쿠키인 경우
  res.send(req.signedCookies); // 암호화 쿠키인 경우
});

// 쿠키 삭제
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "myValue", cookieConfig);
  res.send("clear cookie");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
