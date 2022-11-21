const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    // 에러 발생시 예외처리
    throw err;
  }
  console.log(data);
});
