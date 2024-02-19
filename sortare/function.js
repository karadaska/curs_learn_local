const cities = ['Iasi', 'Cluj-Napoca', 'Bucuresti', 'Timisoara', 'Brasov'];
const sortare_numbers = [10, 4, 5, 77, 8, -2, 0];
// sortare alfabetica
let sortare_alfabetica = cities.sort();
let sortare_numerica = sortare_numbers.sort();
console.log('Sortare alfabetica a unui array de string:' + sortare_alfabetica);
console.log('Sortare in ordine crescatoare a unui array de numere: ' + sortare_numerica);

console.log('Scoatem orasele care incep cu litera b');
// Scoatem orasele care incep cu litera b (filtrare asa se face)
const literab = cities.filter(function(elem){
 return elem[0] == 'B';
});

console.log(literab);

console.log('Sortare orase obiect');
const advCities = [
  {
    name: 'Iasi',
    rating: 7
  },
  {
    name : 'Cluj-Napoca',
    rating: 8
  },
  {
    name : 'Bucuresti',
    rating: 18
  },
  {
    name : 'Timisioara',
    rating: 10
  }
];

// aici are 2 parametri
// daca a - b...face sa fie sortarea asc
advCities.sort(function(a, b){
  //  return b.rating - a.rating;
  // sortare descrescatoare
    return a.rating - b.rating;
});
console.log(advCities);

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
