async function getListaDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const lista = await response.json();
  const data = lista.message;
  imagePictureDog(data)
//   fetchBtn.removeAttribute("disabled");
}

function imagePictureDog(dog) {
//   const dogs_select = document.querySelector(`#select_dog`);
console.log(dog);

}

const fetchBtn = document.querySelector(`#fetch-quote-btn`);
fetchBtn.addEventListener(`click`, imagePictureDog);

const displayDiv = document.querySelector(`.display`);
// const categoriesDropdown = document.querySelector(`#categories-dropdown`);

// async function getQuote() {
//     displayDiv.textContent = 'Retrieving quote...';

//     // select the selected category option
//     const selectedOption = categoriesDropdown.querySelector('option:checked');
//     const categoryName = selectedOption.textContent;

//     // make the request
//     const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${categoryName}`);

//     // parse the responsa as a JSON
//     const quote = await response.json();

//     // display the quote
//     displayDiv.textContent = quote.value;
// }

// async function getCategories() {
//     // const response = await fetch("https://api.chucknorris.io/jokes/categories");
//     const categories = await response.json();

//     // create the dropdown options
//     categories.forEach(categoryName => {
//         const option = document.createElement('option');
//         option.textContent = categoryName;
//         categoriesDropdown.append(option);
//     });

//     // enable the buttton
//     // fetchBtn.disabled = false;
//     fetchBtn.removeAttribute('disabled');
// }

// getCategories();

// const fetchBtn = document.querySelector(`#fetch-quote-btn`);
// fetchBtn.addEventListener(`click`, getQuote);

// const displayDiv = document.querySelector(`.display-quote`);
// const categoriesDropdown = document.querySelector(`#categories-dropdown`);
