import "./App.css";

import React from "react";
import Die from "./Die";

export default function App() {
  /* const [dice, setDice] = React.useState(allNewDice());
   1.Set state.*/
  /* function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }
   2.Create function that returns a new array of random numbers 
   and set default State to it.*/
  /*const diceElements = dice.map((die) => <Die value={die} />);
  3.Map the array you created and create a Dice element with 
   with inner value of the corespondent map value.*/
  /*return (
    <main>
      <div className="dice-container">{diceElements}</div>
      
    </main>
  );
   4.Return The Dice Elements.*/

  const [dice, setDice] = React.useState(allNewDice());
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  let diceElements = dice.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}
/* 
   1.Set state.
   2.Create function that returns a new array of random numbers 
   and set default State to it.
   3.Map the array you created and create a Dice element with 
   with inner value of the corespondent map value
   4.Return The Dice Elements.
*/
