let cana = {
    culoare : "rosu",
    volum : 200,
    unitate : "ml",
    greutate : 100
};

console.log(cana);
console.log(cana.culoare);

let input = prompt('Adauga ce varsta ai');
if(isNaN(input)){
    console.log('Ai introdus un string');
}else{
    console.log('Ai introdus un numar');
};



