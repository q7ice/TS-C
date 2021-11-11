import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import SettingsPage from './pages/SettingsPage';
import TestsPage from './pages/TestsPage';
import TestEditPage from './pages/TestEditPage';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import RequireUnAuth from './components/RequireUnAuth';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import TakeTestPage from './pages/TakeTestPage';
import ViewResultsPage from './pages/ViewResultsPage';

function App() {
  return (
    <AuthProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<RequireUnAuth><SignIn /></RequireUnAuth>} />
            <Route path="/sign-up" element={<RequireUnAuth><SignUp /></RequireUnAuth>} />
            <Route path="/forgot-password" element={<RequireUnAuth><ForgotPassword /></RequireUnAuth>} />
            <Route path="/settings" element={<RequireAuth><SettingsPage /></RequireAuth>} />
            <Route path="/tests" element={<RequireAuth><TestsPage /></RequireAuth>} />
            <Route path="/test-edit">
              <Route path=":id" element={<RequireAuth><TestEditPage /></RequireAuth>} />
            </Route>
            <Route path="/take-test">
              <Route path=":id" element={<RequireAuth><TakeTestPage /></RequireAuth>} />
            </Route>
            <Route path="/view-results">
              <Route path=":id" element={<RequireAuth><ViewResultsPage /></RequireAuth>} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </AuthProvider>
  );
}

export default App;
