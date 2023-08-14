const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session 옵션 설정
app.use(
  session({
    secret: "secretKey", // 시크릿키 필수! 값은 원하는대로 설정 가능
    resave: false,
    saveUninitialized: true,
  })
);

const userInfo = { id: "kdt8", pw: "1234" };

app.get("/", (req, res) => {
  const user = req.session.user;
  console.log(user);
  // 로그인을 하지 않은 상태
  if (user === undefined) {
    res.render("index", { isLogin: false });
  } else {
    // 로그인을 한 상태
    res.render("index", { isLogin: true, user });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // 로그인이 되는 경우
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    req.session.user = req.body.id;
    res.redirect("/");
  } else {
    res.send(
      `<script>alert("로그인 실패");document.location.href='/';</script>`
    );
  }
});

app.get("/logout", (req, res) => {
  const user = req.session.user;
  if (user === undefined) {
    res.send(
      `<script>alert('잘못된 접근입니다.');document.location.href='/';</script>`
    );
  } else {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.redirect("/"); // 항상 redirect가 밑에 있어야 함
    });
  }
});

app.listen(PORT, () => {
  console.log("서버 오픈");
});
