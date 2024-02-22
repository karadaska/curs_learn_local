function Suma() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);
  let sum = nr1 + nr2;
  console.log("Rezultatul sumei este: " + sum);
}

function Diferenta() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);

  let dif = nr1 - nr2;
  console.log("Rezultatul diferentei este: " + dif);
}

function Inmultire() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);

  let inmultire = nr1 * nr2;
  console.log("Rezultatul inmultiri este: " + inmultire);
}

function Impartire() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);
  let impartire = 0;

  if (nr2 != 0) {
    impartire = nr1 / nr2;
  } else {
    impartire = 0;
  }

  console.log("Rezultatul Impartirii este: " + impartire);
}

function calculeaza() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);

  Suma(nr1, nr2);
  Diferenta(nr1, nr2);
  Inmultire(nr1, nr2);
  Impartire(nr1, nr2);
  console.log('==============');
}

let item1 = document.querySelector("#nr1");
item1.textContent =Math.floor(Math.random() * 100);
no1 = Number(item1.textContent);

let item2 = document.querySelector("#nr2");
item2.textContent =Math.floor(Math.random() * 100);
no2 = Number(item2.textContent);

let sum = no1 + no2;

const rezultat = document.querySelector("#rezultat");
rezultat.textContent = sum;

function verificare1() {
  const varinta1 = document.querySelector("#verificare");
  varinta1.textContent = 'Rezultatul este corect';
  
};

function verificare2() {
  const varinta2 = document.querySelector("#verificare");
  varinta2.textContent = 'Rezultatul este incorect';
  
};

