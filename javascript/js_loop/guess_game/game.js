let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let n;

while (randomNumber !== n) {
  n = Number(prompt("toogoo oruulna uu"));
  let hit = "";
  if (n > randomNumber) {
    hit = hit + "tanii oruulsan too ih bna";
  } else if (n < randomNumber) {
    hit = hit + "tanii oruulsan too baga bna";
  } else if (n == randomNumber) {
    hit = hit + "bayr hurgiye";
  } else {
    hit = "ta zuwhun too oruulna uu";
  }
  alert(hit);
}
