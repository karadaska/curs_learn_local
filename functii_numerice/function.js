let userNumber =prompt('Input a value');
// userNumber = Number(userNumber);
userNumber = +(userNumber);


// functia toFixed() afiseaza numarul cu cate zecimale vreau
var numar = 12.3232313;
var numar2 = 2;
var numar3 = 12;
console.log('Afisare functia toFixed() ' + numar.toFixed(2));

//Math
console.log(Math.abs(3.4));
console.log(Math.abs(3));
console.log(Math.abs(-3));

// ceil returneaza cel mai mic numar intreg care este mai mare decat parametrul dat
console.log("Functia ceil returneaza cel mai mic numar intreg care este mai mare decat parametrul dat: " + Math.ceil(12.34), Math.ceil(14.99));

// ceil returneaza cel mai mare numar intreg care este mai mic decat parametrul dat
console.log("Functia floor returneaza cel mai mic numar intreg care este mai mare decat parametrul dat: " + Math.floor(12.34), Math.floor(14.99));

// exp arata valoare lui e la puterea x
console.log('exp arata valoare lui e la puterea x' + Math.exp(0));
console.log('exp arata valoare lui e la puterea x' + Math.exp(2));

// pow arata valoare unui numar la puterea x
console.log('pow arata valoare unui numar la puterea x:' +Math.pow(numar2, 2));
console.log('pow arata valoare unui numar la puterea x:' +Math.pow(numar2, 3));

// sqrt arata radical dintr-un numar
console.log('sqrt arata radical dintr-un numar:' + Math.sqrt(numar3));

// round rotunjeste numarul 
console.log('round rotunjeste numarul :' + Math.round(numar));

// round rotunjeste numarul in jos 
console.log('round rotunjeste numarul in jos :' + Math.round(numar));

//min, max


console.log('Numarul minim: ' + Math.min(2,3,5));

// random number
var random = Math.random() * 3;
console.log('random number: ' + random);

if(userNumber < 0){
    // userNumber = -1 * userNumber;
}
console.log('numarul este: ' + userNumber);
console.log('Numarul minim: ' + Math.min(2,3,522));
// daca vreau max dintr-un array trebuie sa fie:

let maxim = [132,3,4,5];
numarul_maxim =Math.max(...maxim);
console.log('maximul este: ' + numarul_maxim);
