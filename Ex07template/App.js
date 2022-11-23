const express = require("express");
const nunjucks = require("nunjucks");
const indexRouter = require("./routes");
const app = express();

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html"); // nunjucks = njk / html

app.use("/", indexRouter);

nunjucks.configure("views", {
  express: app, // app 객체 연결
  watch: true, // html 파일이 연결되면 템플릿 엔진을 다시 렌더링
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " 포트에서 서버 연결 대기중 ...");
});
