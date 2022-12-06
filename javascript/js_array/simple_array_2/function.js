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

for (
  let i = Math.floor(itCompanies.length / 2) - 1,
    j = Math.floor(itCompanies.length / 2) + 1;
  i > 0;
  i++
) {
  output = output + itCompanies[i] + " ";
  out = out + itCompanies[j] + " ";
  j++;
}

console.log(output + out);
