import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../store/Context';

function Protectedroute({ children }) {
  const context = useContext(Context);
  if (!context.isLogin) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default Protectedroute;
