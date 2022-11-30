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

//task4 negative positive shalgah

let too = -20;

too >= 1 ? console.log("positive") : console.log("negative");

//task5

let height = 172;
let weight = 95;
let Hmeter = height / 100;
let BoMaIn = weight / (Hmeter * Hmeter);

if (BoMaIn < 18.5) {
  console.log("ta jingiin dutagdaltai");
} else if (BoMaIn < 25.0) {
  console.log("ta eruul jintei");
} else if (BoMaIn < 30.0) {
  console.log("Илүүдэл жинтэй");
} else {
  console.log("Хэт таргаллалттай");
}

//task6
let num = 20;

num >= 1 ? console.log("Эерэг") : console.log("Сөрөг");

//task7
let number = 31;

number % 2 === 0
  ? console.log("тэгш тоо байна")
  : console.log("Сөрөг тоо байна");

//task8

let yearOfBirth = 1996;
let old = 2022 - yearOfBirth;
if (old >= 0 && old <= 1) {
  console.log("Infant");
} else if (old <= 3) {
  console.log("Toddler");
} else if (old <= 5) {
  console.log("Preschool");
} else if (old <= 12) {
  console.log("Gradeschooler");
} else if (old <= 18) {
  console.log("Teen");
} else if (old <= 21) {
  console.log("Young adult");
} else {
  console.log("Adult");
}
