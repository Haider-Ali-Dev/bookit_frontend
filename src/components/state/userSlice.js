import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isUserSignedIn: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUserToSignedIn: (state) => {
            state.isUserSignedIn = true;
        },
        changeUserToNotSignedIn: (state) => {
            state.isUserSignedIn = false;
        }
    }
})

export const { changeUserToNotSignedIn, changeUserToSignedIn } = userSlice.actions

export default userSlice.reducer