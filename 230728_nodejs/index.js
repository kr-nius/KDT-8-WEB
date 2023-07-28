//원래 기본 문법은 이것
const express = require("express");

// package.json 파일 안에 "type" = 'module' 작성 후 사용
// import { render } from "ejs";
// import express from "express";

const app = express();
const PORT = 8000;

// 뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적인 파일 불러올 때 사용
// app.use("public", express.static("./public"));

app.get("/", (req, res) => {
  //get 방식으로 열었다는 뜻
  // res.send("Hello express"); // 문자열을 보낼 수 있고
  //   res.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하였습니다.",
  //     data: { name: "martin" },
  //   }); // 객체를 보낼 수 있음 (객체 안에 객체 작성 가능)
  //render(): 뷰 엔진 렌더링
  res.render("test", { data: "martin" });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`); // 작은따옴표(') 아니라 백킷(`): 물결표시 아래 헷갈림 주의
});

// console.log(express);
