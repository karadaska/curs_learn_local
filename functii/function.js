function suma(x){
    return x + 5;
}

let res=suma(3);

console.log(res);

let x = 3;
function test(a){
    a = a+3;
    console.log(`in functie: ${a}`)
}
test(x);

console.log('In afara functie: ' + x);


let b = [1,2,3];

function mumu(a){
    a.push(888);
    console.log(`in functie: ${a}`)
}
mumu(b);

console.log('In afara functie: ' + b);
// debugger trebuie sa vad cum e