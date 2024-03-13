* document.getElementById("demo").innerHTML scrie intr-un html continutul dorit
* document.getElementById("demo").write scrie in iesirea HTML
* Math.random afiseaza valori intre 0 si 1
* Valoare absoluta math.abs returneaza valoare pozitiva (-7) returneaza 7
* Daca vrem sa inlocuim un element dintr-o lista se face cu replaceWith
* Daca vrei sa stergem un element dintr-o lista se face cu txt.removeChild(parinte.children[4])
* Mai este si insertBefore si before(inainte de un element) si after (dupa un element)
* Daca vrem sa inlocuim un element dintr-o lista se face cu replaceWith
* appendChild auda elementele ca copil a unui div
* Putem adauga un element la sfarsit de lista cu text.append(variabila cu html).
* Puteam adauga la inceput un element dintr-un div cu text.preppend(element)
* Style la valoare: variabila.style.display = “none”;
* Style font size: varianbila.style.fontSize = “35px”;
* Schimbat textul printr-o functie: Cu innerHtml setam continutul in element html
* Pentru modul de testare si afisare putem face cu document.write.
* Document.write(19+3); Afiseaza In pagina rezultatul.
* Puteam scoate toate elementele html care contin clasa =”clasa_demo”: document.getElementsByClassName(‘class_demo’)	
* Puteam scoate toate butoanele din html: document.getElementsByTagName(‘button’);	
* inlocuirea unui element se face cu replateWith() sau cu replaceChild()
* cod asincron sunt bucati de cod care se executa la bucati de timp
* setinterval se executa codul dupa un anumit timp
* daca vreau sa fac un eveniment pe un buton => buton.addEventListener ('click', onclick) [btn2.addEventListener ('click', (e) => console.log('am dat click pe buton'));]

	<p id="demo">Un paragraf</p>
<button type="button" onclick="myFunction()">Try it</button>
	<script type="text/javascript">
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
</script>

* schimbam continutul unui div
<script type="text/javascript">
    var txt = document.getElementById('container');
    txt.textContent = 'text schimbat';
    txt.innerText = 'text schimbat';
    // sau puntem schimba continutul divului cu o bucata de html
    txt.innerHTML = `<p>paragraf</p>`
</script>

*	console.log(document.querySelector('#text')); putem selecta un element pe baza id-ului
*	console.log(document.querySelector('.text')); putem selecta un element pe baza id-ului

* Daca vreau sa adaug copil la un element html
<script type="text/javascript">
    // daca vreau sa adaug copil la un element div
     var d1 =document.createElement('div');
         d1.innerHTML = `<h1>titlu</h1> <p>paragraf</p> <button>Click aici</button>`</
         d1.classList.add('clasa_adaugata');
         txt.appendChild(d1);
</script>

* removeChild se aplica pe parintele copilului care vrei sa stergi si trimtie o referinta a elementului
let sters = parinte.removeChild(parinte.children[[4]]);
console.log(sters);

