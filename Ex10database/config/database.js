const mysql = require("mysql2");

const db_info = {
  host: "localhost",
  port: "3306",
  user: "test",
  password: "1234",
  database: "testdb",
};

module.exports = {
  // 초기화
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) {
        console.error("mySql 연결 오류 : " + err);
      } else {
        console.log("mySql 연결 성공");
      }
    });
  },
};
