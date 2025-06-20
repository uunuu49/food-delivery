import { Request, Response } from "express";
import { Food } from "../models/index.js";

export const getAllFood = async (request: Request, response: Response) => {
  try {
    const foods = await Food.find();

    response.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getFoodById = async (request: Request, response: Response) => {
  try {
    const { foodId } = request.params;
    const food = await Food.findById(foodId);
    response.json({
      success: true,
      data: food,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const createFood = async (request: Request, response: Response) => {
  try {
    const food = request.body;
    const createFood = await Food.create(food);
    response.json({
      sucsess: true,
      data: createFood,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const updateFood = async (request: Request, response: Response) => {
  try {
    const { foodId } = request.params;
    const updateFood = request.body;

    const food = await Food.findByIdAndUpdate(foodId, updateFood, {
      new: true,
    });

    response.json({
      success: true,
      data: food,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const deleteFood = async (request: Request, response: Response) => {
  try {
    const { foodId } = request.params;
    await Food.findByIdAndDelete(foodId);
    response.json({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
