let n = prompt("prime number");
let prime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    prime = false;
    break;
  }
}

if (prime == true) {
  alert("true");
} else {
  alert("False");
}
