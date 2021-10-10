import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';
import ForgotPassword from './pages/Auth/ForgotPassword';
import SignUp from './pages/Auth/SignUp';
import SettingsPage from './pages/SettingsPage';
import TestsPage from './pages/TestsPage';

function App() {
  return (
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
        <Route path="/">
          <SettingsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
