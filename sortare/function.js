
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

