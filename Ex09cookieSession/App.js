const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cookieRouter = require("./routes/cookie");
const sessionRouter = require("./routes/session");
const session = require("express-session");
const fileStore = require("session-file-store")(session);

app.set("port", process.env.PORT || 8888);
app.use(
  session({
    secret: "cat dog", // 암호화 하는데 쓰일 키
    httpOnly: true, // http 요청으로 온것만 처리
    resave: false, // 세션을 언제나 저장할지 설정
    store: new fileStore(), // 여러 사용자의 세션을 저장하기 위
  })
);

app.use(cookieParser()); // 쿠키 값 확인 시 필요
app.use("/c", cookieRouter);
app.use("/s", sessionRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " 포트에서 서버 연결 대기중 ...");
});
