import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      totalPrice: {
        type: Number,
        required: true, // Đảm bảo trường này được yêu cầu
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
// Middleware để cập nhật `updatedAt` mỗi khi giỏ hàng được thay đổi
cartSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// // Hàm tính tổng giá trị giỏ hàng
// cartSchema.methods.calculateTotalPrice = function () {
//   return this.products.reduce((total, item) => total + item.totalPrice, 0);
// };

export const Cart = mongoose.model("Cart", cartSchema);
