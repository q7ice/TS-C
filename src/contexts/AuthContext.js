import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { validateUser } from '../api/auth';

const initialState = {
  id: null,
  role: null,
};

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const {
    id,
    role,
    setId,
    setRole,
  } = useContext(AuthContext);

  const isAuth = !!role;

  return {
    isAuth,
    role,
    id,
    setId,
    setRole,
  };
};

export const AuthProvider = ({ children }) => {
  const startId = localStorage.getItem('userId') ?? null;
  const startRole = localStorage.getItem('userRole') ?? null;
  const [id, setId] = useState(startId === String(null) ? null : startId);
  const [role, setRole] = useState(startRole === String(null) ? null : startRole);
  useEffect(() => {
    async function run() {
      const data = await validateUser();
      setId(data.id);
      setRole(data.role);
      localStorage.setItem('userId', data.id);
      localStorage.setItem('userRole', data.role);
    }
    run().catch();
  }, []);

  const AuthValue = {
    setRole,
    setId,
    role,
    id,
  };
  return (
    <AuthContext.Provider value={AuthValue}>
      {children}
    </AuthContext.Provider>
  );
};
