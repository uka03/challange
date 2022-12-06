let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i];
}

console.log(sum);
let maxnum = "";

for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > maxnum) {
    maxnum = arrayOfNumbers[i];
  }
}
console.log(maxnum);

let minNum = arrayOfNumbers[0];

for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] < minNum) {
    minNum = arrayOfNumbers[i];
  }
}

console.log(minNum);

console.log([32].concat(arrayOfNumbers));
arrayOfNumbers[arrayOfNumbers.length] = 80;

console.log(arrayOfNumbers);
