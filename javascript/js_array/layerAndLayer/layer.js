let n = 5;
let output = "";
for (let col = 1; col <= n + 1; col++) {
  for (let row = 1; row != col; row++) {
    output = output + row + " ";
  }
  output = output + "\n";
}

console.log(output);

output = "";
for (let col = 1; col <= n + 1; col++) {
  for (let row = n; row > col - 1; row--) {
    output = output + row + " ";
  }
  output = output + "\n";
}

console.log(output);
