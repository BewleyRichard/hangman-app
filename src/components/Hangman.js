import React, { useState } from "react";
import { randomWord } from "./Words";
import GuessButtons from "./GuessButtons";
import HelpMenu from "./HelpMenu";

// The following define step variables, each with a step property and an image path. 
let step0 = { step: 0, imagePath: "/images/state1.GIF" };
let step1 = { step: 1, imagePath: "/images/state2.GIF" };
let step2 = { step: 2, imagePath: "/images/state3.GIF" };
let step3 = { step: 3, imagePath: "/images/state4.GIF" };
let step4 = { step: 4, imagePath: "/images/state5.GIF" };
let step5 = { step: 5, imagePath: "/images/state6.GIF" };
let step6 = { step: 6, imagePath: "/images/state7.GIF" };
let step7 = { step: 7, imagePath: "/images/state8.GIF" };
let step8 = { step: 8, imagePath: "/images/state9.GIF" };
let step9 = { step: 9, imagePath: "/images/state10.GIF" };
let step10 = { step: 10, imagePath: "/images/state11.GIF" };

  
/* The hangman component uses useState to create the following state variables. */
const Hangman = (props) => {
  const [state, setState] = useState({
    // Keeps track of the number of incorrect guesses. 
    mistake: 0,
    // A set of letters that have already been guessed. 
    guessed: new Set([]),
    // The random word chosen from the word array. 
    answer: randomWord(),
  });
  /* This function handles the letter button clicks and updates the state accordingly */
  const handleGuess = (e) => {
    let letter = e.target.value;
    setState((state) => ({
      // The letter value of the clicked button is retrieved and added to the guessed set.
      guessed: state.guessed.add(letter),
      // If the answer includes the letter the mistake count remains the same, otherwise mistake is incremented.
      mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1),
      answer: state.answer,
    }));
  };
  // This function generates the current status of the guessed word with '_' for unguessed letters.
  const guessedWord = () => {
    return state.answer
      .split("")
      .map((letter) =>
        state.guessed.has(letter) ? letter : " _ "
      );
  };
  // This function resets the state variables to their initial values when the reset button is clicked.
  const resetButton = () => {
    setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    });
  };

  // gameOver is assigned true when the mistake count is greater than or equal to maxWrong.
  const gameOver = state.mistake >= props.maxWrong;
  // isWinner is assigned true when the player has guessed all the letters in the answer.
  const isWinner = guessedWord().join("") === state.answer;
  let gameStat = <GuessButtons handleGuess={handleGuess} guessed={state.guessed} />;
  
  // The following informs the user if they have won or lost.
  if (isWinner) {
    gameStat = "You Won";
  }

  if (gameOver) {
    gameStat = "You Lost";
  }
  // The following rendors the games interface. 
  return (
    <div className="hangmanContainer">
      <h1>Hangman Game</h1>
      <p>Wrong Guesses: {state.mistake} of {props.maxWrong}</p>
      <img src={props.images[state.mistake].imagePath}/>
      <p>Guess the word:</p>
      <p>{!gameOver ? guessedWord() : state.answer}</p>
      <p>{gameStat}</p>
      <button onClick={resetButton} className="button">Reset Game</button>
      <HelpMenu/>
    </div>
  );
};
// Default props are set for max wrong and images.
Hangman.defaultProps = {
  maxWrong: 10,
  images: [step0, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10],
};

export default Hangman;