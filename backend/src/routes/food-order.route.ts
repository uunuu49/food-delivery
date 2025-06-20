import express from "express";
import {
  getAllFoodOrders,
  createFoodOrder,
  updateFoodOrder,
  deleteFoodOrder,
  getFoodOrderById,
} from "../controllers/food-order.controller.js";
const foodRouter = express.Router();

foodRouter.get("/", getAllFoodOrders);
foodRouter.post("/", createFoodOrder);
foodRouter.patch("/:foodOrderId", updateFoodOrder);
foodRouter.delete("/:foodOrderId", deleteFoodOrder);
foodRouter.get("/:foodOrderId", getFoodOrderById);

export default foodRouter;
