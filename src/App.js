import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(0)}>0</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
