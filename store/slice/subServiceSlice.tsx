import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface newSubService {
    id: number,
    sid: number,
    name: string,
    dsc: string,
    columns: string,
}

const subServiceSlice = createSlice({
    name: "subService",
    initialState: {
        subServices: [
            {
                id: 100,
                sid: 30,
                name: "Virtual Machine",
                dsc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                columns : '["Name","Region","Machine Family","CPUs","Memory","Boot Disk Size","OS","Allow traffic"]'
            },
            {
                id: 101,
                sid: 30,
                name: "Kubernate Engine",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                columns : '["Name","Region","Machine Family","CPUs","Memory","Boot Disk Size","OS","Allow traffic"]'
            },
            {
                id: 103,
                sid: 30,
                name: "Kubernate Engine",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                columns : '["Name"]'
            },
        ],
    },
    reducers: {
        add:(state,action:PayloadAction<newSubService>) => {
            console.log("New Sub Service from Slice : ",action.payload);
            state.subServices = [action.payload,...state.subServices];
        },
        remove:(state,action:PayloadAction<number>) => {
            console.log("Delete id : ",action.payload);
            state.subServices = state.subServices.filter( (p:newSubService) => p.id !== action.payload )
        }
    }
});


export const {add,remove} = subServiceSlice.actions;
export default subServiceSlice.reducer;