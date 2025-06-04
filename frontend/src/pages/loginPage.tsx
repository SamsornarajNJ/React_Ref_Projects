import React, { useContext, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const loginPage = () => {
    const {login} = useAuth();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default loginPage;