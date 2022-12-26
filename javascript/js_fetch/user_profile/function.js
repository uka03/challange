let proImg = document.querySelector(".proImg");
let main = document.querySelector(".top");

fetch(`https://randomuser.me/api`)
  .then((res) => res.json())
  .then((data) => {
    getImg(data.results[0]);
    getName(data.results[0]);
    getMail(data.results[0]);
    getNumber(data.results[0]);
    console.log(data.results[0]);
  });

function getImg(data) {
  let url = data.picture.large;
  let img = `<img src="${url}" class="picture">`;
  proImg.innerHTML = img;
}

function getName(data) {
  let firstname = data.name.first;
  let lastname = data.name.last;
  let html = document.createElement("h1");
  html.setAttribute("class", "fullName");
  html.innerText = firstname + " " + lastname;
  main.append(html);
}

function getMail(data) {
  let email = data.email;
  let html = document.createElement("p");
  html.innerText = email;
  main.append(html);
}
function getNumber(data) {
  let phone = data.phone;
  let html = document.createElement("p");
  html.innerText = phone;
  main.append(html);
}
