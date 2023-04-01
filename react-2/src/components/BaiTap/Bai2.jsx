import React, { useState } from 'react';

function Bai2(props) {
  const [value, setValue] = useState('');
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="inputName"
          placeholder="Enter anything"
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div>
        <p>Grettting {value} </p>
      </div>
    </div>
  );
}

export default Bai2;
