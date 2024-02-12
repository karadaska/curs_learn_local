let nume = 'Marius';
let prenume = "Salavastru";
let nume_complet = `Marius Salavastru`;

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

let include_variabile2 = 'Concatenare variabile varinta 2 cu semnul: ' + nume;
console.log(include_variabile2);


let include_variabile3 = 'Concatenare variabile varinta 3 cu semnul:';
console.log(include_variabile3);



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
// date primite in js Number, string, boolean si se transmit prin valoare
// celelalte se transmit prin referinte
// cand am vectori trebuie sa fie const ca variabila
// conceptul de pointer

// sa ma intrebe elevii dintr-o clasa...si care sunt prezenti

// sa facem 2 grupe dintr-o clasa de elevi (impartirea sa fie in 2 grupe);


