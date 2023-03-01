import Hangman from './components/Hangman';

/* The main entry point for the application. 
See Hangman.js for complete rendoring of the app and index.css for styling. */

function App() {
  return (
    <div className="App">
      <Hangman/>
    </div>
  );
}

export default App;

/* References: For this task I utilised the Hyperion Dev handouts "React Hooks", "Function Components"
"Class Components and Props" and "Introduction to React.js" to aid me in this task.
I used the following websites: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random,
https://www.geeksforgeeks.org/reactjs-defaultprops/
to further understand the Math.random method and defaultprops. */ 