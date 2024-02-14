//returneaza numerele pana la 20
function NumberFromOneTo20(number) {
  let numere = "";
  for (let i = 1; i <= number; i++) {
    numere = numere + i + ";";
  }
  console.log("Numerele de la 1 to 20: " + numere);
}

//returneaza numerele impare pana la 20
function returneazaNumereParePanaLa20(number) {
  let numere_impare = "";
  for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) {
      numere_impare = i + ";";
      console.log("Numerele impare pana la 20: " + numere_impare);
    }
  }
}

//Suma elementelor unui array
function sumArray() {
  var array = [1, 3, 5, 6, 9];
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("Suma elementelor unui array: " + sum);
}

function maxOfArray() {
  var item = [1, 4, 6, 7, 4, 9, 45, 0, -1];

  max = Math.max(...item);
  console.log("Max of array este: " + max);
}

// // Elementul max al elementelor unui array dat
function sumElementsArrayGiven() {
  let userNumber;
  let verify_number;
  let nr_max = [];

  do {
    userNumber = prompt("add number");

    if (typeof userNumber !== "object") {
      verify_number = Number(userNumber);
      nr_max.push(verify_number);
        } else {
      verify_number = "object";
    }

  } while (verify_number !== "object");

console.log('Nr max din array-ul dat este: ' + Math.max(...nr_max));
}


let homework1 = NumberFromOneTo20(20);
let homework2 = returneazaNumereParePanaLa20(20);
let sum_elements_array = sumArray();
let max_of_array = maxOfArray();
let sum_elements_array_dat = sumElementsArrayGiven();
