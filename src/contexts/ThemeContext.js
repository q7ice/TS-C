import { createContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
