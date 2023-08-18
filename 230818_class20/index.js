const express = require("express");
const app = express();
const crypto = require("crypto");
const PORT = 8000;
require("dotenv").config(); // env 파일 읽어들이기, 변수 선언 안해도 됨

// 전역 변수
let hash = "";

//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  console.log(process.env); // env 요소 전부 출력
  console.log(process.env.STATUS); // env 요소 원하는 것만 출력 status는 해당 요소 이름
  console.log(process.env.NODE_ENV);
  res.render("index");
});

// 생성
app.post("/hash", (req, res) => {
  const { pw } = req.body;
  // const hash = createHashedPassword(pw);
  // hash = createPbkdf(pw); // dbPassword 대신 만듦
  hash = bcryptPassword(pw); // bcrypt
  res.json({ hash });
});

// 검증
app.post("/verify", (req, res) => {
  const { pw } = req.body;
  // const compare = verifyPassword(pw, salt, hash); // 다른 값 입력: false, 동일 값: true
  const compare = comparePassword(pw, hash); // bcrypt
  res.json({ compare });
});

app.post("/cipher", (req, res) => {
  const { data } = req.body;
  const encrypt = cipherEncrypt(data);
  console.log(encrypt); // 암호화 값
  const decrypt = decipher(encrypt);
  res.json({ decrypt }); // 복호화 값
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// =======단방향 암호 function=======

const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
  return crypto.createHash("sha512").update(password).digest("base64");
};

const salt = crypto.randomBytes(16).toString("base64"); // salt 생성
const iterations = 100; // 반복 횟수
const keylen = 64; // 생성할 키의 길이
const digest = "sha512"; //해시 알고리즘
// 아래 함수 실행할 경우, 위 4개는 항상 만들기

// 암호 생성
const createPbkdf = (password) => {
  // pbkdf2(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성
  // 반환되는 값: Buffer 값 그러므로 toString으로 알아볼 수 있게 변환시켜줌
  const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
  // console.log(hash); // Buffer 값으로 나옴
  return hash.toString("base64");
};

// 암호 비교
const verifyPassword = (password, salt, dbPassword) => {
  const compare = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString("base64");
  if (compare === dbPassword) {
    return true;
  } else {
    return false;
  }
};

// =======양방향 암호 function=======
const algorithm = "aes-256-cbc"; // 256 비트 키를 사용, 블록크기는 128 비트
const key = crypto.randomBytes(32); // 1 바이트 = 8 비트
const iv = crypto.randomBytes(16); // 초기화 벡터: 데이터 블록을 암호화할 때 보안성을 높이기 위해 사용

// 암호화
const cipherEncrypt = (word) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화 객체 생성
  let encryptedData = cipher.update(word, "utf-8", "base64"); // 암호화할 데이터 처리
  encryptedData += cipher.final("base64"); // 최종결과 생성
  return encryptedData;
};

// 복호화
const decipher = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화 객체 생성
  let decrytedData = decipher.update(encryptedData, "base64", "utf-8");
  decrytedData += decipher.final("utf-8");
  return decrytedData;
};

// bcrypt(단방향) : npm i bcrypt 후 사용
const bcrypt = require("bcrypt");
const saltNumber = 10;

// 암호화
// 따로 지정 안해도 base64로 출력
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

//비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
