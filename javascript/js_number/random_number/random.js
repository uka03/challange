let min = parseFloat(
  prompt("2 тооны хоорондох санамсаргүй тооны хамгийн бага тоог оруулна уу")
);

let max = parseFloat(
  prompt("2 тооны хоорондох санамсаргүй тооны хамгийн их тоог оруулна уу")
);

let random = Math.floor(
  Math.random() * (Math.abs(max - min) + 1) + Math.min(max, min)
);

alert(random);
