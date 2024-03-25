const lista_dogs = document.querySelector(".lista_dogs");
const btn = document.querySelector("#fetch-quote-btn");
const display_div = document.querySelector(".display-quote");
const select_option = document.createElement("option");

async function getListDogs() {
  // const lista_animale = await fetch ("https://dog.ceo/api/breeds/list/all");
  const lista_items = await fetch("https://api.chucknorris.io/jokes/categories");
  const list = await lista_items.json();
  let dogsobj = json.parse(lista_items);
  // document.getElementById('pic').src = dogsobj.message
};


// if(valoarea.status == 200){

// }



console.log(getListDogs)

// list.forEach((element) => {
//   select_option.textContent = element;
//   lista_dogs.append(option_select);
// });

//  const option_select = document.createElement('option');
//     option_select.textContent = list;
//     lista_dogs.append(option_select);

// display_div.textContent = list.value;

btn.addEventListener("click", getListDogs);
