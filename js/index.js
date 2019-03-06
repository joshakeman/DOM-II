// Your code goes here

//mouseover
// function myFunction(eventObject) {
//     button.style.background = 'red';
//     eventObject.stopPropagation();
//   }
  
let button = document.querySelector('.btn');
button.addEventListener("mouseover", function (eventObject) {
  button.style.background = 'red';
  //This stopPropagation is not working for some reason.
  eventObject.stopPropagation();
});

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

//drag
imgs.addEventListener("drag", function(){
  imgs.style.width = '50%';
});

// let p = document.querySelector('p');
// p.addEventListener("drop", function(){
//   button.style.width = '100%';
// });

//select

let p = document.querySelector('p');
p.addEventListener("select", function(){
  // p.style.color = 'blue';
  console.log('you selected a thing');
});

//dblclick

button.addEventListener("dblclick", function(eventObject) {
  button.style.width = '125%';
  eventObject.stopPropagation();

});

//nested stuff

let destination = document.querySelector('.destination');
destination.addEventListener("dblclick", function(){
  destination.style.background = 'green';
});

function myFunction3(eventObject) {
  home.style.background = 'red';
  eventObject.stopPropagation();
}

let home = document.querySelector('.home');
button.addEventListener("mouseover", myFunction3);

//prevent default

let link = document.querySelector('a');
link.addEventListener('click', function(e) {
  e.preventDefault();
});

// let cannon = document.getItemsByClassName('.cannon-pic');
// let cannonBall = document.querySelector('.cannonball-pic');
// cannon.addEventListener('click', function(){
//   // cannonBall.style.display = 'block';
//   TweenMax.to(cannonBall, 0.5, {x: 100, ease: Bounce.easeOut});
// });

let cannonButton = document.querySelector('.cannon-btn');
let cannonBall = document.querySelector('.cannonball-pic');
cannonButton.addEventListener('click', function(){
  cannonBall.style.display = 'block';
  TweenMax.to(cannonBall, 0.5, {x: 2500, ease: Bounce.easeOut});
});