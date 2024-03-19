// -----------------OPERATORI LOGICI--------------------
let c = 10; c &&= 3;
// aici valoare c o sa fie 3: if c == && (true) atunci c =3

// daca prima valoare este falsa atunci ia valoarea a 2-a
let x = undefined; x ||= 5;


// -----------------SIRURI DE SABLOANE--------------------
// Caracterul de evadare backslash ( \) transformă caracterele speciale în caractere șir: 
let demo1 = document.getElementById('demo1');
demo1.innerHTML = "Cum punem textul \"pisic\" intre ghilimele";
// Ca sa apara ghilimele se pune\ inainte de "
let text2 = 'It\'s alright.';

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

// -----------------NUMERE--------------------

// IsNaN este un cuvânt rezervat JavaScript care verifica daca este diferit de numar. 

const one = 'Aceste nu este un numar';
const one2 = '12';
const two = (isNaN(one));
const three = (isNaN(one2));
const four = (isNaN(one2));
console.log('Este diferit de numar: ' + two);
console.log('Este diferit de numar? ' + four);


// -----------------NUMBER MOETHOD--------------------
// functia toString returneaza un numar ca fiind un sir
let number_toString = 12;
console.log(number_toString.toString);



// <span>*Cu functia innerHtml scrii trimiti date intr-un fisier html</span><br/>
// <span>*{ let x = 2} inafara blocului x nu poate fi folosit</span><br/>
// <span>*{ var x = 2} inafara blocului x poate fi folosit</span><br/>
// <span>* let x=10 (variabila globala si x este 10) { let x = 2 variabile x este 2 in bloc} inafara blocului x este 10</span><br/>
// <span>*Const x defineste o valea constanta a lui x</span><br/>
// <span>*const car = {type:"Fiat", model:"500", color:"white"}; am facut un obiect</span><br/>
// <span>*dar nu putem mai departe sa-i atribuim noi valori car = {type:"Skoda", model:"100", color:"white"}; O sa dea eroare</span><br/>
// <span>*let și const trebuie declarat înainte de utilizare si nu se leaga de this</span><br/>




