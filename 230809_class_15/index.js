const express = require("express");
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//body-parser (CRUD할 때 필수!!)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mysql 연결 => model 폴더 Mvisitor.js로 이동
// const mysql = require("mysql");
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "user",
//   password: "1234",
//   database: "kdt8",
// });

// router 분리 전
// app.get("/", (req, res) => {
//   res.render("index");
// });

// 방명록 전체 조회
// app.get("/visitor", (req, res) => {
//   console.log(conn);
//   const query = "SELECT * FROM visitor;";
//   conn.query(query, (err, rows) => {
//     console.log("visitor: ", rows);
//     res.render("visitor", { data: rows });
//   });
// });

// 방명록 하나 조회
// app.get("/visitor/get", (req, res) => {
//   console.log("방명록 하나 조회");
//   const query = `SELECT * FROM visitor WHERE id=${req.query.id};`;
//   conn.query(query, (err, rows) => {
//     console.log(rows);
//     res.send(rows[0]);
//     res.render("visitor", { data: rows });
//   });
// });

// 방명록 하나 추가
// app.post("/visitor/write", (req, res) => {
//   console.log("방명록 하나 추가");
//   const query = `INSERT INTO visitor (name, comment) VALUES ('${req.body.name}','${req.body.comment}');`;
//   conn.query(query, (err, rows) => {
//     console.log("write: ", rows);
//     res.send({
//       result: true,
//       id: rows.insertId,
//       name: req.body.name,
//       comment: req.body.comment,
//     });
//   });
// });

// 방명록 하나 수정
// app.path("/visitor/edit", (req, res) => {
//   console.log("방명록 하나 수정");
//   const query = `UPDATE visitor SET name='${req.body.name}', comment='${req.body.comment}' WHERE id=${req.body.id};`;
//   conn.query(query, (err, rows) => {
//     console.log(rows);
//     res.send({ result: true });
//   });
// });

// 방명록 하나 삭제
// app.delete("/visitor/delete", (req, res) => {
//   console.log("방명록 하나 삭제");
//   const query = `DELETE FROM visitor WHERE id=${req.body.id};`;
//   conn.query(query, (err, rows) => {
//     res.send({ result: true });
//   });
// });

// router 분리
app.get("/", (req, res) => {
  res.render("index");
});
const router = require("./routes"); //index.js는 기본이라 생략가능
app.use("/visitor", router);

// 404에러 (app.get으로 하면 get 방식만 오류 처리 됨 / 전체 오류 처리 하기 위해 app.use 사용)
app.use("*", (req, res) => {
  res.render("404");
});

// 포터 열기
// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

// force의 역할: 테이블 생성 false는 없으면, true는 항상 (기존에 있던 것 삭제 후 새로 생성)
