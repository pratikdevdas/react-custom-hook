import React, { useState } from 'react';
import './style.css';
//check the next commit to see the app with custom hooks

export default function Form() {
  const [name, setName] = useState();
  const [born, setBorn] = useState();
  const [height, setHeight] = useState();

  return (
    <div>
      <form>
        name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        {name} {born} {height}
      </form>
    </div>
  );
}
