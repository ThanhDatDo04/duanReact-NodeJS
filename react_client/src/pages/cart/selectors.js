import { createSelector } from "@reduxjs/toolkit";

// Selector để lấy cartItems từ state Redux
export const selectCartItems = (state) => state.cart.cartItems;

// Selector để đếm tổng số lượng sản phẩm trong giỏ hàng
export const cartItemsCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0) // Output selector
);

// Selector để tính tổng giá trị giỏ hàng
export const cartTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((total, item) => {
    if (item && item.product && item.product.price) {
      return total + item.quantity * item.product.price;
    }

    return total;
  }, 0)
);
