import { placeDineInOrder } from "../controllers/order.controller.js";
import Order from "../models/order.model.js"; // ✅ Required
import express from "express";
import  authUser  from "../middlewares/authUser.js";
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  placeOrderStripe,
  updateOrderStatus, // ✅ ADD THIS
} from "../controllers/order.controller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();
router.post("/cod", authUser, placeOrderCOD);
router.get("/user", authUser, getUserOrders);
router.get("/seller", authSeller, getAllOrders);
router.post("/stripe", authUser, placeOrderStripe);
// ✅ ADD THIS:
router.patch("/status/:orderId", authSeller, updateOrderStatus);
router.post("/dinein", authUser, placeDineInOrder);


export default router;

