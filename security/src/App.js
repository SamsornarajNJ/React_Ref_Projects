import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import PrivateRoute from './pages/PrivateRoute';
import Home_Page from './pages/Home_page';
import Counter from './pages/Counter';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/login' element={<LoginPage />} />
  <Route path='/counter' element={<Counter />} />
  <Route path="/" element={
          <PrivateRoute>
            <Home_Page />
          </PrivateRoute>
        } />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
