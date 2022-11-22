const express = require("express");
const app = express();

// app.set('key', value)
app.set("port", process.env.PORT || 8888); // 기본 포드가 있다면 그 번호로 지정, 없다면 8888

app.get("/home", (req, res) => {
  // http 모듈 : html 파일을 응답하기 위해서 필요한 것 -> fs 모듈
  // express 모듈 : fs 모듈 필요 X
  res.sendFile(__dirname + "/Ex02.html"); // 파일 응답
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " 포트에서 서버 연결 대기중 ...");
});
