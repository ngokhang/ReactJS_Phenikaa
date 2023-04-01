import React from 'react';
import { useState } from 'react';
import { ComponentBai3 } from './ComponentBai3';

function Bai3(props) {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <p>Age: {age}</p>
      <button onClick={() => increaseAge()}>Increase age</button>
      <ComponentBai3
        age={age}
        displayName={name}
      />
    </div>
  );
}

export default Bai3;
