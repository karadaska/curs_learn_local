let data = new Date();
console.log('data afisata: ' + data);


// 2023, luna ianuarie , ziua 15
let data2 = new Date(2023, 0, 15);
let data4 = new Date("2023-1-01 15:24:25");
var data5 = new Date("2020-11-12 15:24:25");

// timestamp de acum
console.log(Date.now());

// Convertire string to date
console.log('Convertire din string in date: ' + Date.parse(data));
console.log('Extragere time from a string date: ' + Date.parse(data4));
console.log('Extragere an from a string date: ' + data5.getFullYear());
console.log('Extragere day from a string date: ' + data5.getDay());
console.log('Extragere month from a string date: ' + data5.getMonth());

// Daca vrem sa setam o data se face cu functia set
 data5.setDate(28);
console.log(data5);

// Daca vrei sa vezi doar ora se face cu toLocaleTimeString()

console.log('Daca vrei sa vezi doar data se face cu toLocaleDateString()' + data5.toLocaleDateString());
console.log('Daca vrei sa vezi doar ceasul se face cu toLocaleTimeString()' + data5.toLocaleTimeString());


// Scaderea din 2 date

let dif_date = data4-data5;
console.log('diferenta ani:' + dif_date/(1000*60*60*24*365));