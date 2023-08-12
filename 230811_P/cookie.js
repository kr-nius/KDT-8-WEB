const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// cookie-parser
app.use(cookieParser());

// const cookieConfig = {
//   httpOnly: true,
//   maxAge: 60 * 1000 * 60,
// };

app.get("/", (req, res) => {
  res.render("cookieModal");
});

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log("서버 오픈");
});
