var wordBank = ["bulma", "fatbuu", "freeza", "futuretrunks", "gohan", "goku", "goten", "kidbuu", "kidgohan", "kidtrunks", "kingkai", "roshi", "pan", "perfectcell", "raditz", "supersaiyan", "tien", "vegeta", "videl", "yamcha"];
resetGame();
var wordChoice;

var lettersGuessed;

function resetGame() {
    wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersGuessed = [];
    gameDisplay();
}

function gameDisplay() {
    var wordDisplay = "";

    for (var i = 0; i < wordChoice.length; i++) {
        var correctLetter = wordChoice[i];
        if (lettersGuessed.includes(correctLetter)) {
            wordDisplay = wordDisplay + correctLetter;
        }
        else {
            wordDisplay = wordDisplay + "-";
        }

    }
    console.log(wordDisplay);

    document.getElementById("currentword").innerHTML = wordDisplay;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
    
}


document.onkeyup = function (userInput) {

    var userGuess = userInput.key;
    // GET THIS LINE EXPLAINED ^^^
    lettersGuessed.push(userGuess);
    gameDisplay();
   

    if (lettersGuessed.length > 15) {
        resetGame();
    }
}


// var filler = [];
// console.log(filler);

// for (var i = 0; i < wordChoice.length; i++) {
//     filler.push("-");
// }

// document.getElementById("currentword").innerHTML = filler;



//     if (wordChoice.includes(userGuess)) {
//         filler.splice(userGuess, 1, userGuess);
//         console.log("itworks!");
//         document.getElementById("currentword").innerHTML = filler;
//     }
//     else {
//         console.log("you suck");
//     }

// }

// 1. computer picks a word(wordChoice from wordbank)
// 2. computer finds how many letters are in the word, and displays '-' for each letter
    // a. make an array that will be appended to with the number of '-' = to the # of letters
    // b. USE RETURN IN A FUNCTION TO REPLACE THE DASHES!!!
// 3. computer waits for user to guess a letter (userGuess)
// 4. when a key is pressed, compare the key pressed to the word that was picked.(userGuess + wordChoice)
// 5. if/else statement for whether userGuess pressed is present in wordChoice
// 6. if userGuess is present, replace the '--' in that position for the letter guessed.
// 7. else userGuess is wrong, -1 from numberOfGuesses.
// 8. either way, put the letter into the lettersGuessed group.
// 9. wait for next userInput
