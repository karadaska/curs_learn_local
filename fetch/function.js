// await zica nu-mi executa linia 4 daca nu am raspuns de la 3
// apelam functia getQuoute fara paranteze rotunde ca sa luam functia


// json.parse(variabile) => interpreateaza variabila ca fiind json
async function getQuoute(){
    const response = await fetch ("https://api.chucknorris.io/jokes/random");
    const responseBodyAsJson = await response.json();
    const qoute = responseBodyAsJson.value;
    displayElem.textContent = qoute;
};


const displayElem = document.querySelector('.display');
const btnElem = document.querySelector('button');
btnElem.addEventListener('click', getQuoute);