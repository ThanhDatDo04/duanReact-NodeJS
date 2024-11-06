import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "../pages/cart/cartSlice";

const rootReduce = {
  cart: cartReduce,
};

const store = configureStore({
  reducer: rootReduce,
});
export default store;
