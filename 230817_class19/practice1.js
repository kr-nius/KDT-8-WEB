// 230817 JWT 실습
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "s123dkfjsdk3432"; // 값 변경 가능

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "hong1", pw: "1a23", name: "홍길동" }; // 유저 정보

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPW } = userInfo;
    if (id === uId && pw === uPW) {
      // 토큰 생성
      const token = jwt.sign({ id }, SECRET);
      res.json({ result: true, token });
    } else {
      res.json({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/token", (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ");
    try {
      const result = jwt.verify(token[1], SECRET);
      console.log("result: ", result);
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: "인증된 회원이 아닙니다." });
    }
  } else {
    res.redirect("/login");
  }
});

app.listen(PORT, () => {
  console.log("서버 오픈");
});
