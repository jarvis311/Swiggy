import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  totalItem: 0,
  totalPrice: 0,
};

export const fetchSingleProduct = createAsyncThunk(
  "cart/fetchSingleProduct",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/product/find-product/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(
        "Add to cart",
        state.product.map((item) => console.log(item.name))
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      const newItem = action.payload;
      console.log('newItem>>>', newItem)
      state.product.push({
        id: newItem.id,
        name: newItem.product_name,
        price: newItem.product_price,
        totalPrice: newItem.product_price,
        quantity: 1,
      });

      const productdata = state.product.map(item => item)
      console.log('productdata>>>', productdata)

      const existingItem = state.product.find((item) => item.id === newItem.id);

      console.log('existingItem>>>', existingItem)
      if(existingItem){
        console.log('Yes..')
      }else{
        console.log('No..')
      }
    });
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
