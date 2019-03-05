// Your code goes here

//mouseover
function myFunction() {
    button.style.background = 'red';
  }
  
let button = document.querySelector('.btn');
button.addEventListener("mouseover", myFunction);

// wheel

function myFunction2() {
  p = document.querySelectorAll('p');
  p = Array.from(p);
  p.forEach( function (e) {
    e.style.fontSize = '20px';
  });
}
  
let body = document.querySelector('body');
body.addEventListener("wheel", myFunction2);

