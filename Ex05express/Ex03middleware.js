const express = require("express");
const app = express();

// app.set('key', value)
app.set("port", process.env.PORT || 8888); // 기본 포드가 있다면 그 번호로 지정, 없다면 8888

app.get("/", (req, res) => {
  res.send("Hello Node!");
  next(); // 다음 미들웨어로 넘어가도록 제어해주는 기능
});

// MiddleWare : 요청 응답 사이에 무언가를 처리해주는 함수
const myLog = function (req, res) {
  console.log("LOGGED");
  next();
};

app.use(myLog); // 만든 미들웨어 app 붙여주기

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " 포트에서 서버 연결 대기중 ...");
});
