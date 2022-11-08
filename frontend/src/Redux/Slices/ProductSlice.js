import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    products: [],
    cartProduct: []
}
export const fetchAllData = createAsyncThunk(
    'product/fetchAllData',
    async (restaurantId) => {
      const response = await axios.get(`http://localhost:5000/product/get-product/${restaurantId}`)
      return response.data
    }
  )

 export const fetchSingleProduct = createAsyncThunk('product/fetchSingleData', async(id) => {
    const response = await axios.get(`http://localhost:5000/product/get-product/${id}`)
    return response.data
 }) 
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addtoCart: (state, action) =>  {
            
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllData.pending, (state, action) => {
            state.products = []
        })
        .addCase(fetchAllData.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
    }
})


export const productAction = productSlice.actions
export const productReducer = productSlice.reducer

