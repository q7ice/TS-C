import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function RequireAuth({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/sign-in" />;
}

export default RequireAuth;
