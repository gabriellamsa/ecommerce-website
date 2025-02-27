import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name || newItem.title || "Unnamed Product",
          cover: newItem.cover,
        });
      }
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      state.itemList = state.itemList.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.itemList.reduce((acc, item) => acc + item.quantity, 0);
    },

    clearCart(state) {
      state.itemList = []
      state.totalQuantity = 0
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.itemList.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
      }
      state.totalQuantity = state.itemList.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
});

export const CartActions = cartSlice.actions;
export const { clearCart } = cartSlice.actions;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) =>
  state.cart.itemList.reduce((acc, item) => acc + item.price * item.quantity, 0);
export default cartSlice.reducer;