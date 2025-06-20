import mongoose from "mongoose";
const { Schema, model } = mongoose;
const foodCategory = new Schema({
  categoryName: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const FoodCategory = model("FoodCategory", foodCategory);
