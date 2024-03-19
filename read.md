// let și const nu se leagă de this. 
// Js face distinctie intre majuscule si minuscule (lastName != lastname)
// Ca sa nu folosim console log si sa afisam in browser textul folosim document.write
// let c = 10; c &&= 3;
// aici valoare c o sa fie 3

// daca prima valoare a lui xeste falsa atunci ia valoarea a 2-a
// let x = undefined;
// x ||= 5;


// // Array
// const myArray= [1,2,3,4, 'gicu'];
// myArray.forEach(element => {
//     console.log(element)
// });

// // Array de obiecte
// const cars = ["Saab", "Volvo", "BMW"];
// const nume = 'Marius';
// const prenume = "Salavastru";
// const nume_complet = `Marius Salavastru`;


// // Putem scoate elementele dintr-un array cu functia shift si pop
// console.log('Scoatem primul element din array cu shift: ' +numar2.shift());
// console.log('Scoatem primul element din array cu pop: ' + numar2.pop());

// let position = [1,2,3,4,5,6,7];
// // Pentru a afla pozitia unui element din array se face cu indexof()
// let posision_array = position.indexOf(1);
// console.log('Pozitia unui element dintr-un array este data de functia indexof(): ' + posision_array)

// // Adaugam elemente la inceputul unui array cu functia unshift
// numere.unshift('first_array');
// console.log('Adaugam elemente la inceputul unui array cu functia unshift : ' + numere);

// Ca sa trimitem cod html din javascript trebuie sa folosim functia  .innerHtml


// Daca folosim const nume (variabila nu se poate modifica)
// Daca folosim le nume (variabila se poate modifica)
// /Variabilele declarate în interiorul unui bloc { } nu pot fi accesate din afara blocului: 
// toString() 	Returnează un număr ca șir 
// Valoarea() 	Returnează un număr ca număr 
// toFixed() 	Returnează un număr scris cu un număr de zecimale 
// Number.parseFloat() 	Convertește un șir într-un număr 
// Number.parseInt() 	Convertește un șir într-un număr întreg 
// Number.isInteger() 	Returnează adevărat dacă argumentul este un număr întreg 
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
// The pop()metoda elimină ultimul element dintr-o matrice: 
// The push()metoda adaugă un nou element la o matrice (la sfârșit): 
// The sort()metoda sortează o matrice în ordine alfabetică: 
// The reverse()metoda inversează elementele dintr-o matrice:
// toSorted() păstrând matricea originală neschimbată, în timp ce ultima metodă modifică matricea originală. 
// Verificare daca este numar se face cu Nan
// Daca vreau sa scot elementele dintr-un array fac console.log(...numere);

Object.keys
{
    let x = 2;
  }
  // x can NOT be used here 

  {
    var x = 2;
  }
  // x CAN be used here
//   Variabilele let x nu poate fi dublat
//   Variabilele var x poate fi dublat

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2  (aici x ia ultima valoare din pagina)

let xn = 10;
// Here x is 10

{
let xn = 2;
// Here x is 2 (nu poate fi folosita extern)
}

// Here x is 10 (ia valoare de sus care e accesibila)

// Ca sa facem style la un text se face asa:
document.getElementById("demo").style.fontSize = "35px"; 
// Afisare elementelor de poate face cu display
document.getElementById("demo").style.display = "block"; 


// Conversia unui Array într-un șir se face cu toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("to_string").innerHTML = fruits.toString();



//Functia splic => imparte un string dupa ce separator vreau eu
var arr = text_replace.split(",");
console.log('Functia splic => imparte un string dupa ce separator vreau eu: ' + arr);


//Verificare daca un sir contine un alt sir se face cu include
console.log('Verificare daca un sir contine un alt sir se face cu include: ' + prenume.includes('Sala'));

//Indexof verifica daca un sir de caractere contine un alt sir
console.log('Indexof verifica daca un sir de caractere contine un alt sir: ' + nume.indexOf("r") > -1);



//Indexof verifica daca un sir de caractere contine un alt sir
console.log('Indexof verifica daca un sir de caractere contine un alt sir: ' + nume.indexOf("r") > -1);



//Verificare daca un sir contine un alt sir se face cu include
console.log('Verificare daca un sir contine un alt sir se face cu include: ' + prenume.includes('Sala'));


// Adaugam elemente la sfarsitul unui array: functia push
numere2.push('end_array');
console.log('Adaugam elemente la sfarsitul unui array cu functia push: ' + numere);


//this se refera la elementul html care a primit evenimentul
<button onclick="this.style.display='none'">
Click to Remove Me!
</button> 




http://developer.mozilla.org/en-US/docs/web/HTTP/Method/GET?sourse=sidebar#Syntax


http: scheme
developer.org: domeniu
en-/GET este path
?sourse = query
Syntax  = fragment