import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalItem: 0,
  totalPrice: 0,
};

export const fetchSingleProduct = createAsyncThunk(
  "cart/fetchSingleProduct",
  async (item) => {
    console.log("response.data", item);
    return item;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    removeCartItem: (state, action) => {
      let newItem = action.payload
      const existingItem = state.products.find(item => item.id === newItem?.id)
      console.log("first>>", existingItem)
    }},

  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      let newItem = action.payload;
      let products = state.products;
      if (products.length > 0) {
        products = products.map((item) => {
          if (item.id === newItem.id) {
            const temp = {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + newItem.product_price,
            };
            newItem = null;
            return temp;
          }
          return item;
        });
        if (newItem !== null) {
          products = [
            ...products,
            { ...newItem, totalPrice: newItem.product_price, quantity: 1 },
          ];
        }
        state.products = products;
      } else {
        state.products = [
          { ...newItem, totalPrice: newItem.product_price, quantity: 1 },
        ];
      }
    });
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
