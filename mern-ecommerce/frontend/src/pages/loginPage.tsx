import React, { use, useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { loginUser } from "../store/slice/authSlice";

const LoginPage = () => {
  //const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await login(email, password);
      await dispatch(loginUser({ email, password }));
      setError({}); // Clear error if login is successful
    } catch (err: any) {
      //setError(err.message || "Invalid credentials", ); // Set error message
      const errorResponse = JSON.parse(err.message); // Convert error string back to object
      setError({ [errorResponse.field]: errorResponse.message });
    }
  };

  useEffect(() => {
    alert(auth.isAuthenticated);
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth.isAuthenticated]);
  return (
    <div className="loginScreen">
      <form onSubmit={handleLogin} className="loginForm">
        <h1>Login</h1>
        {error.email}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        {error.password}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
