const express = require("express");
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  res.render("index");
});

//ajax
app.get("/ajax", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log("hi", req);
  console.log("back", req.body);
  res.send(req.body);
});

//axios
app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});
app.post("/axios", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});

//fetch
app.get("/fetch", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});
app.post("/fetch", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});

// 서버 열기
app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
