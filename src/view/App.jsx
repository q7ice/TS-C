import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';
import ForgotPassword from './pages/Auth/ForgotPassword';
import SignUp from './pages/Auth/SignUp';
import SettingsPage from './pages/Private/SettingsPage';
import TestsPage from './pages/Private/TestsPage';
import TestEditPage from './pages/Private/TestEditPage';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import RequireUnAuth from './components/LinkTypes/RequireUnAuth';
import RequireAuth from './components/LinkTypes/RequireAuth';
import Home from './pages/Public/Home';
import TakeTestPage from './pages/Private/TakeTestPage';
import ViewResultsPage from './pages/Private/ViewResultsPage';
import AdminSignUp from './pages/Auth/AdminSignUp';
import RequireAdmin from './components/LinkTypes/RequireAdmin';
import BlockUser from './pages/admin/BlockUser';

function App() {
  return (
    <AuthProvider>
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </AuthProvider>
  );
}

export default App;
