function Suma() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);
  let sum = nr1 + nr2;
  console.log("Suma este: " + sum);
};

function Diferenta() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);

  let dif = nr1 - nr2;
  console.log("Rezultatul diferentei este: " + dif);
};

function Inmultire() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);

  let inmultire = nr1 * nr2;
  console.log("Rezultatul inmultiri este: " + inmultire);
};

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
};

function calculeaza() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);

  Suma(nr1, nr2);
  Diferenta(nr1, nr2);
  Inmultire(nr1, nr2);
  Impartire(nr1, nr2);
};



