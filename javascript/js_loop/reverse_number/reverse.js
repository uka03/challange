let n = prompt("toogoo oruula");
let output = "";
let a = 1;

while (n.length - a >= 0) {
  output = output + n.charAt(n.length - a);
  a = a + 1;
}
alert(n + " -> " + output);
