let demo = document.getElementById('demo');
let demo2 = document.getElementById('demo2');
let demo3 = document.getElementById('demo3');

const a = [1, 2, 3, 4, 5];

a.forEach(elem =>{
    console.log(elem);
})

a.forEach((number, index) => {
    console.log(number + ' ' + index);
})


const fructe = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fructe.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fructe[i] + "</li>";
}
text += "</ul>";

demo.innerHTML = text;


const fructe2 = ["Banana", "Orange", "Apple", "Mango"];

let text2 = "<ul>";
fructe2.forEach(myFunction);
text2 += "</ul>";

function myFunction(value) {
  text2 += "<li>" + value + "</li>";
}

demo2.innerHTML = text2;


const numbers = [45, 4, 9, 16, 25];
let txt3 = "";
numbers.forEach(myNumere);

function myNumere(value, index, array) {
    txt3 += value + ' ' +  index +  ' ' + array + "<br>";
}

demo3.innerHTML = txt3;

// Functia map

const array_map = [1, 2, 3, 4];
const variabila_map = array_map.map(testMap);

function testMap(number){
    return number * 2;
}

console.log(variabila_map);

// array filter

const array_filter = [45, 4, 9, 16, 25];
console.log(array_filter.filter(myFunctionOver));

function myFunctionOver(value) {
    return value > 18;
  } 





