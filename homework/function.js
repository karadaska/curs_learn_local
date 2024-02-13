function returneazaNumerePanala20() {
  let numere = "";
  for (let i = 1; i <= 20; i++) {
    numere = numere + i + ";";
  }
  console.log("Numerele de la 1 to 20: " + numere);
}

function returneazaNumereParePanaLa20() {
  let numere_impare = "";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      numere_impare = i + ";";
      console.log("Numerele impare pana la 20: " + numere_impare);
    }
  }
}

function suma() {
let array_given = prompt('Adauga elementele unui array');
array_given = Number(array_given);

  var my_array=[];
  my_array.push(array_given);

console.log(my_array);

//   var sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   console.log(sum);
}

function sum_test(){
    let max;
let userNumber;
let verify_number;

do {
  userNumber = prompt("add number");
  
    if((typeof userNumber) !=='object'){
        verify_number = Number(userNumber);
    }else {
        verify_number = 'object';
    }

  if (typeof max === "undefined") {
    max = verify_number;
  }

  if (userNumber != null && max < verify_number) {
    max = verify_number;
  }

} while (verify_number !=='object');

console.log("numarul maxim este: " + max);
}


let homework1 = returneazaNumerePanala20();
let homework2 = returneazaNumereParePanaLa20();
let sum_array = suma();
let adunare = sum_test();
