const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// cookie-parser
app.use(cookieParser());

const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000,
};

app.get("/", (req, res) => {
  res.render("cookieModal", { popup: req.cookies.modal });
});

app.post("/setCookie", (req, res) => {
  // 쿠키 생성
  res.cookie("modal", "hide", cookieConfig); // 쿠키 이름, 쿠키 값, 쿠키 콘픽
  res.send({ result: true, msg: "쿠키 생성 완료" });
});

app.listen(PORT, () => {
  console.log("서버 오픈");
});
