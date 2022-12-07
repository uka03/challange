let n = "12321";

function palinChecker(n) {
  let nSplit = n.split(""); // ["1","2","3"]
  let nReverse = nSplit.reverse(); // ["3","2","1"]
  let nJoin = nReverse.join(""); //"321"
  if (nJoin == n) {
    return true;
  } else {
    return false;
  }
}

console.log(palinChecker(n));
