let firstName = prompt("uuriin ner");
let lastName = prompt("owog");

let firstNameL = firstName.length;
let lastNameL = lastName.length;
if (firstNameL === lastNameL) {
  alert("neruud ijil temdegtei");
} else if (firstNameL > lastNameL) {
  alert("tanii uuriin ner ih temdegttei");
} else {
  alert("tanii owog ih temdegttei");
}

//task2
let lowerLetter = "Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.";
alert(lowerLetter.toLowerCase());

//task3
let upLetter = "Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.";
alert(upLetter.toUpperCase());

//task4
let pineAca = "Pinecone academy";
let leap = " leap хөтөлбөрт тавтай морилго уу?";

alert(pineAca.concat(leap));

//task5
let firstNam = prompt("tanii ner");
let lastNam = prompt("tanii owog");
let country = prompt("uls");
let city = prompt("hot");
let age = prompt("nas");
let job = prompt("ajil");

alert(
  "Намайг " +
    lastNam +
    " овогтой " +
    firstNam +
    " гэдэг." +
    "би " +
    age +
    " настай." +
    "Би " +
    country +
    " улсын " +
    city +
    " хотод амьдарч " +
    job +
    " хийдэг."
);

//task6
