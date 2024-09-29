import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import setLocalStorageItem from "./setLocalStorageItem";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => setLocalStorageItem("cart", store.getState().cart.cart));

export default store;
