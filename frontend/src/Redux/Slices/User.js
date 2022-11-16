import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAddress : []
}
const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userAddress: (state, action) => {
            state.userAddress = action.payload
        }
    }
})

export const userAction = UserSlice.actions;
export const userReducer = UserSlice.reducer;