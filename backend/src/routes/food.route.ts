import express from "express";
import {
  getAllFood,
  getFoodById,
  updateFood,
  deleteFood,
  createFood,
} from "../controllers/food.controller.js";

const foodRouter = express.Router();

foodRouter.get("/", getAllFood);
foodRouter.post("/", createFood);
foodRouter.patch("/:foodId", updateFood);
foodRouter.delete("/:foodId", deleteFood);
foodRouter.get("/:foodId", getFoodById);

export default foodRouter;
