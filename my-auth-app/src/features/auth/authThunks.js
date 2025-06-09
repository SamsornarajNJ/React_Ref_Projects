import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance"

//Login
export const loginUser = createAsyncThunk(
    "auth/loginUser", 
    async({email, password}, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post("auth/login", {email, password});
            return response.data;
        }
        catch(error){
            return rejectWithValue(error.response?.data.message || "Login error")
        }
    }
);

// Register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data.message || "Registration error");
    }
  }
);