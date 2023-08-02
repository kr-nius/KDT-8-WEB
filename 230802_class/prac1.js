const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

//정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer setting
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 },
});

app.get("/", (req, res) => {
  res.render("prac1");
});

app.post("/info", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
