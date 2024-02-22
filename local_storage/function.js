// pentru a salva valori se foloseste localStorage.setItem
// pentru a citi valori se foloseste localStorage.getItem
// pentru a sterge valori se foloseste localStorage.remove

const txtCheie = document.getElementById('txtCheie');
const txtValoare = document.getElementById('txtValoare');
const bnt = document.getElementById('btn');
const list = document.getElementById('list');

afiseazaLocalStorage();

bnt.addEventListener('click', (e)=>{
let cheie = txtCheie.value;
let valoare = txtValoare.value;
localStorage.setItem(cheie, valoare);
afiseazaLocalStorage();
});

function afiseazaLocalStorage(){
    let cnt = localStorage.length;
    let c;
    list.innerHTML = '';
    if(cnt == 0){
        const li = document.createElement('li');
        li.textContent = 'Lista este goala...'
        list.appendChild(li);
        return;
    }
    let html = ``;
    for (let i = 0; i < cnt; i++) {
        c = localStorage.key(i);
        html += `<li k = ${c}> ${c} : ${localStorage.getItem(c)} <button>Sterge</button></li>`;
    }
    list.innerHTML = html;
};

list.addEventListener('click', (e)=>{
    if(e.target.nodeName !="BUTTON") return;
    let parinte = e.target.closest('li');
    let k = parinte.getAttribute('k');
    localStorage.removeItem(k);
    parinte.remove();

    if(localStorage.length == 0){
        afiseazaLocalStorage();
    }

});