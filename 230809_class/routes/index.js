const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// router.get("/", (req, res) => {
//   res.render("index");
// });

//localhost:8000/visitor/해당라우터

// 방명록 전체 조회
router.get("/", controller.getVisitors);
//  (req, res) => {
//   console.log(conn);
//   const query = "SELECT * FROM visitor;";
//   conn.query(query, (err, rows) => {
//     console.log("visitor: ", rows);
//     res.render("visitor", { data: rows });
//   });
// };

// 방명록 하나 조회
router.get("/get", controller.getVisitor);
// (req, res) => {
//   console.log("방명록 하나 조회");
//   const query = `SELECT * FROM visitor WHERE id=${req.query.id};`;
//   conn.query(query, (err, rows) => {
//     console.log(rows);
//     res.send(rows[0]);
//     res.render("visitor", { data: rows });
//   });
// };

// 방명록 하나 추가
router.post("/write", controller.postVisitor);
//  (req, res) => {
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
// };

// 방명록 하나 수정
router.patch("/edit", controller.patchVisitor);
// (req, res) => {
//   console.log("방명록 하나 수정");
//   const query = `UPDATE visitor SET name='${req.body.name}', comment='${req.body.comment}' WHERE id=${req.body.id};`;
//   conn.query(query, (err, rows) => {
//     console.log(rows);
//     res.send({ result: true });
//   });
// };

// 방명록 하나 삭제
router.delete("/delete", controller.deleteVisitor);
// (req, res) => {
//   console.log("방명록 하나 삭제");
//   const query = `DELETE FROM visitor WHERE id=${req.body.id};`;
//   conn.query(query, (err, rows) => {
//     res.send({ result: true });
//   });
// };

module.exports = router;
