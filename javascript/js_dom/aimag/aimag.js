let firstAimag = document.getElementsByTagName("li")[0];
let list = document.querySelectorAll("li");

let listLenth = list.length - 1;
let lastAimag = document.getElementsByTagName("li")[listLenth];
let subaAimag = document.getElementById("aimag-315");
for (i = 0; i <= listLenth; i++) {
  list[i].style.color = "blue";
  list[i].style.listStyle = "none";
}

console.log(firstAimag);
console.log(lastAimag);
console.log(subaAimag);
console.log(list);
