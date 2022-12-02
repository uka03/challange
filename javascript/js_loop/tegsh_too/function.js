let number = parseFloat(prompt("toogoo oruulna uu"));
let output = "";
while (number > 0) {
  if (number % 2 == 0) {
    output = output + number + "  ";
  }
  number--;
}

alert(output);
