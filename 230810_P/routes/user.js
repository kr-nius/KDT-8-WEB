const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// router 파일

// main home GET localhost:8000/user
router.get("/", controller.getUser);

// 회원가입 폼 보여줌 GET localhost:8000/user/signup
router.get("/signup", controller.getSignup);

// 회원가입 진행 POST localhost:8000/user/signup
router.post("/signup", controller.postSignup);

// 로그인 폼 보여줌
router.get("/signin", controller.getSignin);

// 로그인 진행
router.post("/signin", controller.postSignin);

// 로그인 성공 후 프로필
router.post("/profile", controller.postProfile);

// 정보 수정
router.patch("/profile/edit", controller.editProfile);

// 정보 삭제
router.delete("/profile/delete", controller.deleteProfile);

router.get("/findall", controller.findall);

module.exports = router;
