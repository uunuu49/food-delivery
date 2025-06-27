import { Request, Response } from "express";
import { User } from "../models/index.js";
import bcrypt from "bcrypt";
import { hash } from "crypto";

export const signIn = async (request: Request, response: Response) => {
  try {
    const { name, password } = request.body;

    const user = await User.findOne({ name });

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        response.status(200).json({
          success: true,
          message: "Authenticated",
        });
      } else {
        response.status(200).json({
          success: false,
          message: "not authenticated",
        });
      }
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const signUp = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        response.status(444).json({
          success: false,
          error: err,
        });
      }
      const createdUSer = await User.create({
        email: email,
        password: hash,
      });
      response.status(200).json({
        success: true,
        data: createdUSer,
      });
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
