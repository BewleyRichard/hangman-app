import React, { useState } from 'react';

/* This component defines a dropdown menu with a help button.
The state of the menu is managed using the useState hook. The itital state is set to false,
making the drop down collapsed by default. When the user clicks on the help button, 
the toggleMenu function is called, which updates the state of the isOpen variable to true using the setIsOpen function.
If isOpen is true, the contents of the menu are displayed. */

function HelpMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>Help</button>
      {isOpen && (
        <div className="dropdown-menu">
            <p>Guess one letter at a time to reveal the secret word.</p>
            <p>Each incorrect guess adds another part to the hangman.</p>
        </div>
      )}
    </div>
  );
}

export default HelpMenu;