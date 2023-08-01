// 실습 01 callback -> promise로 변경

// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name); // 작업 성공시 then(name)
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back"); // 작업 성공시 then
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call("kim")
//   .then(function (result) {
//     console.log(result + "반가워");
//     return back();
//   })
//   .then(function (result) {
//     console.log(result + "을 실행했구나");
//     return hell();
//   })
//   .then(function (result) {
//     console.log("여기는" + result);
//   });

// ---------------------------------------------------------------------

// 실습 02 promies로 바꾼 코드 exec 즉, async 함수 만들어서 실행하기
// async function exec() {
//   const name = await call("kim");
//   console.log(name + "님 환영합니다.");
//   const result = await back();
//   console.log(result + '을 실행했구나');
//   const msg = await  hell();
//   console.log('여기는' + msg);
// }

// exec();
