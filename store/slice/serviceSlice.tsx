import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface serviceData {
    id: number,
    name: string,
    desc: string
}

export const serviceSlice = createSlice({
    name: "service",
    initialState: {
        user_services: [
            {
                "id": 6,
                "name": "Compute Services",
                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {  
                "id": 5,
                "name": "Networking",
                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "id": 4,
                "name": "Storage Service",
                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "id": 3,
                "name": "Big Data",
                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "id": 2,
                "name": "Security and Identity Managment",
                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "id": 1,
                "name": "Operation Tools",
                "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ],
        service_count: 6
    },
    reducers: {
        add: (state, action:PayloadAction<serviceData>) => {
            console.log("From Redux Store : ",action.payload);
            state.service_count += 1;
            state.user_services.push({id:state.service_count,...action.payload});
        }
    }
});

export const { add } = serviceSlice.actions;
export default serviceSlice.reducer;