const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/getForm2", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET으로 정보받기",
    userInfo: req.query,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
