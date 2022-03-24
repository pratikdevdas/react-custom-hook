import React from 'react';
import './style.css';
import Form from './Form';
import Counter from './Counter';

export default function App() {
  return (
    <div>
      <h3>Counter App with cutom hooks</h3>
      <Counter />
      <h3>Form with custom hooks</h3>
      <Form />
    </div>
  );
}
