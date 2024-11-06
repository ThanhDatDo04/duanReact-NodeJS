import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
} from "../controller/product";

const router = express.Router();

router.get("/products", getAllProduct);
router.get("/products/:id", getOneProduct);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

export default router;
