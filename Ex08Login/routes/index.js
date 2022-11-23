const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

// 특정 요청 시
// index.html 응답 + 특정 데이터(html 에서 출력되도록)
router.get("/", (req, res) => {
  // render 호출 시
  // 보내는 값 {} : nunjucks가 처리함
  // index : index.html 을 렌더링해서 보내겠다.
  res.render("loginform");
});

router.post("/login", (req, res) => {
  let id = req.body.id;
  let pw = req.body.pw;

  if (id.toLowerCase() == "jparkbro" && pw == 1234) {
    res.render("loginSuccess", { id: id });
  } else {
    res.render("loginFail");
  }
});

module.exports = router;
