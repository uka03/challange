const alphabetReg = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Ч",
  "У",
  "Ц",
];
let alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "Ө",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ү",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Ь",
  "Ъ",
  "Э",
  "Ю",
  "Я",
];
const region = [
  "Архангай",
  "Баян-Өлгий",
  "Баянхонгор",
  "Булган",
  "Говь-Алтай",
  "Дорноговь",
  "Дорнод",
  "Дундговь",
  "Завхан",
  "Өвөрхангай",
  "Өмнөговь",
  "Сүхбаатар",
  "Сэлэнгэ",
  "Төв",
  "Увс",
  "Ховд",
  "Хөвсгөл",
  "Хэнтий",
  "Дархан-Уул",
  "Орхон",
  "Говьсүмбэр",
  "Улаанбаатар",
  "Улаанбаатар",
];

let register = prompt("та РД оруулна уу").toUpperCase();
function isCorrectReg(reg) {
  if (
    alphabetReg.includes(reg[0]) &&
    alphabet.includes(reg[1]) &&
    Number.isInteger(Number(reg.slice(2, 10))) &&
    reg.length == 10
  ) {
    getGender(reg);
    getBirthRegion(reg);
    getBirthDay(reg);
    return getRegisterInfo(reg);
  } else {
    return "РД буруу байна";
  }
}

function getGender(reg) {
  if (reg[8] / 2 == 0) {
    return "Эмэгтэй";
  } else {
    return "Эрэгтэй";
  }
}
function getBirthRegion(reg) {
  return region[alphabetReg.indexOf(reg[0])];
}
function getBirthDay(reg) {
  let year = "";
  let month = "";
  let day = "";
  if (reg[4] == 2 || reg[4] == 3) {
    year = "20" + reg.slice(2, 4);
    month = reg.slice(4, 6) - 20;
    day = reg.slice(6, 8);
    return year + "." + month + "." + day;
  } else {
    year = "19" + reg.slice(2, 4);
    month = reg.slice(4, 6);
    day = reg.slice(6, 8);
    return year + "." + month + "." + day;
  }
}
function getRegisterInfo(reg) {
  let regi = "РД: " + register;
  let huis = "Хүйс: " + getGender(reg);
  let tursun = "Төрсөн он сар өдөр: " + getBirthDay(reg);
  let region = "Төрсөн газар: " + getBirthRegion(reg);

  return regi + "\n" + huis + "\n" + tursun + "\n" + region;
}

alert(isCorrectReg(register));
