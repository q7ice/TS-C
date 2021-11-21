import { createContext, useContext, useState } from 'react';

const AlertContext = createContext({
  error: '',
  success: '',
});
export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const showError = (message) => {
    setError('');
    setError(message);
  };
  const showSuccess = (message) => {
    setSuccess('');
    setSuccess(message);
  };
  const AlertValue = {
    error,
    success,
    setError,
    setSuccess,
    showError,
    showSuccess,
  };
  return (
    <AlertContext.Provider value={AlertValue}>
      {children}
    </AlertContext.Provider>
  );
};
