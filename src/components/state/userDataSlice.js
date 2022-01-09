import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const initialState = {
    email: "",
    name: "",
    id: 0
};

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name
            state.id = action.payload.id
        }
    }
})


export const { setData } = userDataSlice.actions
export default userDataSlice.reducer