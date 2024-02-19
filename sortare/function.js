let arr = [
  {
    name: "Maricica",
    varsta: 70,
    inaltime: 150,
  },
  {
    name: "Danut",
    varsta: 69,
    inaltime: 172,
  },
  {
    name: "Florin",
    varsta: 39,
    inaltime: 170,
  },
];

// sortarea de obiect pe varsta
arr.sort(function (a, b) {
  return a.varsta - b.varsta;
});

// sortarea de obiect pe name 1 metoda
arr.sort(function (a, b) {
  return b.varsta - a.varsta;
});
// sortarea de obiect pe name: a 2 metoda metoda

// arr.sort(function (a, b) {
//   return b.name.localeCompare(a.name);
// });

console.log(arr);

// Sortarea crescatoare a-b a unui array
let items = [10, 4, 5, 77, 8, -2, 0];
items.sort((a,b) => a - b);

console.log(items);
// Sortarea descrescatoare a-b
items.sort((a,b) => b-a);
console.log(items);

//Afisare numare mai mari decat o valoare din array
let numere = [10, 4, 5, 77, 8, -2, 0];
let result = numere.filter((numere) => numere > -2);
console.log(result);

// let test_array = [10, 4, 5, 77, 8, -2, 0];
// //Afisare numare mai mari decat o valoare din array


// let filterElem = test_array.filter(function(elem){
//     elem > 1;
// })
// console.log(filterElem);
