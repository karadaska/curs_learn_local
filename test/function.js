let max;
let userNumber;
let verify_number;

do {
  userNumber = prompt("add number");
  
    if((typeof userNumber) !=='object'){
        verify_number = Number(userNumber);
    }else {
        verify_number = 'object';
    }

  if (typeof max === "undefined") {
    max = verify_number;
  }

  if (userNumber != null && max < verify_number) {
    max = verify_number;
  }

} while (verify_number !=='object');

console.log("numarul maxim este: " + max);
