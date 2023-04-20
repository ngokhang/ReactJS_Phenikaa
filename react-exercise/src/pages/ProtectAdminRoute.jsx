import React from 'react';
import { Context } from '../store/Context';
import { Navigate } from 'react-router-dom';

function ProtectAdminRoute({ children }) {
  const roleUser = localStorage.getItem('role');
  if (roleUser === 'user') {
    return <Navigate to="/homepage" />;
  }
  return children;
}

export default ProtectAdminRoute;
