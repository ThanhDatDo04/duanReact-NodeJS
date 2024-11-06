import express from "express";
import {
  getAllCart,
  createCart,
  deleteCart,
  updateCart,
} from "../controller/cart";

const router = express.Router();

router.get("/cart", getAllCart);
router.post("/cart", createCart);
router.delete("/cart", deleteCart);
router.put("/cart", updateCart);
export default router;
