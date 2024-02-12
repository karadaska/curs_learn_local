let numere = [1,2,3, 'test', false];
let numar2 = [1,2,3,4,5,6,7];

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


// numere.slice trebuie vazut
// To DO

// for in javascript
for(let i=0 ; i < numere.length; i++){
    console.log(numere[i]);
}