import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

/*
{
   bookmark_url: "",
   bookmark_name: "",
   date: ""
}
*/

const bookmarkListSlice = createSlice({
    name: "bookmarkList",
    initialState,
    reducers: {
        setBookmarkList: (state, action) => {
           state = action.payload
            // state.bookmark_name = action.payload.bookmark_name;
            // state.bookmark_url = action.payload.bookmark_url
            // state.date = action.payload.date;
        }
    }
})


export const { setBookmarkList } = bookmarkListSlice.actions
export default bookmarkListSlice.reducer