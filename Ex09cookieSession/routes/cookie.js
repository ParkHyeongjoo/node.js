const express = require("express");
const router = express.Router();

// 쿠키 설정하기
router.get("/setcookie", (req, res) => {
  let nickname = "JParkBro";

  res.cookie("nickname", nickname, {
    maxAge: 3600000,
  });

  res.cookie("dinner", "치킨", {
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 365),
  });

  res.send("쿠키생성");
});

// 쿠키 확인하기, npm i cookie-parser 하고 나면 가져올 수 있다
router.get("/getcookies", (req, res) => {
  console.log(req.cookies.dinner); // key값으로 가져오는 방법
  console.log(req.cookies.nickname);
  res.send(req.cookies); // 모든 쿠키 가져오는 방법
});

// 쿠키 삭제하기
router.get("/deletecookie", (req, res) => {
  res.clearCookie("nickname");

  res.send("쿠키삭제");
});

module.exports = router;
