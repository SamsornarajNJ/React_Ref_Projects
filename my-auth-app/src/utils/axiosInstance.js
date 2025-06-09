import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseUrl : "https://dummyjson.com/",
})

//Request interceptors
axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

//Response interceptors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401) {
            console.warn("UnAuthorized: Logged out");
            Cookies.remove("token");
        }
        return Promise.reject(error); 
    }
)

export default axiosInstance;