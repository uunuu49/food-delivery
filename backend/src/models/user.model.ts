import mongoose from "mongoose";
import { userRoleEnum } from "../enums/user-role-enum.js";
const { Schema, model } = mongoose;
const user = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  role: {
    enum: Object.values(userRoleEnum),
    type: String,
    default: userRoleEnum.USER, // Default role is USER
  },
  isVerified: {
    type: Boolean,
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

export const User = model("User ", user);
