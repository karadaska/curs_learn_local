// Asa arata un obiect
const person = {
    firstName:"John", 
    lastName:"Doe"
};

// Array de obiecte
const cars = ["Saab", "Volvo", "BMW"];
const nume = 'Marius';
const prenume = "Salavastru";
const nume_complet = `Marius Salavastru`;

//this se refera la elementul html care a primit evenimentul
<button onclick="this.style.display='none'">
Click to Remove Me!
</button> 

// afisarea unui obiect
console.log('Afisarea unui obiect ' + person.firstName);
console.log('Afisarea unui obiect ' + person['firstName']);


//Lungimea sirului
console.log('lungimea sirului: ' + nume.length);

//Indexof verifica daca un sir de caractere contine un alt sir
console.log('Indexof verifica daca un sir de caractere contine un alt sir: ' + nume.indexOf("r") > -1);

//Extragere a unui subsir dintr-un text se face cu substring
console.log('Extragere a unui subsir dintr-un text se face cu substring: ' + nume.substring(2,5));

//Verificare daca un sir contine un alt sir se face cu include
console.log('Verificare daca un sir contine un alt sir se face cu include: ' + prenume.includes('Sala'));

let text_replace = "tab, ghilimele";

//Functia replace => face inlocuire la un sir de caractere cu un alt string
console.log('Functia replace => face inlocuire la un sir de caractere cu un alt string: ' + text_replace.replace('tab', 'mum'));

//Functia splic => imparte un string dupa ce separator vreau eu
let arr = text_replace.split(",");
console.log('Functia splic => imparte un string dupa ce separator vreau eu: ' + arr);

// Secvente escape

// Pentru a putea folosi ghilimele intr-un sir prima metoda
let sir2 = 'ghilimele "in" sir';
console.log('Pentru a putea folosi ghilimele intr-un sir: ' + sir2);

// Pentru a putea folosi ghilimele intr-un sir a 2 metoda
let sir3 = "ghilimele \"in\" sir";
console.log('Pentru a putea folosi ghilimele intr-un sir exemplu: "ghilimele \"in\" sir": ' + sir2);

// Concatenare
let include_variabile = `Concatenare variabile varinta 1 cu semnul ~ ${nume}`;
console.log(include_variabile);

let grade = 10;
let nextGrade = grade;
grade = grade -1 ;

console.log('grade este: ' + grade);
console.log('nextGrade este: ' + nextGradegrade);

const adiGrades = [7,8];
adiGrades.push(10);
adiGrades[1] = 5;
const mianaGrades = [...adiGrades];

console.log(adiGrades);
console.log(mianaGrades);

//Lungimea sirului
console.log('lungimea sirului: ' + nume.length);

//Indexof verifica daca un sir de caractere contine un alt sir
console.log('Indexof verifica daca un sir de caractere contine un alt sir: ' + nume.indexOf("r") > -1);

//Extragere a unui subsir dintr-un text se face cu substring
console.log('Extragere a unui subsir dintr-un text se face cu substring: ' + nume.substring(2,5));

//Verificare daca un sir contine un alt sir se face cu include
console.log('Verificare daca un sir contine un alt sir se face cu include: ' + prenume.includes('Sala'));

let text_replace = "tab, ghilimele";

//Functia replace => face inlocuire la un sir de caractere cu un alt string
console.log('Functia replace => face inlocuire la un sir de caractere cu un alt string: ' + text_replace.replace('tab', 'mum'));

//Functia splic => imparte un string dupa ce separator vreau eu
let arr = text_replace.split(",");
console.log('Functia splic => imparte un string dupa ce separator vreau eu: ' + arr);


let numere = [1,2,3, 'test', false];
let numar2 = [1,2,3,4,5,6,7];


// Daca vreau sa scot elementele dintr-un array fac console.log(...numere);
// Adaugam elemente la sfarsitul unui array: functia push
numere.push('end_array');
console.log('Adaugam elemente la sfarsitul unui array cu functia push: ' + numere);

// Adaugam elemente la inceputul unui array cu functia unshift
numere.unshift('first_array');
console.log('Adaugam elemente la inceputul unui array cu functia unshift : ' + numere);

// Putem scoate elementele dintr-un array cu functia shift si pop
console.log('Scoatem primul element din array cu shift: ' +numar2.shift());
console.log('Scoatem primul element din array cu pop: ' + numar2.pop());

let position = [1,2,3,4,5,6,7];
// Pentru a afla pozitia unui element din array se face cu indexof()
let posision_array = position.indexOf(1);

console.log('Pozitia unui element dintr-un array este data de functia indexof(): ' + posision_array)

// Functia join

let arr = ['unu', 'doi', 'trei'];
// Functia join adauga un separator
var txt = arr.join(';');
console.log(txt);

// numere.splice trebuie vazut


// for in javascript
for(let i=0 ; i < numere.length; i++){
    console.log(numere[i]);
}

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

// // date primite in js Number, string, boolean si se transmit prin valoare
// // celelalte se transmit prin referinte
// // cand am vectori trebuie sa fie const ca variabila





