import React from 'react';
import { Outlet } from 'react-router-dom';

function App(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
