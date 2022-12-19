// 로그인, 회원가입 등을 처리 할 index

// router
const express = require("express");
const User = require("../models/user");
const router = express.Router(); // router 사용

router.post("/insert", async (req, res, next) => {
  // id, pw, age 데이터 받기
  let { id, pw, age } = req.body;
  try {
    // 데이터 삽입 시 사용하는 함수
    const user = await User.create({
      id: id, // column 이름: 저장되는 값
      pw: pw,
      age: age,
    });
    // user -> 삽입된 데이터 반환
    res.json(user); // 삽입된 데이터를 그대로 응답
  } catch (err) {
    next(err); // 에러처리 미들웨어
  }
});

// user 모든값 조회(get)
router.get("/selectall", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users); // 삽입된 데이터를 그대로 응답
  } catch (err) {
    next(err);
  }
});

// user 특정값 조회
router.get("/select/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "age"],
      where: { id: req.params.id },
    });
    req.session.login = user;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// 수정(patch) (data: body)
router.patch("/update", async (req, res, next) => {
  try {
    const result = await User.update(
      {
        // 수정 할 column 지정
        pw: req.body.pw,
        age: req.body.age,
      },
      {
        where: { id: req.session.login.id },
      }
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 삭제(delete)
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const result = await User.destroy({
      where: { id: req.params.id },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
