import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const subServiceSlice = createSlice({
    name: "subService",
    initialState: {
        subService: [
            {
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
            }
        ],
    },
    reducers: {
        
    }
});



export default subServiceSlice.reducer;