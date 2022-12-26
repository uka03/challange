let select = document.getElementById("breeds");
let card = document.getElementsByClassName("card")[0];
let current;
fetch(`https://dog.ceo/api/breeds/list`)
  .then((res) => res.json())
  .then((data) => {
    getbreeds(data.message);
    fetchimg(data.message[0]);
  });

function getbreeds(data) {
  data.map((dogbreed) => {
    let html = `<option value=${dogbreed}>${dogbreed}</option>`;
    select.innerHTML += html;
  });
}
select.addEventListener("change", () => fetchimg(select.value));

function fetchimg(data) {
  fetch(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => res.json())
    .then((data) => genImg(data.message));
  current = data;
}

function genImg(data) {
  let html = `<img src="${data}" >`;
  card.innerHTML = html;
}

card.addEventListener("click", () => fetchimg(current));
