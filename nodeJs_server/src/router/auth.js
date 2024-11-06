import express from "express";
import { signin, singup } from "../controller/auth";
const router = express.Router();

router.post("/register", singup);
router.post("/login", signin);

export default router;
