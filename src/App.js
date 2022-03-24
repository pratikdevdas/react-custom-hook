import React, { useState } from 'react';
import './style.css';

const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const zero = () => {
    setValue(0);
  };

  return {
    value,
    increase,
    decrease,
    zero,
  };
};

export default function App() {
  const counter = useCounter();

  return (
    <div>
      <div>{counter.value}</div>
      <button onClick={counter.increase}>+</button>
      <button onClick={counter.zero}>0</button>
      <button onClick={counter.decrease}>-</button>
    </div>
  );
}
