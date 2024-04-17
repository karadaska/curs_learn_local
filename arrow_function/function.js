function sum (a, b){
    return a + b;
}

console.log(sum(1, 2));

let printName = name => {
    console.log(name);
}

console.log(printName('teste'));

// Functioneaza asa pentru ca returneaza rezultatul pe un singur rand
let sumArrow = (a, b) => a + b;

// Arrow function trebuie afisate dupa initializare pt ca se stocheaza intr-o variabila si o sa fie undefined


let m = "12";
console.log(parseInt(m));