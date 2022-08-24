import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { product: [], cart: 0 , selectedProduct : 1 },
  reducers: {
    product(state, action) {
      state.product = action.payload;
    },
    productStock(state, action) {
      state.product = action.payload;
    },
    selectedProduct(state, action){
      state.selectedProduct = action.payload
    }
  },
});

const productAction = productSlice.actions;

export { productSlice, productAction };
