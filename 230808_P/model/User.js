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
    callback();
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

// 로그인 성공 후 프로필
exports.postProfile = (data, callback) => {
  const query = `SELECT * FROM user08 WHERE userid='${data.profile}';`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("postProfile: ", rows);
    callback(rows);
  });
};

// 프로필 수정
exports.editProfile = (data, callback) => {
  const query = `UPDATE user08 SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id};`;
  conn.query(query, (err, rows) => {
    callback();
  });
};

// 프로필 삭제
exports.deleteProfile = (id, callback) => {
  const query = `DELETE FROM user08 WHERE id=${id};`;
  conn.query(query, (err, rows) => {
    callback();
  });
};
