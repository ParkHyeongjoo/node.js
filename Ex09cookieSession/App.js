const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
const cookieRouter = require("./routes/cookie");

app.set("port", process.env.PORT || 8888);

app.use(cookieParser()); // 쿠키 값 확인 시 필요
app.use("/c", cookieRouter);
// app.use('/s', sessionRouter)

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " 포트에서 서버 연결 대기중 ...");
});
