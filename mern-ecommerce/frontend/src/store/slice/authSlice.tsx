import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Interface for array type of user
interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: string;
}
//interface for states
interface AuthStateInterface {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}
//initialstate
const initialState: AuthStateInterface = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

//Async thunk for logic
export const loginUser = createAsyncThunk<
  { user: User; token: string }, // Return type
  { email: string; password: string }, //argument type
  { rejectValue: string } // Rejection type
>(
  "auth/loginUser", // Name of the action
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

//Async thunk for Register
export const register = createAsyncThunk<
  { user: User; token: string }, //return type
  { name: string; email: string; password: string }, //Argument type
  { rejectValue: string } // Error type
>(
  "auth/register", //Name of action
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.error = null; //Clear previous error
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload || "login failed";
      state.loading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload || "Register failed";
    });
  },
});
export const { } = authSlice.actions;
export default authSlice.reducer;
