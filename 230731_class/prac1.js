// 실습1 GET 전송 받기

const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("prac1");
});
app.get("/resultPage", (req, res) => {
  console.log(req.query);
  res.render("result1", { title: "GET 결과", userInfo: req.query });
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
