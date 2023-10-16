import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
    name: "service",
    initialState: {
        user_services: [
            {
                "id": 6,
                "name": "Compute Services",
                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
        ]
    },
    reducers: {
        update: (state, action) => {

        }
    }
});

export const { update } = serviceSlice.actions;
export default serviceSlice.reducer;