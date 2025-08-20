import React, { useState } from "react";
import "../css/dice.css";


function Dice() {
  const [diceOne, setDiceOne] = useState("/images/dice6.png");
  const [diceTwo, setDiceTwo] = useState("/images/dice6.png");
  const [head, setHead] = useState("Fun Dice Game – Built with React 🎲");

  function handleClick() {
    const randomNumberOne = Math.floor(Math.random() * 6) + 1;
    const randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    const randomImage1 = `/images/dice${randomNumberOne}.png`;
    const randomImage2 = `/images/dice${randomNumberTwo}.png`;

    setDiceOne(randomImage1);
    setDiceTwo(randomImage2);

    if (randomNumberOne > randomNumberTwo) {
      setHead("The winner is Player 1");
    } else if (randomNumberOne < randomNumberTwo) {
      setHead("The winner is Player 2");
    } else {
      setHead("The game is a draw");
    }
  }

  return (
    <div id="project" className="container mt-5">
      <p className="text-center mb-4">My projects</p>
      <p className="dice-head">{head}</p>
      <div className="dice-container">
        <div className="dice">
          <p>Player 1</p>
          <img className="img1" src={diceOne} alt="Dice 1" />
        </div>

        <div className="dice">
          <p>Player 2</p>
          <img className="img2" src={diceTwo} alt="Dice 2" />
        </div>
      </div>
      <div className="button-container2">
  <button className="icon-link2" onClick={handleClick}>
    Refresh Me
  </button>
</div>

    </div>
  );
}

export default Dice;
