import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
import productReducer from "../ProductSlice";

const store = configureStore ({
    reducer : {
        user: userReducer,
        product: productReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;