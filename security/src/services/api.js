import { logout } from '../redux/authSlice'; 
import { jwtDecode } from 'jwt-decode';     
import Cookies from 'js-cookie';         
import store from '../redux/store';          
import axios from 'axios';                  

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

//request interceptor to attach token
api.interceptors.request.use((config) => {
    const token = Cookies.get('token'); // //Get token from cookies 

    if(token) {
        const decoded = jwtDecode(token) // Decode the token using jwt_decode
        const now = Date.now / 1000;
        if(decoded.exp < now) {
            store.dispatch(logout());
            window.location.href = "/login";
            return Promise.reject("Token Expired");
        }
         config.headers['Authorization'] = `Bearer ${token}`; //If token is valid, attach it to request headers:
    }
    return config;
}, (error) => {
    return Promise.reject(error);
}
)

//response inteceptor to attach token
api.interceptors.response.use((response) => {
    return response },
    (error) => {
        if(error.response && error.response.status === 401) {
            store.dispatch(logout());
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;