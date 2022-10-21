import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import locationReducer from "./locationSlice";

const store = configureStore({
    reducer: {
        authReducer,
        locationReducer
    }
})


export default store