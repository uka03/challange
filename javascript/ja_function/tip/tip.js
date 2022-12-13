let pay = 27500;
let pays = [27500, 3000, 100000];
let allpay = [];

function tulbur(number) {
  if (number > 5000 && number < 30000) {
    return (number * 15) / 100 + number;
  } else {
    return (number * 20) / 100 + number;
  }
}

console.log(tulbur(pay));

function Atulbur(number) {
  let temp;
  let temp2 = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 5000 && number[i] < 30000) {
      temp = (number[i] * 15) / 100 + number[i];
    } else {
      temp = (number[i] * 20) / 100 + number[i];
    }
    temp2 = temp2 + temp;
  }
  return temp2 / number.length;
}
console.log(Atulbur(pays));

function addedPayment(number) {
  if (number > 5000 && number < 30000) {
    return (number * 15) / 100;
  } else {
    return (number * 20) / 100;
  }
}
console.log(addedPayment(pay));
