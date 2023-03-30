import React, { useState } from 'react';

function App(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      fullName: 'Nguyen Van A',
    },
    {
      id: 2,
      fullName: 'Nguyen Van B',
    },
    {
      id: 3,
      fullName: 'Nguyen Van C',
    },
  ]);
  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>{item.fullName}</li>
      ))}
    </div>
  );
}

export default App;
