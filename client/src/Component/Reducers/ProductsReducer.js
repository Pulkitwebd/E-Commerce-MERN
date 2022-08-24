import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [],},
  reducers: {
    products(state, action) {
      state.products = action.payload;
    },
  },
});

const fetchProductsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://course-api.com/react-store-products"
      );

      const data = await response.json();

      return data;
    };

    try {
      const productsData = await fetchData();
      dispatch(productsSlice.actions.products(productsData));
    } catch (error) {
      console.log("fetching Data error :", error);
    }
  };
};

export { productsSlice, fetchProductsData };
