// controller 파일 DB와 router 연결해 줌

//const User = require("../model/User");

const models = require("../models");
const { Op } = require("sequelize");

// main home
exports.getUser = (req, res) => {
  res.render("index");
};

// 회원가입 폼 보여줌
exports.getSignup = (req, res) => {
  res.render("signup");
};

// 회원가입 진행
exports.postSignup = (req, res) => {
  // DB에 데이터 저장 (model)
  // User.postSignup(req.body, (result) => {
  //   res.send({
  //     result: true,
  //   });
  // });
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("result: ", result);
    res.send({ result: true });
  });
};

// 로그인 폼 보여줌
exports.getSignin = (req, res) => {
  res.render("signin");
};

// 로그인 진행
exports.postSignin = (req, res) => {
  //model
  // User.postSignin(req.body, (result) => {
  //   console.log(result); // 결과가 배열로 옴
  //   if (result.length > 0) {
  //     res.send({ result: true, data: result[0] });
  //   } else {
  //     res.send({ result: false, data: null });
  //   }
  // });

  // where은 꼭 객체로!!
  console.log("signin req body: ", req.body);
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log("find result: ", result);
    res.send({ result: true, data: result });
  });
};

// 로그인 성공 후 프로필
exports.postProfile = (req, res) => {
  console.log(req.body);
  // User.postProfile(req.body, (result) => {
  //   if (result.length > 0) {
  //     res.render("profile", { data: result[0] });
  //   } else {
  //     res.redirect("/user/signin");
  //   }
  // });
  models.User.findOne({ where: { userid: req.body.profile } }).then(
    (result) => {
      res.render("profile", { data: result });
    }
  );
};

// 프로필 수정
exports.editProfile = (req, res) => {
  // console.log(req.body);
  // User.editProfile(req.body, () => {
  //   res.send({ result: true });
  // });
  // update는 두개의 객체 1. 바꾸고 싶은 것 2. 어디에?
  const { userid, pw, name, id } = req.body;
  models.User.update({ userid, pw, name }, { where: { id } }).then((result) => {
    console.log("update result: ", result);
    res.send({ result: true });
  });
};

// 프로필 삭제
exports.deleteProfile = (req, res) => {
  // User.deleteProfile(req.body.id, () => {
  //   res.send({ result: true });
  // });
  const { id } = req.body;
  models.User.destroy({ where: { id } }).then((result) => {
    res.send({ result: true });
  });
};

// findall은 배열 안에 객체로 값이 온다.
exports.findall = (req, res) => {
  models.User.findAll({
    // attributes: 원하는 컬럼 조회
    attributes: ["name", "userid"],
    // Op.gt(초과) / Op.gte(이상) / Op.lt (미만) / Op.ne(같지 않은) / Op.or(또는) / Op.in(배열 요소 중 하나) /  Op.notIn(배열요소와 모두 다름) => 얘네 사용하려면 sequelize 불러와야 함(첫줄)
    where: { id: { [Op.gte]: 2 } }, // 조건: id 값 2 이상
    order: [["id", "desc"]], // id를 desc(내림차순)으로 가져와라
    limit: 1, // 갯수 제한
    offset: 1, // 1개 건너 뛴 후의 값
  }).then((result) => {
    res.send(result);
  });
};
