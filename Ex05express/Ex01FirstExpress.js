const express = require("express");
const app = express(); // app 생성

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8888, () => {
  console.log("8888 포트 서버 연결 대기중 ...");
});
