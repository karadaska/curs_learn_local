function returneazaNumerePanala20 (){
    let numere = '';
    for (let i = 1; i <= 20; i++) {
        numere = numere + i + ';';
    }
    console.log('Numerele de la 1 to 20: ' + numere);

}

function returneazaNumereParePanaLa20 (){
    let numere_impare = '';
    for (let i = 1; i <= 20; i++) {
        if(i%2 != 0){
         numere_impare = i + ';';
        console.log('Numerele de la 1 la 20: ' + numere_impare);
        }
    }
}

let homework1 = returneazaNumerePanala20();
let homework2 = returneazaNumereParePanaLa20();
