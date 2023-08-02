const express = require("express");
const app = express();
const PORT = 8000;

//로그인 변수
const users = {
  id: "coding",
  pw: 1234,
};

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("app");
});

app.get("/axiosPost", (req, res) => {
  res.render("app");
});

app.post("/resultpost", (req, res) => {
  console.log(req.body);
  const id = "kdt8";
  const pw = "1234";
  if (id === req.body.id && pw === req.body.pw) {
    res.send({});
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
