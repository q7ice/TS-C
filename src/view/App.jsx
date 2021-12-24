import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import SignUp from './pages/auth/SignUp';
import SettingsPage from './pages/private/SettingsPage';
import TestsPage from './pages/private/TestsPage';
import TestEditPage from './pages/private/TestEditPage';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import RequireUnAuth from './components/accesses/RequireUnAuth';
import RequireAuth from './components/accesses/RequireAuth';
import Home from './pages/public/Home';
import TakeTestPage from './pages/private/TakeTestPage';
import ViewResultsPage from './pages/private/ViewResultsPage';
import AdminSignUp from './pages/auth/AdminSignUp';
import RequireAdmin from './components/accesses/RequireAdmin';
import BlockUser from './pages/admin/BlockUser';
import { AlertProvider } from '../contexts/AlertContext';

function App() {
  return (
    <AuthProvider>
      <ThemeContextProvider>
        <AlertProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/admin-sign-up" element={<RequireUnAuth><AdminSignUp /></RequireUnAuth>} />
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
              <Route path="/admin-panel" element={<RequireAdmin><BlockUser /></RequireAdmin>} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </AlertProvider>
      </ThemeContextProvider>
    </AuthProvider>
  );
}

export default App;
