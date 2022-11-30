let num1 = 120;
let num2 = 33;
let num3 = 10;
let num4 = 12;

if (num1 < num2 && num1 < num3 && num1 < num4) {
  console.log(num1 + " ni hamgiin baga");
} else if (num2 < num3 && num2 < num4) {
  console.log(num2 + " ni hamgiin baga");
} else if (num3 < num4) {
  console.log(num3 + " ni hamgiin baga");
} else {
  console.log(num4 + " ni hamgiin baga");
}
