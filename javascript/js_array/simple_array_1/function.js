let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
output = "";
console.log(itCompanies);

for (let i = 0; i < itCompanies.length; i++) {
  output =
    output +
    itCompanies[i] +
    " bairshil ni " +
    i +
    " temdegtiin urt ni  " +
    itCompanies[i].length +
    "\n";
}
console.log(output);

let firstCompany = itCompanies[0],
  centerCompany = itCompanies[Math.floor(itCompanies.length / 2)],
  lastCompany = itCompanies[itCompanies.length - 1];

console.log(firstCompany + " " + centerCompany + " " + lastCompany);

for (i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
output = "";
for (i = 0; i < itCompanies.length; i++) {
  output = output + itCompanies[i].toUpperCase() + "\n";
}
console.log(output);
output = "";
for (i = 0; i < itCompanies.length; i++) {
  output = output + itCompanies[i] + ", ";
}
output = output + " зэрэг мэдээллийн технолгийн томоохон компаниуд.";
console.log(output);
