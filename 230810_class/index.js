const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/student");
app.use("/", router);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
