import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function RequireUnAuth({ children }) {
  const { isAuth } = useAuth();
  return !isAuth ? children : <Navigate to="/tests" />;
}

export default RequireUnAuth;
