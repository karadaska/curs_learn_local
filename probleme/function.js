const problema3 = document.querySelector(`#problema3`);
const btn3 = document.querySelector(`#btn3`);
const display_prob3 = document.querySelector(`.display_prob3`);

function howIsTheNumber() {
  nr = problema3.value;
  if (nr != "") {
    if (nr > 0) {
      display_prob3.textContent = 'Numarul este positiv';
    } else if (nr < 0) {
      display_prob3.textContent = 'Numarul este neagtiv';
    } else if (nr == 0) {
      display_prob3.textContent = 'Numarul este null';
    }
  } else {
    display_prob3.textContent = "Te rog introdu un numar valid";
  }
}

btn3.addEventListener("click", howIsTheNumber);

const problema1 = document.querySelector(`#problema1`);
const btn1 = document.querySelector(`#btn1`);
const display_prob = document.querySelector(`.display_prob`);

function nextUpNumber() {
  number = problema1.value;
  if (number != "" && number != -0) {
    number++;
    display_prob.textContent = number;
  } else {
    display_prob.textContent = "Te rog introdu un numar valid";
  }
}

btn1.addEventListener("click", nextUpNumber);

const problema2 = document.querySelector(`#problema2`);
const btn2 = document.querySelector(`#btn2`);
const display_prob2 = document.querySelector(`.display_prob2`);

function opusNumber() {
  nr = problema2.value;
  if (nr != "") {
    if (nr > 0) {
      display_prob2.textContent = -nr;
    } else if (nr < 0) {
      display_prob2.textContent = -nr;
    } else if (nr == 0) {
      display_prob2.textContent = 0;
    }
  } else {
    display_prob2.textContent = "Te rog introdu un numar valid";
  }
}

btn2.addEventListener("click", opusNumber);


