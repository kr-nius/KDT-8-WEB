const express = require("express");
const app = express();
const PORT = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  res.render("get");
});

// axios get
app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
