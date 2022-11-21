const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "새로 만든 파일!")
  .then(() => {
    // 파일 생성이 성공하면 실행
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    // 파일 리턴이 성공하면 실행
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
