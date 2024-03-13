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

// Conversia unui Array într-un șir se face cu toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("to_string").innerHTML = fruits.toString();

// The pop()metoda elimină ultimul element dintr-o matrice: 
// The push()metoda adaugă un nou element la o matrice (la sfârșit): 
// The sort()metoda sortează o matrice în ordine alfabetică: 
// The reverse()metoda inversează elementele dintr-o matrice:
// toSorted() păstrând matricea originală neschimbată, în timp ce ultima metodă modifică matricea originală. 