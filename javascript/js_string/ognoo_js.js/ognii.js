let ognoo = prompt("он, сар, өдөр");
// let ognoo = "2022, 3, 1";

let year = ognoo.substring(0, ognoo.indexOf(","));

ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

let month = ognoo.substring(0, ognoo.indexOf(","));

ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

let day = ognoo.substring(0, ognoo.length);

if (month >= 1 && month <= 12) {
  month = month.length == 1 ? "0" + month : month;
} else {
  month = "iim sar bhku";
}
if (day >= 1 && day <= 31) {
  day = day.length == 1 ? "0" + day : day;
} else {
  day = "iim udur bhku";
}
alert(year + "-" + month + "-" + day);
32;

//task2
let phoneNumber = prompt("Та утасны дугаараа оруулна уу");
if (phoneNumber.length == 8) {
  if (
    phoneNumber.substring(0, 2) == 80 ||
    phoneNumber.substring(0, 2) == 86 ||
    phoneNumber.substring(0, 2) == 88 ||
    phoneNumber.substring(0, 2) == 89
  ) {
    alert(phoneNumber + " таны дугаар Unitel-ын дугаар байна");
  } else if (
    phoneNumber.substring(0, 2) == 84 ||
    phoneNumber.substring(0, 2) == 85 ||
    phoneNumber.substring(0, 2) == 94 ||
    phoneNumber.substring(0, 2) == 95 ||
    phoneNumber.substring(0, 2) == 99
  ) {
    alert(phoneNumber + " таны дугаар Mobicom-ын дугаар байна");
  } else if (
    phoneNumber.substring(0, 2) == 83 ||
    phoneNumber.substring(0, 2) == 93 ||
    phoneNumber.substring(0, 2) == 97 ||
    phoneNumber.substring(0, 2) == 98
  ) {
    alert(phoneNumber + " таны дугаар G-Mobile-ын дугаар байна");
  } else if (
    phoneNumber.substring(0, 2) == 90 ||
    phoneNumber.substring(0, 2) == 91 ||
    phoneNumber.substring(0, 2) == 96
  ) {
    alert(phoneNumber + " таны дугаар Skytel-ын дугаар байна");
  } else {
    alert(phoneNumber + " Буруу дугаар байна");
  }
} else {
  alert(phoneNumber + " Буруу дугаар байна");
}
