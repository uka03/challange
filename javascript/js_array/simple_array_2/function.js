let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let output = "";
for (let i = 0; i < 3; i++) {
  output = output + itCompanies[i] + " ";
}
console.log(output);
output = "";
for (let i = itCompanies.length - 1; i > itCompanies.length - 4; i--) {
  output = output + itCompanies[i] + " ";
}
console.log(output);

output = "";
let out = "";
let centerCompany = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(centerCompany);

output = "";
for (let i = 1; i < itCompanies.length; i++) {
  output = output + itCompanies[i] + " ";
}

console.log(output);

output = "";
for (let i = 0; i < itCompanies.length - 1; i++) {
  output = output + itCompanies[i] + " ";
}

console.log(output);
