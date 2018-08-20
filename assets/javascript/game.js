// start with choosing a theme: FRUITS 
    // apples, bannanas, kiwis, pinapples, mangos
var rockBands=["queen","AC/DC", "nirvana", "metallica", "journey", "muse", "coldplay", "incubus"];

// var x = document.getElementById("myAudio"); 
// x.play()


// start with a variable of 0 for win
var win= 0;

// start with a variable of 0 for losses
var loss=0;

// start with 6 guess (move down)
var guessesRemaining=6;

// create a var for stage.
var stage=" ";
var text= " ";


// createa a var for "guess correctly"
    // guess correctly will be a boolean false

var guessCorrectly= false;

// create a generator where the words will appear
document.querySelector("#stage").innerHTML=stage;



// for loop for fruits and an array for underscores
var random = rockBands[Math.floor(Math.random() * rockBands.length)]
var underscores = [];
console.log(random)

// replaces the underscore array with "_"
for (var i=0; i<random.length; i++){
    
    if (random[i]!==" "){
        underscores[i] = "_"
    }
    
    console.log(underscores)
}


document.querySelector("#stage").innerHTML=underscores;


// create inner HTML for win/losses/guesses
document.querySelector("#win").innerHTML=(win);
// make them split up
// document.querySelector("#losses").innerHTML="loss: " +loss;
// make them split up
// document.querySelector("#guesses").innerHTML= (guessesRemaining);

// create a function for onkeyup and a var for function
    document.onkeyup = function(event) {
        var userkey = event.key;
        var userGuess= userkey.toLowerCase()
        var guessesArray= [];
        guessesArray.push(userGuess)
        // document.querySelector("#stage").innerHTML=underscores;
        for (var i=0; i< random.length; i++) {

            if (guessesArray.includes(random[i])){
                console.log("this works");
                underscores[i]=random[i];
                console.log(underscores);
                guessCorrectly=true;
            }
            else { 
                console.log("wrong");
            }
          



        }
      
        var selection=underscores.toString().replace(/,/g," ");
        document.querySelector("#stage").innerHTML=selection;
        console.log("here", typeof selection);
} ;

//create partial words to replace the underscore with the correct letter from userGuess

   

   
   
    // MAIN PROCESS

    // calling a function to press the .onkeyup to start the game.

    // when the user presses a correct letter, it will appear on the screen where the "_" are..

    // if the user presses a wrong letter, it will show at the bottom of the guess word and alert they are wrong.

    // once the user runs out of 6 lives, it's game over. 

    // if they guess correctly, they win the game. 

    // BONUS: add an evil laugh if they loose or cheers if they win. 
