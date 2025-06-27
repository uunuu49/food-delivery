import express from "express";
import {
  getAllFoodCategory,
  getFoodCategoryById,
  updateFoodCategory,
  deleteFoodCategory,
  createFoodCategory,
} from "../controllers/food-category.controller.js";

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getAllFoodCategory);
foodCategoryRouter.post("/", createFoodCategory);
foodCategoryRouter.patch("/:foodCategoryId", updateFoodCategory);
foodCategoryRouter.delete("/:foodCategoryId", deleteFoodCategory);
foodCategoryRouter.get("/:foodCategoryId", getFoodCategoryById);

export default foodCategoryRouter;
