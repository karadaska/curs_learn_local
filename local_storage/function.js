// Etapele propagarii evenimentelor
// 1. capturing
// 2.target
// 3.bubling

// e.eventPhase -faza de generare a evenimentului

// Are 3 valori posibile
/*
1. capuring
2. target
2.bubbling

In dom daca dai click pe un pe div-ul cel mai inauntru celelalte div-uri sunt notificate
Daca avem container, div1, div2, div3 si dau click pe div-ul 3 primul care este noficat este document, container, div1, div2, div3: aici este faza de capturing
dupa ce ajunge la div-ul 3 urmeaza faza de target (adica ajungem la elementul care a generat evenimentul)
Dupa etapa cu target mergem in faza de bubling si evenimentul merge in ordine inversa si fiecare element mai sus de div-ul 3 este notificat ca s-a dat click pe div-ul rosu
*/

let items = document.getElementsByTagName("div");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", onClick, true);
//   addEventListener are 3 parametri: 1 este click care reprezinta evenimentul, 2 => onClick este functia care apeleaza clicul, 
// 3: ce fel de propagare se face (capturing, bubling)
// daca nu are al 3-lea parametru se face propagare cu bubling
// daca vrem sa fie in faza de capturing putem seta al 3-lea parametru cu true,
}

// Oprirea propagarii se face cu functia stop propagation

// e este o referinta la eveminimentul generat => cel care genereaza evenimentul
function onClick(e) {
  let txt = "";
  if (e.eventPhase == 1) {
    txt = "capturing";
  } else if (e.eventPhase == 2) {
    txt = "target";
  } else if (e.eventPhase == 3) {
    txt = "bubling";
  }
  console.log(`div ${this.id} - ${txt}`);

}
