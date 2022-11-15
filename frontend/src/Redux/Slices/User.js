import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    LatLng : []
}
const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userLatLng: (state, action) => {
            state.LatLng = action.payload
        }
    }
})

export const userAction = UserSlice.actions;
export const userReducer = UserSlice.reducer