
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/loginForm';
import ProtectedRoute from './route/ProtectedRoute';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
            <Route element={<ProtectedRoute/>}>
               <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
