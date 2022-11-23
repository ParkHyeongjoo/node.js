const express = require("express");
const router = express.Router();

// 특정 요청 시
// index.html 응답 + 특정 데이터(html 에서 출력되도록)
router.get("/", (req, res) => {
  // render 호출 시
  // 보내는 값 {} : nunjucks가 처리함
  // index : index.html 을 렌더링해서 보내겠다.
  res.render("index", { title: "value" });
});

router.get("/hello", (req, res) => {
  res.render("index", { title: "hello" });
});

module.exports = router;
