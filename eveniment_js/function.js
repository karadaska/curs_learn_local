
let btn = document.getElementById('btn_Apasa');
let btn2 = document.getElementById('btn_Apasa2');

// Daca nu pui si paranteze rotunde nu apelezi functia ca sa-ti returneze valoarea din ea
let cnt = 0;

function onApasaClick(e){
cnt++;
    e.target.textContent = `Apasa ${cnt}`;
}

btn.onclick = onApasaClick;

let cnt2 = 0;
function onApasaClick2(e){
    cnt2++;
        e.target.textContent = `Apasa ${cnt2}`;
    }
    btn2.addEventListener('click', onApasaClick2);

btn2.addEventListener ('click', function(e){
alert('am mai pus un event pe addEventListener')
});

btn2.addEventListener ('click', (e) => console.log('am dat click pe buton'));
    

// inregistram functia ca handle

// Ca sa stergem un handler pentru un eveniment putem seta null pe onclick sau folosim functia removeEventListener
btn2.removeEventListener('click', onApasaClick2);


