let num1 = 10;
let num2 = 30;
let output = [];

function even(a, b) {
  let j = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      output[j] = i;
      j++;
    }
  }
  return output;
}
function odd(a, b) {
  let j = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 1) {
      output[j] = i;
      j++;
    }
  }
  return output;
}

console.log(odd(num1, num2));
