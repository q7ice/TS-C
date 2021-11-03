import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import SettingsPage from './pages/SettingsPage';
import TestsPage from './pages/TestsPage';
import TestEditPage from './pages/TestEditPage';
import ThemeContext from '../ThemeContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Router>
          <Switch>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/tests">
              <TestsPage />
            </Route>
            <Route path="/test-edit">
              <TestEditPage />
            </Route>
            <Route path="/">
              <SettingsPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
