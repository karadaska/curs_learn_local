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


