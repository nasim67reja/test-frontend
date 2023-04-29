import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./allProducts";
import { productApi } from "services/productApi";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    Products: allProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
export default store;
