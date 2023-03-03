'use strict';
console.log(document.querySelector('.message'));
//DOM is documnet object model basically structured representation of the html element allows access JS to access HTML elemnets and syles to manipulate them.
document.querySelector('.message').textContent = "🎉 Correct Number";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
const guessValue = document.querySelector('.guess')
const buttonEl = document.querySelector('.check');
buttonEl.addEventListener('click',function(){
    console.log('button clicked');
console.log(guessValue.value);
});