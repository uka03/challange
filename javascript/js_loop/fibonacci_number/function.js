let x = parseFloat(prompt("toogoo oruulna uu"));
let a = 1,
  b = 1,
  c = 0;
let output = "";

while (c <= x) {
  c = a + b;
  b = a;
  a = c;
  output = output + b + " ";
}

alert(output);
