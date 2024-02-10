import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      const result = eval(input);
      setInput(result.toString());
    } else if (buttonValue === 'AC') {
      setInput('');
    } else if (buttonValue === 'DEL') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + buttonValue);
    }
  };

  return (
    <div className="calculator">
      <h6 className="owner">AMIT KUMAR YADAV</h6>
      <input type="text" placeholder="0" value={input} readOnly />
      <div>
        <button className="op" onClick={handleClick}>
          AC
        </button>
        <button className="op" onClick={handleClick}>
          DEL
        </button>
        <button className="op" onClick={handleClick}>
          %
        </button>
        <button className="op" onClick={handleClick}>
          /
        </button>
      </div>
      <div>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button className="op" onClick={handleClick}>
          *
        </button>
      </div>
      <div>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button className="op" onClick={handleClick}>
          -
        </button>
      </div>
      <div>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button className="op" onClick={handleClick}>
          +
        </button>
      </div>
      <div>
        <button onClick={handleClick}>00</button>
        <button onClick={handleClick}>0</button>
        <button className="op" onClick={handleClick}>
          .
        </button>
        <button className="equal8tn" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;