function Suma() {
  let number1 = document.querySelector("#number1");
  let nr1 = Number(number1.value);
  let number2 = document.querySelector("#number2");
  let nr2 = Number(number2.value);
  let sum = nr1 + nr2;
  console.log("Suma este: " + sum);
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
}

let num1 = document.querySelector("#nr1");
// let no1 = Number(num1);
// no1.textContent =Math.floor(Math.random() * 100);

num1.textContent = '334';



// let num2 = document.querySelector("#nr2");
// num2.textContent =Math.floor(Math.random() * 100);
// let no2 = Number(num2);

// console.log(num1);



// let num2 = document.querySelector("#nr2");
// num2.textContent = Number(Math.floor(Math.random() * 50));

// let suma = num1+ num2;
// console.log(suma);

// const rezultat = document.querySelector("#rezultat");
// rezultat.textContent = suma;

// function verificare1() {
//   const varinta1 = document.querySelector("#verificare");

//   if (suma == 22) {
//     varinta1.textContent = "Suma este corecta";
//   }
// }

// function verificare2() {
//   const varinta1 = document.querySelector("#verificare");

//   if (suma != 22) {
//     varinta1.textContent = "Suma nu este corecta";
//   }
// }
