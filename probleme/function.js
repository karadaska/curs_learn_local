const problema1 = document.querySelector(`#problema1`);
const btn1 = document.querySelector(`#btn1`);
const display_prob = document.querySelector(`.display_prob`);

function nextUpNumber(){
  number = problema1.value;
  if(number !='' && number !=-0){
    number++;
    display_prob.textContent = number;
  }else {
    display_prob.textContent = 'Te rog introdu un numar valid';
  }
}

btn1.addEventListener('click', nextUpNumber);


const problema2 = document.querySelector(`#problema2`);
const btn2 = document.querySelector(`#btn2`);
const display_prob2 = document.querySelector(`.display_prob2`);

function opusNumber(){
  nr = problema2.value;
  if(nr !='' && nr !=-0){
    display_prob2.textContent = nr;
    if(nr > 0){
      nr == -nr
    }
  }else {
    display_prob2.textContent = 'Te rog introdu un numar valid';
  }
}

btn2.addEventListener('click', opusNumber);


