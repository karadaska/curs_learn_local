
//Prob 1: returneaza numerele pana la 20
function NumberFromOneTo20(number) {
  let numere = "";
  for (let i = 1; i <= number; i++) {
    numere = numere + i + ";";
  }
  console.log("Ex1: Afiseaza numerele de la 1 to 20: " + numere);
}

//Prob 2: returneaza numerele impare pana la 20
function returnNrImpare(number) {
  let numere_impare = [];
  for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) {
      numere_impare.push(i);
    }
  }
  console.log("Ex2: Afiseaza numelere imparte pana la 20 sunt:" + numere_impare);
}


function sumElementsArrayGiven() {
  let userNumber;
  let verify_number;
  let nr_max = [];
  let sum = 0;

  do {
    userNumber = prompt("Add elements of array");

    if (typeof userNumber !== "object") {
      verify_number = Number(userNumber);
      nr_max.push(verify_number);
    } else {
      verify_number = "object";
    }

  } while (verify_number !== "object");

  for (let i = 0; i < nr_max.length; i++) {
    sum +=nr_max[i];
  }
  console.log("Ex3: Suma elementelor din array-ul dat este: " + sum);
}



// Prob 4: Elementul maxim a unui array
function maxOfArray() {
  var item = [1, 4, 6, 7, 4, 9, 45, 0, -1];

  max = Math.max(...item);
  console.log("Ex4: Elementul max a unui array este: " + max);
}


// Prob 5: De cate ori se repeta un element
function elemRepeat(number) {
  var item = [1, 3, 4, 5, 6, 7, 5];
  var nr = 0;

  for (let i = 0; i < item.length; i++) {
    if (number == item[i]) {
        nr++;
    }
  }
  console.log(`Ex5: Numarul ${number} se repeta de: ${nr}`);

}


// Prob 6: Challenge
function reverse() {
  var item = [0, 1, 0, 1];
  var item2 = [1, 0, 1, 0];

  for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
      console.log(item);
    } else {
      console.log(item2);
    }
  }
}

let homework1 = NumberFromOneTo20(20);
let impar = returnNrImpare(20);
let max_of_array = maxOfArray();
let sum_elements_array_dat = sumElementsArrayGiven();
let repeat_number = elemRepeat(5);
let repeat = reverse();


