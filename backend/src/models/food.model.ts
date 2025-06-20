import mongoose from "mongoose";
const { Schema, model } = mongoose;
const food = new Schema({
  foodName: String,
  foodPrice: Number,
  ingrendients: String,
  image: String,
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});

export const Food = model("Food", food);
