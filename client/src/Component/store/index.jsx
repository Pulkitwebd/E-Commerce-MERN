import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../Reducers/ProductsReducer";
import { productSlice } from "../Reducers/ProductReducer";
import FiltersSlice from "../Reducers/FiltersReducers";
import cartSlice from "../Reducers/cartReducer";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    filters: FiltersSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
