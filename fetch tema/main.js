const select_dog = document.querySelector(`#select_dog`);
const fetchBtn = document.querySelector(`#aplica`);
fetchBtn.addEventListener(`click`, imagePictureDog);

async function getListaDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const lista = await response.json();
  const data = lista.message;

  const dataKeys = Object.keys(data);

  for (p in data) {
    const option = document.createElement("option");
    option.textContent = p;
    select_dog.append(option);
  }
}

getListaDogs();

async function imagePictureDog() {
  const displayDiv = document.querySelector(`.display`);
  const selectedOption = select_dog.querySelector("option:checked");
  const dog = selectedOption.textContent;

  const response = await fetch(`https://dog.ceo/api/breed/${dog}/images`);
  const quote = await response.json();
  const data = quote.message;

  for (p in data) {
    displayDiv.innerHTML = `<img class="display_img" src="${data[p]}" alt="${p}">`;
  }
}
