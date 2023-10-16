import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./slice/serviceSlice";

const store = configureStore({
    reducer:{
        service: serviceReducer,
    }
});

export default store;