// 3
setImmediate(() => {
  console.log("immediate!");
});

// 2
setTimeout(() => {
  console.log("timeout");
}, 0);

// 1. 이벤트루프가 다른 함수보다 우선으로 처리하도록 만듬
process.nextTick(() => {
  console.log("nextTick");
});
