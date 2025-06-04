import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LoginPage from './pages/loginPage';
import { Dashboard } from './pages/Dashboard';
import ProtetctedRoute from './route/ProtetctedRoute';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtetctedRoute />} >
           <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;
