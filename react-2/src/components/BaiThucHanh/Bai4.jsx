import React, { useState } from 'react';

function Bai4(props) {
  const [value, setValue] = useState('');
  const handleOnClick = () => {
    alert(value);
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter anything"
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={() => handleOnClick()}>Send</button>
    </div>
  );
}

export default Bai4;
