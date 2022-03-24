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
  const born = useField('date');
  const height = useField('number');

  return (
    <div>
      <form>
        name:
        <input {...name} />
        <br />
        birthdate:
        <input {...born} />
        <br />
        height:
        <input {...height} />
        <div>
          result: {name.value} {born.value} {height.value}
        </div>
      </form>
    </div>
  );
}
