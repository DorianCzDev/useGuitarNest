import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import getLocalStorageItem from "./getLocalStorageItem";

const initialState = {
  cart: getLocalStorageItem("cart") || [],
  cartAfterFetch: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      let isAlreadyInCart = false;
      state.cart.map((item) => {
        if (item === action.payload) {
          isAlreadyInCart = true;
          toast.dismiss();
          toast.error("This product is already in your cart.");
        }
      });
      if (!isAlreadyInCart) {
        state.cart.push(action.payload);
        toast.dismiss();
        toast.success("Product added to your cart.");
      }
    },
    deleteItem(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter(
        (product) => product !== parseInt(action.payload)
      );
      state.cartAfterFetch = state.cartAfterFetch.filter(
        (product) => product !== parseInt(action.payload)
      );
      console.log(state.cart);
    },
    increaseItemQuantity(state, action) {
      state.cartAfterFetch = state.cartAfterFetch.map((product) => {
        if (product.id === action.payload) {
          product.quantity += 1;
        }
        return product;
      });
    },

    decreaseItemQuantity(state, action) {
      state.cartAfterFetch = state.cartAfterFetch.map((product) => {
        if (product.id === action.payload) {
          product.quantity > 1 ? (product.quantity -= 1) : product.quantity;
        }
        return product;
      });
    },
    setCartAfterFetch(state, action) {
      state.cartAfterFetch = action.payload;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  setCartAfterFetch,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartPrice = (state) => {
  return state.cart.cartAfterFetch.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
};
