'use strict';
// console.log(document.querySelector('.message'));
//DOM is documnet object model basically structured representation of the html element allows access JS to access HTML elemnets and syles to manipulate them.
// document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.score').textContent = 10;
const buttonEl = document.querySelector('.check');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
buttonEl.addEventListener('click', function () {
  console.log('button clicked');
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // document.querySelector('.message').textContent = '🎉 Correct Number';
  /*  console.log(guessValue,typeof guessValue); */ //since guessValue is a string we need to convert this into a number so wrap it into the Number function.
  //Implemement the game logic
  //Check if there is no input value
    //When there is no input
  if (!guess) {
    console.log('Please enter a guess value'); //0 is falsy value
      document.querySelector('.message').textContent = 'Please enter the number';
    // When guess is equal to the secret value
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    //When guess is too high
  } else if (guess > secretNumber) {
    console.log(guess > secretNumber);
      document.querySelector('.message').textContent = '📈Too high';
    // When guess is too low
  } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉Too low';
  }
});
