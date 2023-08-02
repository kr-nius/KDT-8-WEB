const express = require("express");
const multer = require("multer"); // multer 설정
const path = require("path"); // 경로 가져오는 모듈?
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

//정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer setting
const upload = multer({
  // dest: 업로드할 파일을 저장할 경로를 지정
  dest: "uploads/",
});

//파일 세부설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // diskstorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/"); // uploads => 폴더명 (폴더 자동 생성 안되기 때문에 미리 생성해야 함)
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 경로의 확장자를 가져옴
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 },
});

app.get("/", (req, res) => {
  res.render("index");
});

//싱글 파일
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // 파일 정보만 확인 가능
  console.log(req.body); // 파일 제외한 body의 내용 확인
});

//멀티 파일 - 버전 1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

//멀티 파일 - 버전 2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

//동적
app.post(
  "/dynamicfile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
