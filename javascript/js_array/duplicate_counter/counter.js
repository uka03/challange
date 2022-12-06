let n = "12341";
let count = 0;
let output = "";

for (i = 0; i < n.length; i++) {
  let num = n[i];
  for (j = 0; j < 10; j++) {
    if (num == j) {
      output = output + j + ": " + count;
      break;
    }
  }
  output = output + num + ": " + count + "\n";
}

console.log(output);
