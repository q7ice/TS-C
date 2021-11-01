import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import SettingsPage from './pages/SettingsPage';
import TestsPage from './pages/TestsPage';
import TestEditPage from './pages/TestEditPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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

  );
}

export default App;
