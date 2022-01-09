import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   route: "signin"
};

const routeSlice = createSlice({
    name: "route",
    initialState,
    reducers: {
        changeRoute: (state, action) => {
            state.route = action.payload
        }
    }
})


export const { changeRoute } = routeSlice.actions
export default routeSlice.reducer