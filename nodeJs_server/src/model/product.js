import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Đảm bảo đây là chuỗi để lưu URL hoặc đường dẫn ảnh
    default: "",
  },
});

export const Product = mongoose.model("Product", productSchema);
