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

//keydown

body.addEventListener('keydown', function(event){
 console.log(`A key was pressed down! This is the event: ${event.key}`); 
});

//load

const loadMessage = document.createElement('p');
loadMessage.textContent = 'The Website loaded. Yay!';
window.addEventListener('load', function(e) {
  body.prepend(loadMessage);
});

//focus

let form = document.querySelector('form input');
form.addEventListener("focus", myFocusFunction, true);

function myFocusFunction() {
  form.style.backgroundColor = "yellow"; 
}

//resize

window.addEventListener("resize", function () {
  body.style.backgroundColor = 'red';
});

//scroll

let imgs = document.querySelector('img');
window.addEventListener("scroll", function(){
  imgs.style.display = 'none';
});

