//Prob 1: returneaza numerele pana la 20
function numbersFromOneTo20() {
  let numere = "";
  for (let i = 1; i <= 20; i++) {
    numere = numere + i + ";";
  }
  console.log(
    "numbersFromOneTo20()=> Afiseaza numerele de la 1 to 20: " + numere
  );
}

//Prob 2: returneaza numerele impare pana la 20
function numbersOddOneTo20() {
  let numere_impare = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      numere_impare.push(i);
    }
  }
  console.log(
    "numbersOddOneTo20()=> Afiseaza numelere imparte pana la 20: " +
      numere_impare
  );
}

// Prob 3: Suma elementelor unui array dat
function sumElementsArrayGiven() {
  let item = [1, 2, 4, 5, 6, 0, -1];
  let sum = 0;
  for (let i = 0; i < item.length; i++) {
    sum += item[i];
  }
  console.log(
    "sumElementsArrayGiven()=> Suma elementelor a array-ului: " +
      "[" +
      item +
      "]" +
      " este: " +
      sum
  );
}

//Prob 4: Afiseaza elementul maxim din array
function maxOfArray() {
  let item = [1, 4, 64, 7, 4, 9, 45, 0, -1];
  let max = 0;
  for (let i = 0; i < item.length; i++) {
    if (max < item[i]) {
      max = item[i];
    }
  }
  console.log(
    `maxOfArray()=> Elementul max din array-ul [${item}] este: ${max}`
  );
}

// Prob 5: De cate ori se repeta un element in array-ul dat ca parametru
function elemRepeatFromArray(items_array, number) {
  let nr = 0;

  for (let i = 0; i < items_array.length; i++) {
    if (number == items_array[i]) {
      nr++;
    }
  }
  console.log(
    `elemRepeatFromArray()=> Numarul ${number} se repeta de: ${nr} ori`
  );
}

// Prob 6: Challenge
function patternNumbers1() {
  let item = [];
  for (let i = 0; i < 4; i++) {
    item.push(i % 2);
  }
  console.log(item.join(" "));

  for (let i = 1; i < item.length; i++) {
    txt = item.reverse();
    console.log(txt.join(" "));
  }
}

function patternNumbers2() {
  console.log("Challange=> patternNumbers()");
  var item = [0, 1, 0, 1];
  var item2 = [1, 0, 1, 0];

  for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
      console.log(item.join(" "));
    } else {
      console.log(item2.join(" "));
    }
  }
}

let numbers_to_20 = numbersFromOneTo20();
let numbers_odd_to_20 = numbersOddOneTo20();
let sum_elements_array_dat = sumElementsArrayGiven();
let max_of_array = maxOfArray();
let repeat_number = elemRepeatFromArray([2, 3, 6, 3, 8], 3);
let challenge = patternNumbers1();
let challenge2 = patternNumbers2();
