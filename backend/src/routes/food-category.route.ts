import express from "express";
import {
  getAllFoodCategory,
  getFoodCategoryById,
  updateFoodCategory,
  deleteFoodCategory,
  createFoodCategory,
} from "../controllers/food-category.controller.js";

const foodRouter = express.Router();

foodRouter.get("/", getAllFoodCategory);
foodRouter.post("/", createFoodCategory);
foodRouter.patch("/:foodCategoryId", updateFoodCategory);
foodRouter.delete("/:foodCategoryId", deleteFoodCategory);
foodRouter.get("/:foodCategoryId", getFoodCategoryById);

export default foodRouter;
