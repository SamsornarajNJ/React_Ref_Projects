import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import GetUserDetails from './TypeScript/GetUserDetails';

function App() {
  return (
    <div>
      {/* <UserList /> */}
      <GetUserDetails />
    </div>
  );
}

export default App;
