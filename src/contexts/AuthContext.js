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
  const [id, setId] = useState(null);
  const [role, setRole] = useState(null);
  useEffect(() => {
    async function run() {
      const data = await validateUser();
      setId(data.id);
      setRole(data.role);
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
