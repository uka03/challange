let select = document.getElementById("breeds");
let card = document.querySelector(".card");
let option;
fetch(`https://dog.ceo/api/breeds/list`)
  .then((res) => res.json())
  .then((data) => {
    generateBreed(data.message);
    fetchImg(data.message[0]);
  });

function generateBreed(data) {
  data.map((dogBreed) => {
    option = `<option value="${dogBreed}" class="dogBreed">${dogBreed}</option>`;
    select.innerHTML += option;
  });
}
select.addEventListener("change", () => {
  console.log(select.value);
});
function fetchImg(data) {
  fetch(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => res.json())
    .then((data) => {
      genImg(data);
    });
}

function genImg(data) {
  let img = `<img scr=${data.message} />`;
  card.innerHTML = img;
}
