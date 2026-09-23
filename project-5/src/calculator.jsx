
import "./App.css"
import { useState } from "react";

function Cal() {

  const [display, setDisplay] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOperator] = useState("");

  // Number buttons
  const number = (event) => {
    setDisplay(display + event.target.value);
  };

  // Operator buttons
  const operation = (event) => {
    setFirstNumber(display);
    setOperator(event.target.value);
    setDisplay("");
  };

  // Equal button
  const calculate = () => {

    const num1 = Number(firstNumber);
    const num2 = Number(display);

    let result;

    if (operator === "+") {
      result = num1 + num2;
    }
    else if (operator === "-") {
      result = num1 - num2;
    }
    else if (operator === "*") {
      result = num1 * num2;
    }
    else if (operator === "/") {
      result = num1 / num2;
    }

    setDisplay(String(result));
  };

  // Clear button
  const clear = () => {
    setDisplay("");
    setFirstNumber("");
    setOperator("");
  };

  return (
    <div>

      <h1>React Calculator</h1>

      {/* Display */}
      <input
        type="text"
        value={display}
        readOnly
      />

      <br />
      <br />

      {/* Number buttons */}

      <button value="7" onClick={number}>7</button>
      <button value="8" onClick={number}>8</button>
      <button value="9" onClick={number}>9</button>

      <br />

      <button value="4" onClick={number}>4</button>
      <button value="5" onClick={number}>5</button>
      <button value="6" onClick={number}>6</button>

      <br />

      <button value="1" onClick={number}>1</button>
      <button value="2" onClick={number}>2</button>
      <button value="3" onClick={number}>3</button>

      <br />

      <button value="0" onClick={number}>0</button>

      <br />
      <br />

      {/* Operators */}

      <button value="+" onClick={operation}>+</button>
      <button value="-" onClick={operation}>-</button>
      <button value="*" onClick={operation}>*</button>
      <button value="/" onClick={operation}>/</button>

      <br />
      <br />

      {/* Equal and Clear */}

      <button onClick={calculate}>=</button>
      <button onClick={clear}>C</button>

    </div>
  );
}

export default Cal;

