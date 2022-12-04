let n = parseFloat(prompt("too oruulnauu"));
// let n = 10;
let output = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (row == 1 || row == n || col == 1 || col == n) {
      output = output + "*";
    } else {
      output = output + " ";
    }
  }
  output = output + "\n";
  debugger;
}
console.log(output);
