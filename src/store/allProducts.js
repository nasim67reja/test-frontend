import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  allProducts: null,
};
const productsSlice = createSlice({
  name: "All Product",
  initialState: initialProductState,
  reducers: {
    storeProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});
export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
