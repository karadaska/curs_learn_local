const select_dog = document.querySelector(`#select_dog`);
const select_sub_dog = document.querySelector(`#select_sub_dog`);
select_sub_dog.style.display = "none";
// const aplica = document.querySelector(`#aplica`);
// aplica.addEventListener(`click`, imagePictureDog);

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

async function imagePictureDog() {
  const displayDiv = document.querySelector(`.display`);
  const selectedOption = select_dog.querySelector("option:checked");
  const dog = selectedOption.textContent;

  const response = await fetch(`https://dog.ceo/api/breed/${dog}/images`);
  const lista = await response.json();
  const ret = lista.message;

  for (p in ret) {
    if (selectedOption.value != 0) {
      displayDiv.innerHTML = `<img class="display_img" src="${ret[p]}" alt="${p}">`;
    } else {
      displayDiv.innerHTML = `Va rugam selectati o categorie de catei!`;
    }
  }

  getSubListDogs(selectedOption.value);
}

async function getSubListDogs(parent_dog) {
  const response = await fetch(`https://dog.ceo/api/breed/${parent_dog}/list`);
  const lista = await response.json();
  const ret = lista.message;

  if(ret.length > 0){
    select_sub_dog.style.display = "";
    ret.forEach(item => {
      const option = document.createElement("option");
      option.textContent = item;
      select_sub_dog.append(option);
    });
  }else{
    select_sub_dog.style.display = "none";
    reset()
  }

}

function reset(){
  $("#reset").on("click", function () {
    $('#select_sub_dog').prop('option',0);
  });
}
