import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name : "user",
    initialState:{
        isSignedin : false,
        userDate : null,
        searchInput : "tech",
        blogData: null,
    },
    reducers: {
        setSignedIn : (state, action) => {
            state.isSignedin = action.payload;
        },
        setUserDate: (state, action) => {
            state.userDate = action.payload;
        },
        setBlogData : (state, action) => {
            state.blogData = action.payload;
        },
        setSearchInput : (state, action) => {
            state.searchInput = action.payload;
        }
    },
});

export const {
    setSignedIn, 
    setUserDate,
    setBlogData,
    setSearchInput
} = userSlice.actions;

export const selectSignedIn = (state) =>  state.user.isSignedin;
export const selectUserData = (state) =>  state.user.userDate;
export const selectBlogData = (state) =>  state.user.blogData;
export const selectUserInput = (state) =>  state.user.searchInput;

export default userSlice.reducer;