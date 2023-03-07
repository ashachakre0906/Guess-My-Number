'use strict';
// console.log(document.querySelector('.message'));
//DOM is documnet object model basically structured representation of the html element allows access JS to access HTML elemnets and syles to manipulate them.
document.querySelector('.message').textContent = "🎉 Correct Number";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
const buttonEl = document.querySelector('.check');
buttonEl.addEventListener('click',function(){
    console.log('button clicked');
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  // document.querySelector('.message').textContent = '🎉 Correct Number';
   /*  console.log(guessValue,typeof guessValue); *///since guessValue is a string we need to convert this into a number so wrap it into the Number function.
  //Implemement the game logic

});