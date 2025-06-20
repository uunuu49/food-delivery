import { Request, Response } from "express";
import { FoodCategory } from "../models/food-category.model.js";

export const getAllFoodCategory = async (
  request: Request,
  response: Response
) => {
  try {
    const foodCategory = await FoodCategory.find();

    response.json({
      success: true,
      data: foodCategory,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getFoodCategoryById = async (
  request: Request,
  response: Response
) => {
  try {
    const { foodCategoryId } = request.params;
    const foodCategory = await FoodCategory.findById(foodCategoryId);
    response.json({
      success: true,
      data: foodCategory,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const createFoodCategory = async (
  request: Request,
  response: Response
) => {
  try {
    const foodCategory = request.body;
    const createFoodCategory = await FoodCategory.create(foodCategory);
    response.json({
      success: true,
      data: createFoodCategory,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const updateFoodCategory = async (
  request: Request,
  response: Response
) => {
  try {
    const { foodCategoryId } = request.params;
    const updateFoodCategory = request.body;

    const foodCategory = await FoodCategory.findByIdAndUpdate(
      foodCategoryId,
      updateFoodCategory,
      { new: true }
    );

    response.json({
      success: true,
      data: foodCategory,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const deleteFoodCategory = async (
  request: Request,
  response: Response
) => {
  try {
    const { foodIdCategoryId } = request.params;
    await FoodCategory.findByIdAndDelete(foodIdCategoryId);
    response.json({
      success: true,
      message: "Food category deleted successfully",
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
