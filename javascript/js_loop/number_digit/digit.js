let n = parseFloat(prompt("toogoo oruulna uu"));
let output = 0;
while (n != 0) {
  n = Math.floor(n / 10);
  output++;
}
alert(output);
