let number = [2, 1, 6, 5, 8];
let removeNum = 6;
function removeArrayElement(n) {
  let neew = n.splice(n.indexOf(removeNum), 1);
  return neew;
}

console.log(removeArrayElement(number) + "  " + number);
