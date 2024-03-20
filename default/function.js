console.log('-----------------DATES------------------------------------------------------------------------------------------------')
let data = new Date();
console.log('data afisata: ' + data);


// 2023, luna ianuarie , ziua 15
let data2 = new Date(2023, 0, 15);
let data4 = new Date("2023-1-01 15:24:25");
var data5 = new Date("2020-11-12 15:24:25");

// timestamp de acum
console.log(Date.now());

// Convertire string to date
console.log('Convertire din string in date: ' + Date.parse(data));
console.log('Extragere time from a string date: ' + Date.parse(data4));
console.log('Extragere an from a string date: ' + data5.getFullYear());
console.log('Extragere day from a string date: ' + data5.getDay());
console.log('Extragere month from a string date: ' + data5.getMonth());

// Daca vrem sa setam o data se face cu functia set
 data5.setDate(28);
console.log(data5);

// Daca vrei sa vezi doar ora se face cu toLocaleTimeString()

console.log('Daca vrei sa vezi doar data se face cu toLocaleDateString()' + data5.toLocaleDateString());
console.log('Daca vrei sa vezi doar ceasul se face cu toLocaleTimeString()' + data5.toLocaleTimeString());


// Scaderea din 2 date

let dif_date = data4-data5;
console.log('diferenta ani:' + dif_date/(1000*60*60*24*365));



console.log('-----------------ARRAYS------------------------------------------------------------------------------------------------')
// -----------------ARRAYS------------------------------------------------------------------------------------------------

let item_array = ['cucu', 3, 'mama', 'tata'];
console.log(`Array afisat cu ... ` + [...item_array]);

item_array.forEach(element => {
    console.log(element);
});

const duplicate_array = item_array;
console.log(`Duplicate array afisat cu ` + duplicate_array);

// Putem converti un array to string cu functia toString()

const array_to_string = duplicate_array.toString();
console.log(`Array to string cu functia toString ` + array_to_string);

// Adaugam elemente la sfarsitul unui array: functia push
item_array.push('end_array');
console.log('Adaugam elemente la sfarsitul unui array cu functia push: ' + item_array);

const points = new Array(40, 100, 1, 5, 25, 10);
console.log('array facut cu new array ' + points);

// diferenta dintre cele 2
const p = [4];
const p1 = new Array(4);

console.log('aceste este facut p = [40] =>  ' + p);
console.log('aceste este facut p1 = new Array(40)  => ' + p1);
console.log('-----------------ARRAYS METHODS------------------------------------------------------------------------------------------------')


// -----------------ARRAYS METHODS------------------------------------------------------------------------------------------------
// Daca vrei sa elemini ultimul element dintr-un array
const fruncte = ["Banana", "Orange", "Apple", "Mango"];
fruncte.pop();

// The shift()metoda elimină primul element din array și „schimbă” tot alte elemente la un indice mai mic. 
const fruncte2 = ["Banana", "Orange", "Apple", "Mango"];
fruncte2.shift();

// The unshift()metoda adaugă un nou element într-o matrice (la început) și „anulează” elemente mai vechi: 
const fruncte3 = ["Banana", "Orange", "Apple", "Mango"];
fruncte3.unshift("Lemon");

let arr = ['unu', 'doi', 'trei'];
// Functia join adauga un separator intr-un array
var txt = arr.join(';');
console.log(txt);

console.log('-----------------ARRAYS SORTARE------------------------------------------------------------------------------------------------')

// -----------------ARRAYS SORTARE------------------------------------------------------------------------------------------------

// The sort()metoda sortează o matrice în ordine alfabetică: 
var sortare_alfabetica = ["Banana", "Orange", "Apple", "Mango"];
sortare_alfabetica.sort();
console.log('Sortarea alfabetica se poate face si cu sort: ' + sortare_alfabetica);

// The reverse()metoda inversează elementele dintr-o matrice: 

sortare_alfabetica.reverse();
console.log('Inversarea elementelor dintru-un array se poate face cu reverse: ' + sortare_alfabetica);

// Diferența dintre toSorted()și sort() este că prima metodă creează o nouă matrice, păstrând matricea originală neschimbată, 
// în timp ce ultima metodă sort() modifică matricea originală

// Diferența dintre toReversed()și reverse()este prima metodă creează o nouă matrice, 
// păstrând matricea originală neschimbată, în timp ce ultima metodă modifică matricea originală. 


// Sortarea dintr-un array in ordine crescatoare
var sortare_asc_numerica = [40, 100, 1, 5, 25, 10];
sortare_asc_numerica.sort(function(a, b) {return a-b});

console.log('Sortarea crescatoare se poate face si cu sort {a-b}: ' + sortare_asc_numerica);

// sau o altfel de sortare

// Sortarea crescatoare a-b a unui array
let items_asc = [10, 4, 5, 77, 8, -2, 0];
let items_desc = [10, 4, 5, 77, 8, -2, 0];
items_asc.sort((a,b) => a - b);
items_desc.sort((a,b) => b - a);
console.log('Sortarea crescatoare se poate face si in alt mod=> items.sort((a,b) => a - b): ' + items_asc);
console.log('Sortarea descrescatoare se poate face si in alt mod=> items.sort((a,b) => b - a): ' + items_desc);


// Sortarea dintr-un array in ordine descrescatoare
var sortare_desc_numerica = [40, 100, 1, 5, 25, 10];
sortare_desc_numerica.sort(function(a, b) {return b-a});
console.log('Sortarea descrescatoare numerica se poate face si cu sort {b-a}: ' + sortare_desc_numerica);


