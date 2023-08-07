// mysql 연결 파일
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

exports.getVisitors = (callback) => {
  console.log(conn);
  const query = "SELECT * FROM visitor;";
  conn.query(query, (err, rows) => {
    console.log("visitor: ", rows);
    if (err) {
      console.log(err);
    }
    callback(rows);
    // res.render("visitor", { data: rows }); -> controller로 보냄
  });
};

exports.getVisitor = (id, callback) => {
  console.log("방명록 하나 조회");
  console.log(id);
  const query = `SELECT * FROM visitor WHERE id=${id};`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  console.log("방명록 하나 추가");
  const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}','${data.comment}');`;
  conn.query(query, (err, rows) => {
    console.log("write: ", rows);
    callback(rows);
  });
};

exports.patchVisitor = (data, callback) => {
  console.log("방명록 하나 수정");
  const query = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id};`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    callback(rows); // 사용하지는 않음
  });
};

exports.deleteVisitor = (data, callback) => {
  console.log("방명록 하나 삭제");
  const query = `DELETE FROM visitor WHERE id=${data.id};`;
  conn.query(query, (err, rows) => {
    callback(rows); // 사용하지는 않음
  });
};
