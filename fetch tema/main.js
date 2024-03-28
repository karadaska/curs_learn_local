const categoriesDropdown = document.querySelector(`#select_dog`);
const fetchBtn = document.querySelector(`#fetch-quote-btn`);
fetchBtn.addEventListener(`click`, imagePictureDog);

async function getListaDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const lista = await response.json();
  const data = lista.message;

  const dataKeys = Object.keys(data);

  for (p in data) {
    const option = document.createElement("option");
    option.textContent = p;
    categoriesDropdown.append(option);
  }
}

getListaDogs();

async function imagePictureDog() {
  const displayDiv = document.querySelector(`.display`);
    const selectedOption = categoriesDropdown.querySelector('option:checked');
    const dog = selectedOption.textContent;

    const response = await fetch(`https://dog.ceo/api/breed/${dog}/images`);
    const quote = await response.json();
    const data = quote.message;

    for (p in data) {
      const para = document.createElement("p");
      // displayDiv.textContent = data[p];
      displayDiv.innerHTML = `<img src="${data[p]}" alt="${p}" width="500" height="600">`;

    }

}


