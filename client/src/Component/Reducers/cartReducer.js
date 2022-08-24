import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart"))
      : [],

    totalItem: window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart")).length
      : 0,
  },
  reducers: {
    cartProduct(state, action) {
      if (state.item.length === 0) {
        state.item = [...state.item, action.payload];
      } else {
        const isFound = state.item.find((product) => {
          return product.id === action.payload.id;
        });

        if (isFound) {
          isFound.amount += action.payload.amount;
        }

        if (isFound === undefined) {
          state.item = [...state.item, action.payload];
        }
      }
    },

    totalItem(state, action) {
      state.totalItem = state.totalItem + action.payload;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
