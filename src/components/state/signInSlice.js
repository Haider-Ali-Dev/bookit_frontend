import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchUserSignIn = createAsyncThunk(
    "user/signin",
    async (userD) => {
        const { email, password } = userD;
        const data = await fetch("https://api.bookit.haider-ali.xyz/signin", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        });

        const user = await data.json();
        return user
    }
)

const userSignInSlice = createSlice({
    name: "userSignIn",
    initialState: {id: 0, name: "", email: ""},
    extraReducers: (builder) => {
        builder.addCase(fetchUserSignIn.fulfilled, (state, action) => {
            state = action.payload;
        })
    }
})

export { fetchUserSignIn };
export default userSignInSlice.reducer;