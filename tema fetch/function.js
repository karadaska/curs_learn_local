const lista_dogs = document.querySelector(".lista_dogs");
const btn = document.querySelector("#fetch-quote-btn");
const display_div = document.querySelector(".display-quote");

async function getListaCatei() {
  // const lista_animale = await fetch ("https://dog.ceo/api/breeds/list/all");
  const lista_animale = await fetch(
    "https://api.chucknorris.io/jokes/categories"
  );
  const list = await lista_animale.json();


      list.forEach(element => {
  //  const option_select = document.createElement('option');
  //     option_select.textContent = element.value;
  //     lista_dogs.append(option_select);
  console.log(element);

  });

  //  const option_select = document.createElement('option');
  //     option_select.textContent = list;
  //     lista_dogs.append(option_select);

  // display_div.textContent = list.value;
}

btn.addEventListener("click", getListaCatei);
