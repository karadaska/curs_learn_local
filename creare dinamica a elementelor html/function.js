
let div =document.createElement('div');

div.innerHTML = `<ul>
<li>primul li</li>
<li>Al 2-lea li</li>
</ul>`;

// putem adauga o clasa
div.classList.add('clasa_adaugata')
// putem adauga un atribut
div.setAttribute("id", "test_atribute")

let add_container = document.getElementById('container');

// Aici adaug intr-un div alt continut cu functia appendChild si o sa fie la sf adaugat
add_container.appendChild(div);
// functia appendChild adauga elementul la DOM

var new_div = document.createElement('div');
new_div.textContent = 'Am pus un text aici in div'
div.appendChild(new_div);

// Putem adauga un element la inceputul listei cu functia prepand

var first_element = document.createElement('p');
first_element.textContent = 'Am adaugat un element la inceputul div-ului';
div.prepend(first_element);

// functia insertBefore adauga un element inaintea altui element
let toInsert = document.createElement('span');
toInsert.textContent = 'Element adaugat inaintea altui element ales';
div.insertBefore(toInsert, first_element);

// mai este si functia before si after

console.log(div);


