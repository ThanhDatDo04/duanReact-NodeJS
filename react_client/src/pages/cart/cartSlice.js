import { createSlice } from "@reduxjs/toolkit";
import { handleAddCart } from "./../../services/cart";

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);

      handleAddCart(newItem);
    },
    setQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const product = state.cartItems.find((item) => item._id === _id);
      if (product) {
        product.quantity = quantity;
      }
    },
    removeOneCart(state, action) {
      const idNeedRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x._id !== idNeedRemove);
    },
    tangQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    giamQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          item.quantity = 0;
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addToCart,
  setQuantity,
  removeOneCart,
  tangQuantity,
  giamQuantity,
  clearCart,
} = actions;
export default reducer;
