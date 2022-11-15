import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalPrice: 0,
  cartSingleProduct:[],
  showCart: false
};

export const fetchSingleProduct = createAsyncThunk(
  "cart/fetchSingleProduct",
  async (item) => {
    return item;
  }
);

export const removeCartProduct = createAsyncThunk(
  "cart/removeCartItem",
  async (id) => {
    return id;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    showCart : (state, action) => {
      state.showCart = !state.showCart
    }
    
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      let newItem = action.payload;
      let products = state.products;
      if (products.length > 0) {
        products = products.map((item) => {
          if (item.id === newItem.id) {
            console.log('if starting...')
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
        console.log('if inner')
          products = [
            ...products,
            { ...newItem, totalPrice: newItem.product_price, quantity: 1 },
          ];
          console.log('product>>>>>', products)
          console.log('newItem>>>>>', newItem)
        }
        state.products = products;
      } else {
        console.log('else outer')
        state.products = [
          { ...newItem, totalPrice: newItem.product_price, quantity: 1 },
        ];
      }
    }).addCase(fetchSingleProduct.pending, (state, action) => {
      state.products.filter(item => item.id === item.id)
    });

    builder.addCase(removeCartProduct.fulfilled, (state, action) => {
      const id = action.payload;
      const products = [...state.products]
      const array = products.find(item => item.id === id)
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
