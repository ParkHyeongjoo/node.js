const Sequelize = require("sequelize");
const User = require("./user");
const env = "development";
const config = require("../config/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {}; // sequelize, object 정보

// key        // value (db정보)
db.sequelize = sequelize;
db.User = User; // DB와 Table 연결

User.init(sequelize); // Table 초기화
// User.associate(db); // 관계 설정

module.exports = db;
