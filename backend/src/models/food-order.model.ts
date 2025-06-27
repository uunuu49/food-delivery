import mongoose from "mongoose";
import { FoodOrderStatusEnum } from "../enums/food-order-enum.js";

const { Schema, model, Types } = mongoose;
const foodOrder = new Schema({
  user: { type: Types.ObjectId, ref: "User" },
  totalPrice: Number,
  foodOrderedItems: [
    {
      food: { type: Types.ObjectId, ref: "Food" },
      quantity: { type: Number, required: true },
    },
  ],
  status: {
    enum: Object.values(FoodOrderStatusEnum),
    type: String,
    default: FoodOrderStatusEnum.PENDING,
  }, // Default status is PENDING
  createdAt: { type: Date, default: Date },
  updatedAt: { type: Date, default: Date },
});

export const FoodOrder = model("FoodOrder", foodOrder);
