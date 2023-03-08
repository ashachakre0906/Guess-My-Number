"use strict";
// console.log(document.querySelector('.message'));
//DOM is documnet object model basically structured representation of the html element allows access JS to access HTML elemnets and syles to manipulate them.
// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector(".score").textContent = 20;
const buttonEl = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// document.querySelector(".highscore").textContent = highscore;
// console.log(secretNumber);
buttonEl.addEventListener("click", function () {
  console.log("button clicked");
  function guessMyNumber() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    /*  console.log(guessValue,typeof guessValue); */ //since guessValue is a string we need to convert this into a number so wrap it into the Number function.
    //Implemement the game logic
    //Check if there is no input value
    //When there is no input
    if (!guess) {
      /* console.log("Please enter a guess value"); */ //0 is falsy value
      displayMessage('Please enter the number');
      /* document.querySelector(".message").textContent =
        "Please enter the number"; */
      // When the player wins
    } else if (guess === secretNumber) {
      // document.querySelector(".message").textContent = "🎉 Correct Number";
      displayMessage("🎉 Correct Number");
      document.querySelector(".number").textContent = secretNumber;
      document.body.style.backgroundColor = "green";
      document.querySelector(".number").style.backgroundColor = "30rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      //When guess is diffrent than the secret number
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          guess > secretNumber ? "📈 Too high" : "📉 Too low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        // document.querySelector(".message").textContent = "💥You lost the game";
        displayMessage("💥You lost the game");
        document.body.style.backgroundColor = "red";
        document.querySelector(".score").textContent = 0;
      }
    }
    /* else if (guess > secretNumber) {
       if (score > 1) {
         document.querySelector(".message").textContent = "📈 Too high";
         score--;
         document.querySelector(".score").textContent = score;
       } else {
         document.querySelector(".message").textContent = "💥You lost the game";
         document.querySelector(".score").textContent = 0;
       }
       // When guess is too low
     } else if (guess < secretNumber) {
       if (score > 1) {
         document.querySelector(".message").textContent = "📉 Too low";
         score--;
         document.querySelector(".score").textContent = score;
       } else {
         document.querySelector(".message").textContent =
           "💥 You lost the game";
         document.querySelector(".score").textContent = 0;
       }
     } */
  }
  guessMyNumber();
});
//Implementing rest of the game functionality so that player can make a new guess:

//Adding event listener to the again button
const againBtn = document.querySelector(".again");
againBtn.addEventListener("click", function () {
  //Anonymous handler function doesnt have any name
  console.log("again button clicked");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing ....";
  displayMessage("Start guessing ....");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#555";
  document.querySelector(".number").style.backgroundColor = "15rem";
});
