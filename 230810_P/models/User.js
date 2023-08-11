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
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user08", //MYSQL 에서 가져오는 TABLE 이름 또는 새이름
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};

module.exports = UserModel;
