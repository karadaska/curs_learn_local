
// Array
const myArray= [1,2,3,4, 'gicu'];
myArray.forEach(element => {
    console.log(element)
});



// Ca sa trimitem cod html din javascript trebuie sa folosim functia  .innerHtml
// Ca sa nu folosim console log si sa afisam in browser textul folosim document.write
// Js face distinctie intre majuscule si minuscule (lastName != lastname)
// Daca folosim const nume (variabila nu se poate modifica)
// Daca folosim le nume (variabila se poate modifica)
// /Variabilele declarate în interiorul unui bloc { } nu pot fi accesate din afara blocului: 
// let și const nu se leagă de this. 
// toString() 	Returnează un număr ca șir 
// Valoarea() 	Returnează un număr ca număr 
// toFixed() 	Returnează un număr scris cu un număr de zecimale 
// Number.parseFloat() 	Convertește un șir într-un număr 
// Number.parseInt() 	Convertește un șir într-un număr întreg 
// Number.isInteger() 	Returnează adevărat dacă argumentul este un număr întreg 
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