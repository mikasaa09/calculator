import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line
const result = eval(input.replace(',', '.'));
setInput(result.toLocaleString('es-ES'));
    } catch {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="logo">CALCULATOR</h1>
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {'123+456-789*0./'.split('').map((char) => (
            <button key={char} onClick={() => handleClick(char)}>{char}</button>
          ))}
          <button onClick={calculate}>=</button>
          <button onClick={clear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;