const { Student, StudentProfile, Classes } = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

// 학생 생성
exports.post_student = async (req, res) => {
  try {
    const { userid, email, password, name, major, enroll } = req.body; // 객체 구조 분해 할당
    const user = await Student.create(
      {
        userid,
        password,
        email,
        StudentProfile: {
          name,
          major,
          enroll,
        },
      },
      // include: 쿼리를 실행할 때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
      // StudentProfile: {}의 값은 어디에 넣을 것인지 설정
      { include: StudentProfile }
    );
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log();
  }
};
exports.post_class = async (req, res) => {
  try {
    const { name, room, code, teacher_name, StudentId } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      StudentId,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.get_student = async (req, res) => {
  try {
    const student = await Student.findAll({
      attributes: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }],
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};
