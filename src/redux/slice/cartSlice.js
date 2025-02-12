import { createSelector, createSlice } from "@reduxjs/toolkit";

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
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          cover: newItem.cover,
        });
        state.totalQuantity++;
      }

      console.log("Added to Cart:", state.itemList);
    },
  },
});

export const CartActions = cartSlice.actions;

export const selectTotalQuantity = createSelector(
  (state) => state.cart?.itemList || [],
  (itemList) => itemList.reduce((acc, item) => acc + item.quantity, 0)
);
export const selectTotalPrice = createSelector(
  (state) => state.cart.itemList,
  (itemList) => itemList.reduce((acc, item) => acc + item.totalPrice, 0)
);
export default cartSlice.reducer;