//task 1 10 hurtleh natural too
let number = 1;
let output = "";
while (number <= 10) {
  output = output + number + " ";
  number++;
}

console.log(output);

//task 2 10 hurtleh sondgoi toog hewleh
number = 1;
output = "";
while (number <= 10) {
  if (number % 2 != 0) {
    output = output + number + " ";
  }
  number++;
}
console.log(output);
//task 3 10 hurtleh tegsh too oloh
number = 1;
output = "";
while (number <= 10) {
  if (number % 2 == 0) {
    output = output + number + " ";
  }
  number++;
}
console.log(output);

//task4 100 toonii niilber

number = 100;
output = 0;
while (number > 0) {
  output = output + number;
  number--;
}
console.log(output);

//task5 n hurtleh toog hewleh niilberiig oloh

number = parseFloat(prompt("toogoo oruulna uu"));
output = "";
let sum = 0;
while (number > 0) {
  sum = sum + number;
  output = output + number + " ";
  number--;
}

alert(output + "edgeer toonii niilber ni " + sum);

//task6
