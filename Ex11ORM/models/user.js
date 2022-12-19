const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  // init : user 필드 자료형 지정, Table 관련 설정
  // associate : 테이블 간의 관계 설정
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.STRING(50),
          primaryKey: true,
        },
        pw: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        // 테이블에 대한 설정 지정
        sequelize, // init 매개변수
        modelName: "User", // 프로젝트에서 사용할 모델의 이름
        tableName: "users", // 실제 DB에 생성되는 테이블 이름
        charset: "utf8",
      }
    );
  }
  static associate(db) {
    // User / Project
    // db.User.hasMany(db.Project, { foreignKey: "id", sourceKey: "id" }); // 1 대 (hasMany)
    // db.User.hasOne() // 1:1
    // db.User.belongsToMany() // 다:다
    // db.Project.belongsTo(db.User, { foreignKey: "id", targetKey: "id" }); // 다 (belongsTo)
  }
};
