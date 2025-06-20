import { Request, Response } from "express";
import { FoodOrder } from "../models/food-order.model.js";

export const getAllFoodOrders = async (
  request: Request,
  response: Response
) => {
  try {
    const foodOrder = await FoodOrder.find();
    response.json({
      success: true,
      data: foodOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getFoodOrderById = async (
  request: Request,
  response: Response
) => {
  try {
    const { foodOrderId } = request.params;
    const foodOrder = await FoodOrder.findById(foodOrderId);
    response.json({
      success: true,
      data: foodOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const createFoodOrder = async (request: Request, response: Response) => {
  try {
    const foodOrder = request.body;
    const createFoodOrder = await FoodOrder.create(foodOrder);
    response.json({
      success: true,
      data: createFoodOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const updateFoodOrder = async (request: Request, response: Response) => {
  try {
    const { foodOrderId } = request.params;
    const updateFoodOrder = request.body;

    const foodOrder = await FoodOrder.findByIdAndUpdate(
      foodOrderId,
      updateFoodOrder,
      { new: true }
    );

    response.json({
      success: true,
      data: foodOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const deleteFoodOrder = async (request: Request, response: Response) => {
  try {
    const { foodOrderId } = request.params;
    await FoodOrder.findByIdAndDelete(foodOrderId);
    response.json({
      success: true,
      message: "Food order deleted successfully",
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
