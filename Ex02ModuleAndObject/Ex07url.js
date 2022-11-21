const { URL } = require("url");
// url 생성자 활용

const myURL = new URL(
  "https://www.google.com/search?q=%EC%9B%94%EB%93%9C%EC%BB%B5&oq=%EC%9B%94%EB%93%9C%EC%BB%B5&aqs=chrome..69i57j69i59j69i61l2.659j0j15&sourceid=chrome&ie=UTF-8"
);

// url의 전체 쿼리 확인
console.log("searchParams : ", myURL.searchParams);

// 특정 키의 값
console.log("searchParams.get() : ", myURL.searchParams.get("oq"));

// 특정 키를 가지고 있는지 확인
console.log("searchParams.has() : ", myURL.searchParams.has("page"));

// 모든 key값
console.log("searchParams.keys() : ", myURL.searchParams.keys());

// 모든 value값
console.log("searchParams.values() : ", myURL.searchParams.values());

// key와 value 추가
myURL.searchParams.append("key", "value1");
myURL.searchParams.append("key", "value2");

// colors = red, blue, orange
// getAll() : 값이 여러개 일경우 전부 가져오기
console.log("append : ", myURL.searchParams.getAll("key"));

// 수정
myURL.searchParams.set("key", "value3");
console.log("set : ", myURL.searchParams.getAll("key"));

// key 삭제
myURL.searchParams.delete("key");
console.log("delete : ", myURL.searchParams.getAll("key"));

console.log("searchParams.toString() : ", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
