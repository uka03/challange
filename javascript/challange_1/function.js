let dun = 100;
if (dun < 60) {
  console.log("ta F awsan bna");
} else if (dun < 70) {
  console.log("ta D awsan bna");
} else if (dun < 80) {
  console.log("ta C awsan bna");
} else if (dun < 90) {
  console.log("ta B awsan bna");
} else if (dun <= 100) {
  console.log("ta A awsan bna");
} else {
  console.log("ta buruu dun oruulsan bna");
}
// task2 month check use nested
let month = 1;

if (month >= 1 && month <= 12) {
  if (month === 2) {
    console.log(month + " sar 29 eswel 28 honogtoi");
  } else if (month <= 7) {
    if (month % 2 == 1) {
      console.log(month + " sar 31 honogtoi ");
    } else {
      console.log(month + " sar 30 honogtoi ");
    }
  } else if (month >= 8) {
    if (month % 2 == 0) {
      console.log(month + " sar 31 honogtoi ");
    } else {
      console.log(month + " sar 30 honogtoi ");
    }
  }
} else {
  console.log("tiim sar baihku bna");
}
// Task3 3 7 gii vrjwer shalgah
let urjiwer = 14;

if (urjiwer >= 1) {
  if (urjiwer % 3 == 0 || urjiwer % 7 == 0) {
    if (urjiwer % 3 == 0 && urjiwer % 7 == 0) {
      console.log(urjiwer + " ni 3 7 hoyuulanhiih ni urjwer mun");
    } else if (urjiwer % 3 == 0) {
      console.log(urjiwer + " ni 3 iin urjwer mun");
    } else {
      console.log(urjiwer + " ni 7 iin urjwer mun");
    }
  } else {
    console.log(urjiwer + " ni 3 7giin urjwer bish");
  }
} else {
  console.log(urjiwer + " ni surug too baina");
}

//task4 yereg durug shalgah

let too = -20;

too >= 1 ? console.log("positive") : console.log("negative");

//task5
