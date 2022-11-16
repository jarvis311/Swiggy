import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalPrice: 0,
  cartSingleProduct: [],
  showCart: false,
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
    showCart: (state, action) => {
      state.showCart = !state.showCart;
    },
    cartEmptyAfterOdering: (state, action) => {
      state.products = []
    }
  },
  

  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
        let newItem = { ...payload };
        let products = state.products;

        if (products.length > 0) {
          products = products.map((item) => {
            if (item.id === payload.id) {
              const temp = {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + payload.product_price,
              };

              newItem = null;

              return temp;
            }

            return item;
          });

          if (newItem !== null) {
            products = [
              ...products,
              { ...payload, totalPrice: payload.product_price, quantity: 1 },
            ];
          }

          state.products = products;
        } else {
          console.log("else outer");
          state.products = [
            { ...payload, totalPrice: payload.product_price, quantity: 1 },
          ];
        }
      })
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.products.filter((item) => item.id === item.id);
      });

    builder.addCase(removeCartProduct.fulfilled, (state, action) => {
      const id = action.payload;
      const products = [...state.products];
      const array = products.find((item) => item.id === id);
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          existingItem.totalPrice - existingItem.product_price;
      }
    });
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
