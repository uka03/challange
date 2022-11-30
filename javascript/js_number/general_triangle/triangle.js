let aside = parseFloat(prompt("гурвалжингын А талыг оруулна уу?"));
let bside = parseFloat(prompt("гурвалжингын B талыг оруулна уу?"));
let cside = Math.sqrt(aside * aside + bside * bside);

alert("Гурвалжингын С тал нь " + cside.toFixed(2));
