// controller 파일 DB와 router 연결해 줌

const User = require("../model/User");

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
  User.postSignup(req.body, (result) => {
    res.send({
      result: true,
    });
  });
};

// 로그인 폼 보여줌
exports.getSignin = (req, res) => {
  res.render("signin");
};

// 로그인 진행
exports.postSignin = (req, res) => {
  //model
  User.postSignin(req.body, (result) => {
    console.log(result); // 결과가 배열로 옴
    if (result.length > 0) {
      res.send({ result: true, data: result[0] });
    } else {
      res.send({ result: false, data: null });
    }
  });
};

// 로그인 성공 후 프로필
exports.postProfile = (req, res) => {
  console.log(req.body);
  User.postProfile(req.body, (result) => {
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  });
};

// 프로필 수정
exports.editProfile = (req, res) => {
  console.log(req.body);
  User.editProfile(req.body, () => {
    res.send({ result: true });
  });
};

// 프로필 삭제
exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, () => {
    res.send({ result: true });
  });
};
