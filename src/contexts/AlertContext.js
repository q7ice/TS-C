import {
  createContext, useContext, useState,
} from 'react';

const initialState = { error: '', success: '' };
const AlertContext = createContext(initialState);

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const AlertValue = {
    error,
    success,
    setError,
    setSuccess,
  };

  return (
    <AlertContext.Provider value={AlertValue}>
      {children}
    </AlertContext.Provider>
  );
};
