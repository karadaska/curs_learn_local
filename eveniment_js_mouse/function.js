// Mouse enter se declanseaza cand mousul deasuprea divului
// Mouse leave se declanseaza cand mouse-ul iese in exteriorul divului
let inner = document.getElementById('inner');
let outer = document.getElementById('outer');

inner.addEventListener('mouseenter', (e)=>{
    console.log('enter inner');
   
});

outer.addEventListener('mouseenter', (e)=>{
    console.log('enter outer');
});

outer.addEventListener('mouseleave', (e)=>{
    console.log('mouse leave inner')    
});
// TO DO
