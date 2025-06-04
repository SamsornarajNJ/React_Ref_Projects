import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'; 

const token = Cookies.get('token');

const initialState = {
    token: token | null,
    user: token ? jwtDecode(token) : null,
    isAuthenticated: !!token,
}

const authSlice = createSlice({ 
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload;
            state.user = jwtDecode(action.payload);
            state.isAuthenticated = true;
            Cookies.set('token', action.payload, {secure: true});
        },
        logout: (state, action) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            Cookies.remove('token');
        }
    }
})

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;