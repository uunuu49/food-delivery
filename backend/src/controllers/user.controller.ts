import { Request, Response } from "express";
import { User } from "../models/index.js";

export const getAllUsers = async (request: Request, response: Response) => {
  try {
    const users = await User.find();
    response.json({
      success: true,
      data: users,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getUserById = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;
    const user = await User.findById(userId);
    response.json({
      success: true,
      data: user,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const createUser = async (request: Request, response: Response) => {
  try {
    const user = request.body;
    const createUser = await User.create(user);
    response.json({
      success: true,
      data: createUser,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
