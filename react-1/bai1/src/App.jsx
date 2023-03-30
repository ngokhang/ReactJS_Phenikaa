import React, { useState } from 'react';

function App(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
      {show && <h1>Hello World</h1>}
    </div>
  );
}

export default App;
