import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
import { productApi } from "../services/productApi";

const combinedReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  cart: cartReducer,
  products: productsReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export function makeStore() {
  return configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });
}

const store = makeStore();

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);

export default store;
