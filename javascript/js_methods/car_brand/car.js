carBrands = [
  ["Aston Martin Lagonda Ltd", "UK", 2016],
  ["Audi", "Germany", 2016],
  ["BMW", "Germany", 2016],
  ["Chevrolet", "USA", 2016],
  ["Dodge", "USA", 2016],
  ["Ferrari", "Italy", 2016],
  ["Honda", "Japan", 2016],
  ["Jaguar", "UK", 2016],
  ["Lamborghini", "Italy", 2016],
];
let letter = "b".toUpperCase();
let region = "usa".toUpperCase();

function carBrandName(word) {
  let output = "";
  for (let i = 0; i < carBrands.length; i++) {
    if (carBrands[i][0].split("")[0] == word) {
      output =
        output +
        "brand: " +
        carBrands[i][0] +
        "\n" +
        "country: " +
        carBrands[i][1] +
        "\n" +
        "year: " +
        carBrands[i][2] +
        "\n\n";
    }
  }
  return output;
}

function carBrandRegion(word) {
  let output = "";
  for (let i = 0; i < carBrands.length; i++) {
    if (carBrands[i][1] == word) {
      output =
        output +
        "brand: " +
        carBrands[i][0] +
        "\n" +
        "country: " +
        carBrands[i][1] +
        "\n" +
        "year: " +
        carBrands[i][2] +
        "\n\n";
    }
  }
  return output;
}

function data(word) {
  let output = "";
  let dataLine = carBrands.length;
  let count = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  for (let i = 0; i < dataLine; i++) {
    if (word[i][1] == "UK") {
      count++;
    } else if (word[i][1] == "Germany") {
      count1++;
    } else if (word[i][1] == "USA") {
      count2++;
    } else if (word[i][1] == "Italy") {
      count3++;
    } else if (word[i][1] == "Japan") {
      count4++;
    }
  }
  output +=
    "Нийт " +
    dataLine +
    " мөр дата," +
    " UK-" +
    count +
    ", " +
    "Germany-" +
    count1 +
    ", " +
    "USA-" +
    count2 +
    ", " +
    "Italy-" +
    count3 +
    ", " +
    "Japan-" +
    count4;
  return output;
}
console.log(data(carBrands));
console.log(carBrandName(letter));
console.log(carBrandRegion(region));
