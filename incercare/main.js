const select_dog = document.querySelector(`#select_dog`);
const select_sub_dog = document.querySelector(`#select_sub_dog`);
const displayDiv = document.querySelector(`.display`);
select_sub_dog.style.display = "none";

async function createListaDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const lista = await response.json();
  const items = lista.message;

  for (p in items) {
    const option = document.createElement("option");
    option.textContent = p;
    select_dog.append(option);
  }

  return items;
}

createListaDogs();

async function imagePictureDog() {
  const selectedOption = select_dog.querySelector("option:checked");
  const dog_value = selectedOption.textContent;
  getSubListDogs(selectedOption.value);

  // lista de imagini caini
  const response_image_dogs = await fetch(`https://dog.ceo/api/breed/${dog_value}/images`);
  const poze_dogs = await response_image_dogs.json();
  const lista_poze_dogs = poze_dogs.message;

  // lista de caini
  const response_sub_dogs = await fetch(`https://dog.ceo/api/breed/${dog_value}/list`);
  const list_sub_dogs = await response_sub_dogs.json();
  const lista_sub_dogs = list_sub_dogs.message;

  if (selectedOption.value == 0) {
    displayDiv.innerHTML = `Va rugam selectati o categorie de catei!`;
  }

  if (lista_poze_dogs.length > 0 && lista_sub_dogs.length == 0) {
    for (p in lista_poze_dogs) {
      if (selectedOption.value != 0) {
        displayDiv.innerHTML = `<img class="display_img" src="${lista_poze_dogs[p]}" alt="${p}">`;
      }
    }
  }

//   if (lista_poze_sub_dogs.length > 0 && lista_sub_dogs.length > 0) {
//     for (p in lista_poze_sub_dogs) {
//       if (selectedOption.value != 0) {
//         displayDiv.innerHTML = `<img class="display_img" src="${lista_poze_sub_dogs[p]}" alt="${p}">`;
//       }
//     }
//   }
}

async function imagePictureSubDog() {
  // const select_sub_option = select_sub_dog.querySelector("option:checked");
  // const select_sub_dogs = select_sub_option.textContent;
  // getSubListDogs(select_sub_dogs.value);

  // console.log(getSubListDogs);

// const response_image_subdogs = await fetch(`https://dog.ceo/api/breed/${a}/${b}/images`);
// const poze_sub_dogs = await response_image_subdogs.json();
// const lista_poze_sub_dogs = poze_sub_dogs.message;

//   if (lista_sub_dogs.length > 0) {
//     for (p in lista_poze_sub_dogs) {
//       if (selectedOption.value != 0) {
//         displayDiv.innerHTML = `<img class="display_img" src="${lista_poze_sub_dogs[p]}" alt="${p}">`;
//       }
//     }
//   }
}


async function getSubListDogs(parent_dog) {
  const response = await fetch(`https://dog.ceo/api/breed/${parent_dog}/list`);
  const lista = await response.json();
  const ret = lista.message;
  const array_items = [];

  if (ret.length > 0) {
    ret.forEach((item) => {
      array_items.push(item);
    });
  }

  if (array_items.length > 0) {
    select_sub_dog.style.display = "";
    ret.forEach((item) => {
      const option = document.createElement("option");
      option.textContent = item;
      select_sub_dog.append(option);
    });
  } else {
    select_sub_dog.style.display = "none";
  }

  return array_items;
}


