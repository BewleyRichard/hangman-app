import React from "react";

/* This component generates a set of buttons for each letter of the alphabet.
It does this by using the .map() method to iterate through the alphabet string 
and generates a button for each letter in it.
The component accepts props as a parameter which is an object containing the following 
two properties: handleGuess which is a function that is called when a letter is clicked, and 
guessed, a set of letters that have already been selected and should be disabled. 
Disabled, uses a boolean value to determine whether the button should be disabled or not.
Letters that have been guessed by the user are disabled. 
 */
const GuessButtons = (props) => {
  return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
    <button
      key={letter}
      value={letter}
      onClick={props.handleGuess}
      disabled={props.guessed.has(letter)}
    >
      {letter}
    </button>
  ));
};

export default GuessButtons;
