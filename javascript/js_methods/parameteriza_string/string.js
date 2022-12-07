let text = "This Is Where I Begin";

function parameterizeStr(text) {
  text = text.toLocaleLowerCase();
  text = text.split(" ");
  text = text.join("-");
  return text;
}

console.log(parameterizeStr(text));
