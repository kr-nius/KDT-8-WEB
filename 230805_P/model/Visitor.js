// mysql 연결 전
// exports.getVisitors = () => {
//   return [
//     {
//       id: 1,
//       name: "홍길동",
//       comment: "내가 왔다.",
//     },
//     {
//       id: 2,
//       name: "이찬혁",
//       comment: "히-빱은 안 멋져",
//     },
//   ];
// };

// mysql 연결 과정
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

// mysql 연결 후
// 방명록 보기
exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("visitor: ", rows);
    callback(rows);
  });
};

// 방명록 등록
// exports.postVisitors = (callback) => {
//   const sqlIn = "INSERT INTO visitor (name, comment) values ('', '');";
// }
