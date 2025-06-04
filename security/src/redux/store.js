import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import countSlice from "./counter";

const store = configureStore({
    reducer: {
        auth: authSlice,
        count: countSlice,
    }
})

export default store;