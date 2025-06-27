import mongoose from "mongoose";
import { userRoleEnum } from "../enums/user-role-enum.js";
const { Schema, model } = mongoose;
const user = new Schema({
  email: {
    type: String,
    required: true,
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
    default: Date,
  },
  updatedAt: {
    type: Date,
    default: Date,
  },
});

export const User = model("User", user);
