// start with choosing a theme: FRUITS 
    // apples, bannanas, kiwis, pinapples, mangos
    var fruits=["apples", "bannanas", "kiwis", "pineapples","mangos"];

// start with a variable of 0 for win
var win= 0;

// start with a variable of 0 for losses
var loss=0;

// start with 6 guess (move down)
var guessesRemaining=6;


// create a generator where the words will appear
document.querySelector("#stage").innerHTML=" "

document.querySelector("#guess-counter").innerHTML=stage;
var random = fruits[Math.floor(Math.random() * fruits.length)]

console.log(random)

var stage = " "
function generator (str){
  for (char in str){
    stage = stage + " _ "
  }
  console.log(stage)
}
    // have it link with the wordlist=fruits
        // create a function that will render the random words from FRUITS

// connect win with #win from HTML
    // create a function to count the wins

// connect loss with #loss from HTML
    // create a function to count the loss


    // MAIN PROCESS

    // calling a function to press the .onkeyup to start the game.

    // when the user presses a correct letter, it will appear on the screen where the "_" are..

    // if the user presses a wrong letter, it will show at the bottom of the guess word and alert they are wrong.

    // once the user runs out of 6 lives, it's game over. 

    // if they guess correctly, they win the game. 