const cities = ['Iasi', 'Cluj-Napoca', 'Bucuresti', 'Timisoara', 'Brasov'];

// Scoatem orasele care incep cu litera b (filtrare asa se face)
const literab = cities.filter(function(elem){
 return elem[0] == 'B';
});

console.log('Scoatem orasele care incep cu litera b ' + literab);

//Afisare numare mai mari decat o valoare din array
let numere_date = [10, 4, 5, 77, 8, -2, 0];
let result_array = numere_date.filter((numere_date) => numere_date > -2);
console.log('Afisare numare mai mari decat -2 dintr-un array: ' + result_array);


// -----------------Obiecte SORTARE------------------------------------------------------------------------------------------------
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
// daca b - a...face sa fie sortarea asc
advCities.sort(function(a, b){
    //  return b.rating - a.rating;
    // sortare descrescatoare
      return a.rating - b.rating;
  });
console.log(...advCities);

let oameni = [
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
  

// sortarea de obiect pe varsta asc
oameni.sort(function (a, b) {
    return a.varsta - b.varsta;
  });
  

// console.log('Sortarea unui obiect dupa varsta asc ' + oameni);

//   // sortarea de obiect pe name 1 metoda desc
  oameni.sort(function (a, b) {
    return b.varsta - a.varsta;
  });

console.log(...oameni);

  // sortarea de obiect pe name: a 2 metoda metoda
  
  // arr.sort(function (a, b) {
  //   return b.name.localeCompare(a.name);
  // });
  
  


console.log('-----------------OPERATORI LOGICI------------------------------------------------------------------------------------------------')

// -----------------OPERATORI LOGICI----------------------------------------------------------------------------------------

let c = 10; c &&= 3;
// aici valoare c o sa fie 3: if c == && (true) atunci c =3

let x = undefined; x ||= 5;
// daca prima valoare este falsa atunci ia valoarea a 2-a

console.log('-----------------SIRURI DE SABLOANE------------------------------------------------------------------------------------------------')

// -----------------SIRURI DE SABLOANE--------------------
// Caracterul de evadare backslash ( \) transformă caracterele speciale în caractere șir: 
let demo1 = document.getElementById('demo1');
demo1.innerHTML = "Cum punem textul \"pisic\" intre ghilimele";
// Ca sa apara ghilimele se pune\ inainte de "
let text2 = 'It\'s alright.';


console.log('-----------------METODE SIRURI------------------------------------------------------------------------------------------------')

// -----------------METODE SIRURI--------------------
// Lungimea unui sir se face cu functia x.length
// The charAt()metoda returnează caracterul la o anumită valoare index (poziție) într-un șir text.charAr(0): 
// Pentru a extrage parti dintr-un sir folosim: slice(start, end),substring(start, end),substr(start, length)

let text_slice = "Apple, Banana, Kiwi";
console.log('Metoda slice: ' + text_slice.slice(7,13));

//Extragere a unui subsir dintr-un text se face cu substring
// Diferența este că valorile de început și de sfârșit mai mici decât 0 sunt tratate ca 0 in substring()
console.log('Extragere a unui subsir dintr-un text se face cu substring: ' + text_slice.substring(7,13));

// Un șir este convertit în majuscule cu toUpperCase(): 
// Un șir este convertit în minuscule cu toLowerCase():

// Unirea a 2 siruri se face cu concat
let text10 = "Hello";
let text11 = "World";
let text12 = text10.concat(" | ", text11);
console.log('Unirea a 2 siruri se face cu functia concat: ' + text12)

// Functia replace inlocuieste un text cu alt text..trebuie sa se potriveasca textul (Pisica cu pisica)

let mumu = "Pisica mea doarme";
let newText = mumu.replace("Pisica", "W3Schools");
console.log(newText);

//Functia split => imparte un string dupa ce separator vreau eu


console.log('-----------------NUMERE------------------------------------------------------------------------------------------------')

// -----------------NUMERE--------------------------------------------------------------------------------------------------------------------

// IsNaN este un cuvânt rezervat JavaScript care verifica daca este diferit de numar. 

const one = 'Aceste nu este un numar';
const one2 = '12';
const two = (isNaN(one));
const three = (isNaN(one2));
const four = (isNaN(one2));
console.log('Este diferit de numar: ' + two);
console.log('Este diferit de numar? ' + four);


console.log('-----------------NUMBER MOETHOD------------------------------------------------------------------------------------------------')

// -----------------NUMBER MOETHOD--------------------------------------------------------------------------------------------------------------

// functia toString returneaza un numar ca fiind un sir
let number_toString = 12;
console.log(number_toString.toString);
// toFixed()returnează un șir, cu numărul scris cu un număr specificat de zecimale: 
// valueOf()returnează un număr ca număr. 

// Există 3 metode JavaScript care pot fi utilizate pentru a converti o variabilă într-un număr: 
// The Number()metoda poate fi folosită pentru a converti variabilele JavaScript în numere: 
// parseInt() 	Analizează argumentul său și returnează un număr întreg 
// pressFloat() 	Analizează argumentul său și returnează un număr în virgulă mobilă 
// parseFloat()parsează un șir și returnează un număr. Spațiile sunt permis. Se returnează doar primul număr:
// parseInt()parsează un șir și returnează un număr întreg. Spațiile sunt permis. Se returnează doar primul număr: 


