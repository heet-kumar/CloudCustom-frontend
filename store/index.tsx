import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./slice/serviceSlice";
import subServiceReducer from "./slice/subServiceSlice";

const store = configureStore({
    reducer:{
        service: serviceReducer,
        subService: subServiceReducer
    }
});

export default store;