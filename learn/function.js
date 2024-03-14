// * document.getElementById("demo").innerHTML scrie intr-un html continutul dorit
// * document.getElementById("demo").write scrie in iesirea HTML
// * Math.random afiseaza valori intre 0 si 1
// * Valoare absoluta math.abs returneaza valoare pozitiva (-7) returneaza 7
// * Daca vrem sa inlocuim un element dintr-o lista se face cu replaceWith
// * Daca vrei sa stergem un element dintr-o lista se face cu txt.removeChild(parinte.children[4])
// * Mai este si insertBefore si before(inainte de un element) si after (dupa un element)
// * Daca vrem sa inlocuim un element dintr-o lista se face cu replaceWith
// * appendChild auda elementele ca copil a unui div
// * Putem adauga un element la sfarsit de lista cu text.append(variabila cu html).
// * Puteam adauga la inceput un element dintr-un div cu text.preppend(element)
// * Style la valoare: variabila.style.display = “none”;
// * Style font size: varianbila.style.fontSize = “35px”;
// * Schimbat textul printr-o functie: Cu innerHtml setam continutul in element html
// * Pentru modul de testare si afisare putem face cu document.write.
// * Document.write(19+3); Afiseaza In pagina rezultatul.
// * Puteam scoate toate elementele html care contin clasa =”clasa_demo”: document.getElementsByClassName(‘class_demo’)	
// * Puteam scoate toate butoanele din html: document.getElementsByTagName(‘button’);	
// * inlocuirea unui element se face cu replateWith() sau cu replaceChild()
// * cod asincron sunt bucati de cod care se executa la bucati de timp
// * setinterval se executa codul dupa un anumit timp
// * daca vreau sa fac un eveniment pe un buton => buton.addEventListener ('click', onclick) [btn2.addEventListener ('click', (e) => console.log('am dat click pe buton'));]

// for in javascript
for(let i=0 ; i < numere.length; i++){
    console.log(numere[i]);
}

// Functia join

let arr = ['unu', 'doi', 'trei'];
// Functia join adauga un separator
var txt = arr.join(';');
console.log(txt);


// Putem scoate elementele dintr-un array cu functia shift si pop
console.log('Scoatem primul element din array cu shift: ' +numar2.shift());
console.log('Scoatem primul element din array cu pop: ' + numar2.pop());

let position = [1,2,3,4,5,6,7];
// Pentru a afla pozitia unui element din array se face cu indexof()
let posision_array = position.indexOf(1);

// Array de obiecte
const cars = ["Saab", "Volvo", "BMW"];
const nume = 'Marius';
const prenume = "Salavastru";
const nume_complet = `Marius Salavastru`;


// Adaugam elemente la inceputul unui array cu functia unshift
numere.unshift('first_array');
console.log('Adaugam elemente la inceputul unui array cu functia unshift : ' + numere);




console.log('Pozitia unui element dintr-un array este data de functia indexof(): ' + posision_array)



// Ca sa scrim intr-un html, paragraf se face cu innerHtml
document.getElementById('demo').innerHTML = 'Hello JavaScript'; 

// Ca sa facem style la un text se face asa:
document.getElementById("demo").style.fontSize = "35px"; 
// Afisare elementelor de poate face cu display
document.getElementById("demo").style.display = "block"; 
// Ca alerta se face cu functia alert sau window.alert()
// Daca vrei sa afisezi ceva in pagina si sa nu folosesti console.log poti folosi document.write
//  Folosiți întotdeauna const dacă valoarea nu trebuie schimbată 
// Utilizare const cand avem un array, obiect, functie
// Asa se initializeaza un obiect
const car = {type:"Fiat", model:"500", color:"white"};
// Array object:
const cars = ["Saab", "Volvo", "BMW"];

let numere = [1,2,3, 'test', false];
let numar2 = [1,2,3,4,5,6,7];

console.log('este numar');
// Asa arata un obiect
const person = {
    firstName:"John", 
    lastName:"Doe"
};


// afisarea unui obiect
console.log('Afisarea unui obiect ' + person.firstName);
console.log('Afisarea unui obiect ' + person['firstName']);


//Functia splic => imparte un string dupa ce separator vreau eu
let arr = text_replace.split(",");
console.log('Functia splic => imparte un string dupa ce separator vreau eu: ' + arr);

// Conversia unui Array într-un șir se face cu toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("to_string").innerHTML = fruits.toString();

// The pop()metoda elimină ultimul element dintr-o matrice: 
// The push()metoda adaugă un nou element la o matrice (la sfârșit): 
// The sort()metoda sortează o matrice în ordine alfabetică: 
// The reverse()metoda inversează elementele dintr-o matrice:
// toSorted() păstrând matricea originală neschimbată, în timp ce ultima metodă modifică matricea originală. 
// Verificare daca este numar se face cu Nan
// Daca vreau sa scot elementele dintr-un array fac console.log(...numere);

//Functia splic => imparte un string dupa ce separator vreau eu
let arr = text_replace.split(",");
console.log('Functia splic => imparte un string dupa ce separator vreau eu: ' + arr);


//Verificare daca un sir contine un alt sir se face cu include
console.log('Verificare daca un sir contine un alt sir se face cu include: ' + prenume.includes('Sala'));

//Indexof verifica daca un sir de caractere contine un alt sir
console.log('Indexof verifica daca un sir de caractere contine un alt sir: ' + nume.indexOf("r") > -1);

//Lungimea sirului
console.log('lungimea sirului: ' + nume.length);


//Indexof verifica daca un sir de caractere contine un alt sir
console.log('Indexof verifica daca un sir de caractere contine un alt sir: ' + nume.indexOf("r") > -1);

//Extragere a unui subsir dintr-un text se face cu substring
console.log('Extragere a unui subsir dintr-un text se face cu substring: ' + nume.substring(2,5));

//Verificare daca un sir contine un alt sir se face cu include
console.log('Verificare daca un sir contine un alt sir se face cu include: ' + prenume.includes('Sala'));

// Pentru a putea folosi ghilimele intr-un sir a 2 metoda => concatenare
let sir3 = "ghilimele \"in\" sir";
console.log('Pentru a putea folosi ghilimele intr-un sir exemplu: "ghilimele \"in\" sir": ' + sir2);


// Adaugam elemente la sfarsitul unui array: functia push
numere.push('end_array');
console.log('Adaugam elemente la sfarsitul unui array cu functia push: ' + numere);



//this se refera la elementul html care a primit evenimentul
<button onclick="this.style.display='none'">
Click to Remove Me!
</button> 