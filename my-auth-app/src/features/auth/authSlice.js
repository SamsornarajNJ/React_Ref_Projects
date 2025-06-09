import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { loginUser, registerUser } from "./authThunks";

const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
const token = Cookies.get("token") || null;

const initialState = {
  user: userData,
  role: userData?.role || null,
  token: token,
  isAuthenticated: !!token,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove("token");
      Cookies.remove("user");
      return {
        ...initialState,
        isAuthenticated: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      //Login
      .addCase(loginUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        Cookies.set("user", JSON.stringify(action.payload.user));
        Cookies.set("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })

      //Register
       .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        Cookies.set("user", JSON.stringify(action.payload.user));
        Cookies.set("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed.";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;