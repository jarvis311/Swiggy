import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
  restaurants: [],
};

export const fetchAllData = createAsyncThunk(
  "restaurant/fetchAllRestaurant",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/restaurant/get-restaurants"
    );
    return response.data;
  }
);
const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
        state.restaurants.push(action.payload)
    })
  },
});

export const restaurantAction = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
