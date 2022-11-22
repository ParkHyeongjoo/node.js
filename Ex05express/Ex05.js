const express = require("express");
const bodyParser = require("body-parser"); // post 요청시 body 파싱을 위해 추가

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.set('key', value)
app.set("port", process.env.PORT || 8888); // 기본 포드가 있다면 그 번호로 지정, 없다면 8888

app.get("/get", (req, res) => {
  // '/user/{id}'
  // user/1 -> parameter
  // 쿼리스트링 ?name=value&name2=value2
  let id = req.query.id;
  let pw = req.query.pw;

  res.send("id : " + id + " pw : " + pw);
});

app.post("/post", (req, res) => {
  let id = req.body.id;
  let pw = req.body.pw;

  res.send("id : " + id + " pw : " + pw);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " 포트에서 서버 연결 대기중 ...");
});
