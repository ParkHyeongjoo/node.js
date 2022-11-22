const fs = require("fs");

// Buffer -> Stream : 버퍼의 크기를 작게 만든 후 여러번 나눠 보내는 방식

const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 }); // highWaterMark : 버퍼 크기 지정 (기본값 : 64)
const data = []; // data를 담음

// 파일 읽기가 시작되면 발생
readStream.on("data", (chunk) => {
  // chunk : 데이터의 부분
  data.push(chunk); // data 배열에 chunk 데이터 넣기
  console.log("chunk : ", chunk);
});

// 파일 읽기가 끝나면 발생
readStream.on("end", () => {
  // 최종적으로 다시 하나의 문자열로 만들기
  console.log(Buffer.concat(data).toString());
});
