// await zica nu-mi executa linia 4 daca nu am raspuns de la 3
const elem_btn = document.querySelector('.btn');

const elem_display = document.querySelector('.display');

async function categorii(){
    const lista = await fetch ("https://api.chucknorris.io/jokes/categories");
    const list = await lista.json();
    elem_display.textContent = list;
}

elem_btn.addEventListener('click', categorii);
