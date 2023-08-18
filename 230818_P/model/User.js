// user에 대한 테이블 정의
const { DataTypes } = require("sequelize");

const UserModel = (sequelize) => {
  const User = sequelize.define(
    "user", // sequelize 이름
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, // not null
        primaryKey: true,
        autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING(255), // varchar
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "user18", //MYSQL 에서 가져오는 TABLE 이름 또는 새이름
      freezeTableName: true, // 이름 복수(~s)로 설정 하지 않음
      timestamps: false,
    }
  );
  return User;
};

module.exports = UserModel;
