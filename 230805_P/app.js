const express = require("express");
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

//body-parser (CRUD할 때 필수!!)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mysql 연결
const conn = mysql.createConection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

// router 분리
const indexRouter = require("./routes");
app.use("/", indexRouter);

// router 분리 전
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/visitor", (req, res) => {
  res.render("visitor");
});
// 방명록 하나 조회
app.get("/visitor/get", (req, res) => {
  console.log("방명록 하나 조회");
});
// 방명록 하나 추가
app.post("/visitor/write", (req, res) => {
  console.log("방명록 하나 추가");
  const query = `INSERT INTO visitor (name, comment) VALUES ('${req.body.name}','${req.body.comment}')`;
  conn.query(query, (err, rows) => {
    console.log("write: ", rows);
  });
});
// 방명록 하나 수정
app.path("/visitor/edit", (req, res) => {
  console.log("방명록 하나 수정");
});
app.delete("/visitor/delete", (req, res) => {
  console.log("방명록 하나 삭제");
});

// 404에러 (app.get으로 하면 get 방식만 오류 처리 됨 / 전체 오류 처리 하기 위해 app.use 사용)
app.use("*", (req, res) => {
  res.render("404");
});

// 포터 열기
app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
