let num = prompt("too oruula");
let i = 0;
let output = true;

while (i < num.length) {
  if (num.charAt(i) != num.charAt(num.length - 1 - i)) {
    output = false;
  }
  i++;
}
alert(output);
