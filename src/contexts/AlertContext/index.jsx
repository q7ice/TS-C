import { createContext, useContext } from 'react';
import { useAlertContext } from './useAlertContext';

const Index = createContext({
  error: '',
  success: '',
});

export

const AlertProvider = function ({ children }) {
  const { AlertValue } = useAlertContext();
  return (
    <Index.Provider value={AlertValue}>
      {children}
    </Index.Provider>
  );
};

export default AlertProvider;
