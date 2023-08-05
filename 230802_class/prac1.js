const express = require("express");
const multer = require("multer");
const path = require("path"); //경로 나타내는 것
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer setting
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname); // 확장자 분리(확장자만 뽑아줌)
      done(null, req.body.userId + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 }, // 파일 사이즈 제한
});

//router
app.get("/", (req, res) => {
  res.render("prac1");
});

app.post("/result", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    profile: req.file.path,
  });
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
