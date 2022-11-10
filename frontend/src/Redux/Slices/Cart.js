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

export const removeCartProduct = createAsyncThunk(
  "cart/removeCartItem",
  async (id) => {
    console.log("response.id", id);
    return id;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

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

    builder.addCase(removeCartProduct.fulfilled, (state, action) => {
      const id = action.payload;
      const products = [...state.products]
      const array = products.find(item => item.id === id)
      console.log('array>>>>', array)
      console.log('id>>>>',id)
      console.log('product>>>.',products)
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== id);
        } else {
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.product_price
      }
    })
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
