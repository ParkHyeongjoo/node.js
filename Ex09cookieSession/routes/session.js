const express = require("express");
const router = express.Router();

// 세션 생성하기
router.get("/setsession", (req, res) => {
  req.session.nickname = "닉네임";
  req.session.today = "today";
  res.send("세션생성");
});

// 세션에 저장된 값 확인
router.get("/getsession", (req, res) => {
  res.send("닉네임 : " + req.session.nickname); // send : 문자열 , + 확인 ..
});

router.get("/deletesession", (req, res) => {
  req.session.destroy(); // 전체 삭제
  req.session.today = ""; // 하나만 삭제 .. 따로 명령문 없음 .. 빈 값으로 대체하는 방법 으로 삭제
  res.send("세션삭제");
});

module.exports = router;
