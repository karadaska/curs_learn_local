// NIVEL AVANSAT--------------------------------------------------------------------------------------------------------------


// Se citeste un numar intreg pozitiv. Sa se afiseze toate numerele pozitive(inclusiv 0),
// strict mai mici valoarea citita, in ordine descrescatoare

function numereDescrescatoare(a){
let arr = []

for(var i=(aux2.length - 1); i>=0; i--){

}

  // for (let i = 0; i <= a; i++) {
  //     arr.push(i);
  // }
  // console.log(arr)
}


// Se citeste un numar intreg pozitiv. Sa se afiseze toate numerele pozitive nenule mai mici
// sau egale decat valoarea citita, in ordine crescatoare


function numarIntreg(a){

  for (let i = 0; i <= a; i++) {
    if(i > 0) {
      console.log(i);    
    }
  }

}


// NIVEL INCEPATOR--------------------------------------------------------------------------------------------------------------
// Impartire a 2 numere()

function impartire(a, b){
  if(b != 0){
    return a/b;
  }else {
    console.log('Operate imposibila; impartitorul este nul');
  }

}


// Suma a 2 numere()

function sumaAndProdus(a, b){
  let suma = a + b;
  let produsul = a * b;
  console.log('Suma numerelor a si b este: ' + suma);
  console.log('Produsul numerelor a si b este: ' + produsul);

}




const numarul1 = document.querySelector(`#numarul1`);
const numarul2 = document.querySelector(`#numarul2`);
const btn4 = document.querySelector(`#btn4`);
const display_prob4 = document.querySelector(`.display_prob4`);

function changeTheNumbers() {
  nr1 = numarul1.value;
  nr2 = numarul2.value;

  display_prob4.textContent = nr2 + ' ' + nr1;
}

btn4.addEventListener("click", changeTheNumbers);

const problema3 = document.querySelector(`#problema3`);
const btn3 = document.querySelector(`#btn3`);
const display_prob3 = document.querySelector(`.display_prob3`);

function howIsTheNumber() {
  nr = problema3.value;
  if (nr != "") {
    if (nr > 0) {
      display_prob3.textContent = 'Numarul este positiv';
    } else if (nr < 0) {
      display_prob3.textContent = 'Numarul este neagtiv';
    } else if (nr == 0) {
      display_prob3.textContent = 'Numarul este null';
    }
  } else {
    display_prob3.textContent = "Te rog introdu un numar valid";
  }
}

btn3.addEventListener("click", howIsTheNumber);

const problema1 = document.querySelector(`#problema1`);
const btn1 = document.querySelector(`#btn1`);
const display_prob = document.querySelector(`.display_prob`);

function nextUpNumber() {
  number = problema1.value;
  if (number != "" && number != -0) {
    number++;
    display_prob.textContent = number;
  } else {
    display_prob.textContent = "Te rog introdu un numar valid";
  }
}

btn1.addEventListener("click", nextUpNumber);

const problema2 = document.querySelector(`#problema2`);
const btn2 = document.querySelector(`#btn2`);
const display_prob2 = document.querySelector(`.display_prob2`);

function opusNumber() {
  nr = problema2.value;
  if (nr != "") {
    if (nr > 0) {
      display_prob2.textContent = -nr;
    } else if (nr < 0) {
      display_prob2.textContent = -nr;
    } else if (nr == 0) {
      display_prob2.textContent = 0;
    }
  } else {
    display_prob2.textContent = "Te rog introdu un numar valid";
  }
}

btn2.addEventListener("click", opusNumber);


