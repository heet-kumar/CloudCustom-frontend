import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
    name: "service",
    initialState: {
        service: []
    },
    reducers: {
        update: (state, action) => {

        }
    }
});

export const { update } = serviceSlice.actions;
export default serviceSlice.reducer;