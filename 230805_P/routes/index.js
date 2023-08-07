const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);

// 방명록 보기
router.get("/visitor", controller.getVisitors);

// 방명록 등록
router.post("/visitor/write", controller.postVisitors);

// 방명록 수정
router.patch("/visitor/edit", controller.patchVisitors);

// 방명록 삭제
router.delete("/visitor/delete", controller.deleteVisitors);

module.exports = router;
