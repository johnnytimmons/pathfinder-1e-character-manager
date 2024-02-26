// DiceRoller.js
import React, { useState } from "react";

const DiceRoller = ({ modifier, utilityType }) => {
  const [result, setResult] = useState(0);

  const rollDice = () => {
    const d20Result = Math.floor(Math.random() * 20) + 1;
    const totalResult = d20Result + modifier;
    setResult(totalResult);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll {utilityType}</button>
      <p>
        {utilityType} Result: {result}{" "}
      </p>
    </div>
  );
};

export default DiceRoller;
