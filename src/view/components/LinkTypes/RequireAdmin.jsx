import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function RequireAdmin({ children }) {
  const { role } = useAuth();
  return String(role) === 'admin' ? children : <Navigate to="/sign-in" />;
}

export default RequireAdmin;
