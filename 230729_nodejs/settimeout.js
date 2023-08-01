//settimeout 연습
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

//편의점에서 음료 사는 상황
let product;
let price;
goMart();
pickDrink(pay);
// pay(product, price);

function goMart() {
  console.log("마트에 와서 어떤 음료 살까?");
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로 콜라";
    price = 2000;
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
