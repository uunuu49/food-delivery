import express from "express";
import {
  getAllFoodOrders,
  createFoodOrder,
  updateFoodOrder,
  deleteFoodOrder,
  getFoodOrderById,
} from "../controllers/food-order.controller.js";
const foodOrderRouter = express.Router();

foodOrderRouter.get("/", getAllFoodOrders);
foodOrderRouter.post("/", createFoodOrder);
foodOrderRouter.patch("/:foodOrderId", updateFoodOrder);
foodOrderRouter.delete("/:foodOrderId", deleteFoodOrder);
foodOrderRouter.get("/:foodOrderId", getFoodOrderById);

export default foodOrderRouter;
