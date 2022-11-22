const express = require("express");
const app = express();

// app.set('key', value)
app.set("port", process.env.PORT || 8888); // 기본 포드가 있다면 그 번호로 지정, 없다면 8888

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " 포트에서 서버 연결 대기중 ...");
});
