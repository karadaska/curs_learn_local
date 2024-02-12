
let parinte = document.createElement('div');
let p = document.createElement('p');
p.textContent = 'primul element';
parinte.appendChild(p);

for(let i=0; i<10;i++){
    let di=document.createElement('div');
    di.textContent = `element ${i+1}`
    parinte.appendChild(di);
}

document.body.prepend(parinte);

// ca sa stergem un Element se foloseste remove
let deSters = parinte.children[4].remove();

// removeChild se aplica pe parintele copilului care vrei sa stergi si accepta ca parametru referinta a elementului
let sters = parinte.removeChild(parinte.children[[4]]);
console.log(sters);
