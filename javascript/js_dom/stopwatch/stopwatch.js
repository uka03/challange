let timer = document.getElementsByClassName("timer")[0];
timer.style.color = "white";
timer.style.backgroundColor = "blue";
timer.style.width = "500px";
timer.style.height = "100px";
timer.style.fontSize = "86px";
timer.style.textAlign = "center";
timer.style.borderRadius = "50px";
timer.style.margin = "50px auto";
let m = 0,
  s = 0,
  d = 0;
setInterval(function () {
  d++;
  if (d == 99) {
    d = 0;
    s++;
  }
  if (s == 59) {
    s = 0;
    m++;
  }
  timer.innerHTML = `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}:${
    d < 10 ? "0" : ""
  }${d}`;
}, 10);
