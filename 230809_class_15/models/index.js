"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// model
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// const a = require()
// const b =

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
