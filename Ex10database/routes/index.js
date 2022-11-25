const express = require("express");
const router = express.Router();
const db_config = require("../config/database");

let conn = db_config.init();
db_config.connect(conn);

router.get("/select", (req, res) => {
  let sql = "SELECT * FROM member";

  conn.query(sql, function (err, result, fields) {
    console.log(result);
    if (err) {
      console.error("SELECT 실행 실패 ! : " + err);
    } else {
      res.render("index", { list: result });
    }
  });
});

router.post("/insert", (req, res) => {
  let { id, pw, nick } = req.body;

  let sql = "INSERT INTO member VALUES (?, ?, ?)";

  conn.query(sql, [id, pw, nick], function (err, result, fields) {
    console.log(result);

    if (err) {
      // 실패
      console.error("INSERT 실행 실패! : " + err);
    } else {
      // 성공
      res.redirect("/select");
    }
  });
});

router.get("/select/:id", (req, res) => {
  let id = req.params.id;
  console.log("paramID : " + id);

  let sql = "SELECT * FROM member WHERE id=?";

  conn.query(sql, [id], function (err, result, fields) {
    console.log(result);
    if (err) {
      console.error("SELECT 실행 실패! : " + err);
    } else {
      res.json({ listOne: result });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  let id = req.params.id;

  let sql = "DELETE FROM member WHERE id=?";

  conn.query(sql, [id], function (err, result, fields) {
    console.log(result);
    if (err) {
      console.error("DELETE 실행 실패 ! : " + err);
    } else {
      res.redirect("/select");
    }
  });
});

router.post("/update", (req, res) => {
  let { id, pw, nick } = req.body;

  let sql = "UPDATE member SET pw=? , nick=? WHERE id=?";

  conn.query(sql, [pw, nick, id], function (err, result, fields) {
    console.log(result);
    if (err) {
      console.error("UPDATE 실행 실패 ! : " + err);
    } else {
      res.redirect("/select");
    }
  });
});

module.exports = router;
