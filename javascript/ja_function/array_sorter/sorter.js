let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
let minNum = arr[0];
let output = "";

function arraySorter(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    } else {
      minNum = minNum;
    }
  }
  return minNum;
}

console.log(arraySorter(arr));
