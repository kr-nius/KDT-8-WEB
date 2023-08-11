const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/index");

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// css
app.use("/static", express.static(__dirname + "/static"));

// router 분리
const router = require("./routes/user");
app.use("/user", router);

// 404 error
app.use("*", (req, res) => {
  res.render("404");
});

// server open 및 테이블 생성
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
