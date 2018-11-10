"use strict";
var wordBank = ["bulma", "fatbuu", "freeza", "futuretrunks", "gohan", "goku", "goten", "kidbuu", "kidgohan", "kidtrunks", "kingkai", "roshi", "pan", "perfectcell", "raditz", "supersaiyan", "tien", "vegeta", "videl", "yamcha"];
var wordChoice;
var lettersGuessed;
var numberOfGuesses = 15;
var userGuess;

resetGame();

function resetGame() {
    wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(wordChoice);
    lettersGuessed = [];
    gameDisplay();
    numberOfGuesses = 15;
    document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
};
function gameDisplay() {
    var wordDisplay = "";
    var isInWord = true;

    for (var i = 0; i < wordChoice.length; i++) {
        var correctLetter = wordChoice[i];
        if (lettersGuessed.includes(correctLetter)) {
            wordDisplay = wordDisplay + correctLetter;
            isInWord = false;
        }
        else {
            wordDisplay = wordDisplay + "-";
            isInWord = true;
        };
        // something breaks when user guesses a letter that appears more than once in the word
    };
    if (isInWord) {
        numberOfGuesses--;

    };
    if (wordDisplay.includes("-") == false) {
        alert("You won! You know too much about anime, congrats!");
        resetGame();
    }
    if (lettersGuessed.length > 15) {
        alert("You didn't guess the word. I guess you're not a weeb after all! The word was: " + wordChoice);
        resetGame();
    }

    document.getElementById("currentword").innerHTML = wordDisplay;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
    document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
};
document.onkeyup = function (userInput) {

    userGuess = userInput.key;
    lettersGuessed.push(userGuess);
    gameDisplay();
};

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