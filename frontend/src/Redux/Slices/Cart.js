import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    cart: {
        product:{},
        quantity: 0,
        totalPrice: 0
    }
}
export const fetchSingleProduct = createAsyncThunk('cart/fetchSingleProduct', async(id) => {
    const response = await axios.get(`http://localhost:5000/product/get-product/:${id}`)
    return response.data
})

const cartSlice = createSlice({
  name:'cart',
  initialState: initialState,
  reducers: {
    
    addToCart : (state, action) => {

    }
  }
})


export const cartAction = cartSlice.actions;
export const cartReducer =  cartSlice.reducer