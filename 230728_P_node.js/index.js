const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/public", express.static("./public")); //사진사용

app.get("/", (req, res) => {
  res.render("main");
});
app.get("/lava", (req, res) => {
  res.render("lava");
});
app.get("/fruits", (req, res) => {
  res.render("fruits");
});
app.get("/gugudan", (req, res) => {
  res.render("gugudan", { data: 2 });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
