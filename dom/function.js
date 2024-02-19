// selectare element obtinem o referinta la valoarea elementului=> document.getElementById()
var textContent =document.getElementById('textContent');
var innerText =document.getElementById('innerText');
var change_html =document.getElementById('change_html');

// Schimbare continutului unui element html cu textContent:
textContent.textContent = 'Am schimbat textul cu function textContent';
// Schimbare continutului unui element html cu innerText:
innerText.innerText = 'Am schimbat textul cu function innerText';

// Schimbare continutului unui text ce contine o bucata din html cu functia innerHtml:
change_html.innerHTML = '<span style="color:Red;">Am schimbat o bugata ce title cu innerHtml</span>';

// // document.querySelector face selectia la un singur element html
console.log(document.querySelector('#querySelector'));
console.log(document.querySelector('.btn'));

// Aici face selectie la primul Li si ii da culoare
document.querySelector('li').style.color = 'green';

// Selectie la mai multe elemente
let items = document.getElementsByClassName('sameclass');

const array1 = ['a', 'b', 'c'];
// array1.forEach((element) => console.log(element));
array1.forEach(item => console.log(item));

// Asa functia forEach nu este valida si trebuie convertita functia
// items.forEach(item => console.log(item));

// Functia foreach convertita
Array.from(items).forEach(item=>console.log(item));


