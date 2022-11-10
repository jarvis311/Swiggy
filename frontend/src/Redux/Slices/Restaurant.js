import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  restaurants: [],
  latlng: [],
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
  async (id) => {
    return id;
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.restaurants.push(action.payload);
    });
    builder
      .addCase(fetchLanLng.pending, (state, action) => {
        state.latlng = [];
      })
      .addCase(fetchLanLng.fulfilled, (state, action) => {
        const data = state.restaurants.find(
          (item) => item.id === action.payload
        );
        state.latlng.push({
          latitude: data.restaurant_latitude,
          longitude: data.restaurant_longitude,
        });
      });
  },
});

export const restaurantAction = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
