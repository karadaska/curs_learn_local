// Bucla for la un sir

const nume = "W3Schools";

for (const x of nume) {
  console.log(nume + "");
}

const letters = ["a", "b", "c"];

for (const x of letters) {
  console.log(letters + "");
}

// Vizibilitate variabile

{
  let variabila_1 = "let variabila_1 poate fi accesata doar din interior";
  console.log("Variabila 1 din interiorul functiei " + variabila_1);
}

console.log("Variabila 1 din exteriorul functiei este undefined");

{
  var variabila_2 = "let variabila_2 poate fi accesata doar din interior";
}

console.log(variabila_2);

myFunction();

function myFunction() {
  carName = "Volvo";
}

console.log(carName); //putem apela o variabila globala daca

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
  const obj = JSON.parse(text); 

  console.log(text);
  console.log(obj);

  let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.firstName);
console.log(person["firstName"]);


const person2 = {
    name: "George",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person2); 
  console.log(myString);