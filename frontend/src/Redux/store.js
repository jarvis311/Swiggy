import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Slices/Cart";
import { productReducer } from "./Slices/ProductSlice";
import { restaurantReducer } from "./Slices/Restaurant";
import { userReducer } from "./Slices/User";

export const store = configureStore({
    reducer: {
        product: productReducer,
        restaurant: restaurantReducer,
        cart: cartReducer,
        user: userReducer
    }
});

