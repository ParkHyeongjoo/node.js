const fs = require("fs");
// fs모듈을 promise 형식으로 바꿔서 사용(비동기방식)

fs.readFile("./readme.txt").then((data) => {
  // buffer
  console.log(data.toString());
});
