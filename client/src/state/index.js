import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload; // function to set items
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    }, // function to add item to cart

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id); // function to remove item from cart
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      }); // function to increase count
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      }); // function to decrease count
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    }, // function to toggle cart open
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  decreaseCount,
  increaseCount,
  setIsCartOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
