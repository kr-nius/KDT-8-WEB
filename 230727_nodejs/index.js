// const mod = require("./module");
// console.log(mod); // .a로 적으면 a 변수만 가져옴(.)

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  // 서버 요청, 응답
  //   response.writeHead(200);
  //   response.write("<h1>Hello World</h1>");
  //   response.end("<p>End</p>");

  // 파일 전송
  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
  }
});

server.listen(8000, function () {
  console.log("localhost:8000포트로 실행");
});

// 항상 서버는 1. 요청과 2. 응답을 작성해야 함
// 포트로 접근할 때 주소창에 localhost:8000
// 사용 하지 않을 때는 꼭 서버 종료하기 터미널에 Ctrl + c
