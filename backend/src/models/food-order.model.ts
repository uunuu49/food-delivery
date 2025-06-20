import mongoose from "mongoose";
import { FoodOrderStatusEnum } from "../enums/food-order-enum.js";

const { Schema, model } = mongoose;
const foodOrder = new Schema({
  user: String,
  totalPrice: Number,
  foodOrderedItems: [],
  status: {
    enum: Object.values(FoodOrderStatusEnum),
    type: String,
    default: FoodOrderStatusEnum.PENDING,
  }, // Default status is PENDING
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const FoodOrder = model("FoodOrder", foodOrder);
