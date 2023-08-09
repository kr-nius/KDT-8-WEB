// 데이터베이스(DB) 관리 부분

// mysql 연결 파일
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});
// 접속 됐는지 확인
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

// 회원가입 진행 (req.body, 콜백)
exports.postSignup = (data, callback) => {
  console.log("회원가입 진행");
  const query = `INSERT INTO user08 (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}');`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signup: ", rows);
    callback(rows);
  });
};

// 로그인 진행
exports.postSignin = (data, callback) => {
  console.log("로그인 진행");
  const query = `SELECT * FROM user08 WHERE userid='${data.userid}' AND pw='${data.pw}';`;
  //mysql에 연결
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signin: ", rows);
    callback(rows);
  });
};

exports.postProfile = (data, callback) => {
  const query = `SELECT * FROM user08 WHERE userid='${dara.profile};`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("postProfile: ", rows);
    callback(rows);
  });
};
