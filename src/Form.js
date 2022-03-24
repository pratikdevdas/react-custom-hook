import React, { useState } from 'react';
import './style.css';
//check the previous commit to see the app without custom hooks

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export default function Form() {
  const name = useField('text');
  const [born, setBorn] = useState('');
  const [height, setHeight] = useState('');

  return (
    <div>
      <form>
        name:
        <input type={name.type} value={name.value} onChange={name.onChange} />
        <br />
        birthdate:
        <input
          type="date"
          value={born}
          onChange={(event) => setBorn(event.target.value)}
        />
        <br />
        height:
        <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
        <div>
          result: {name.value} {born} {height}
        </div>
      </form>
    </div>
  );
}
