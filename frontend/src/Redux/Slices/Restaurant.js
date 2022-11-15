import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  restaurants: [],
  restaurant:[],
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
export const fetchLanLng = createAsyncThunk(
  "product/fetchLatLng",
  async (data) => {
    return data;
  }
);
export const fetchRestaurant = createAsyncThunk(
  "restaurant/fetchRestaurant",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/restaurant/get-restaurant/${id}`
    );
    return response.data;
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.restaurants.push(action.payload);
    });
    builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
      state.restaurant = action.payload
    })
  },
});

export const restaurantAction = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
