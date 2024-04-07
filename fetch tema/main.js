const select_dog = document.querySelector(`#select_dog`);
const select_sub_dog = document.querySelector(`#select_sub_dog`);
const displayDiv = document.querySelector(`.display`);

select_sub_dog.style.display = "none";

async function getListDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const lista = await response.json();
  const items = lista.message;

  for (p in items) {
    const option = document.createElement("option");
    option.textContent = p;
    select_dog.append(option);
  }
}

getListDogs();

async function getSubListDogs(parent_dog) {
  const response = await fetch(`https://dog.ceo/api/breed/${parent_dog}/list`);
  const lista = await response.json();
  const ret = lista.message;
  select_sub_dog.style.display = "";

  if (ret.length > 0) {

    ret.forEach((item) => {
      const option = document.createElement("option");
      option.textContent = item;
      select_sub_dog.append(option);
    });
  } 
  else {
    select_sub_dog.style.display = "none";
    console.log('aici trebuie sa sterg lista de option subdog');
  }

}

async function imagePictureDog() {
  const selectedOption = select_dog.querySelector("option:checked");
  const dog_value = selectedOption.textContent;
  getSubListDogs(selectedOption.value);

  const response_image_dogs = await fetch(
    `https://dog.ceo/api/breed/${dog_value}/images`
  );
  const poze_dogs = await response_image_dogs.json();
  const lista_poze_dogs = poze_dogs.message;

  // lista de caini
  const response_sub_dogs = await fetch(
    `https://dog.ceo/api/breed/${dog_value}/list`
  );
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
}

async function imagePictureSubDog() {
  const dog_select = select_dog.querySelector("option:checked");
  const dog = dog_select.textContent;

  const sub_dog_select = select_sub_dog.querySelector("option:checked");
  const sub_dog = sub_dog_select.textContent;

  const response_image_subdogs = await fetch(
    `https://dog.ceo/api/breed/${dog}/${sub_dog}/images`
  );
  const poza = await response_image_subdogs.json();
  const img = poza.message;

  let getPicture = img[Math.floor(Math.random() * img.length)];

  displayDiv.innerHTML = `<img class="display_img" src="${getPicture}" alt="${getPicture}">`;

}

function reset(nr){
console.log(nr);
}