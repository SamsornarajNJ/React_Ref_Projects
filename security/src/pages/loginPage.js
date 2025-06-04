import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import { loginSuccess } from "../redux/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      //FakeToken adding exp in token manually
      const fakeToken =
        res.data.token +
        "." +
        btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 60 })); // expires in 60 sec
      dispatch(loginSuccess(fakeToken));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Login Form</h2>
      <form>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default LoginPage;
