const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes");
app.use("/", indexRouter);

// 404에러
app.get("*", (req, res) => {
  res.render("404");
});

// 포터 열기
app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
