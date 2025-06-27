import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.get("/:userId", getUserById);
userRouter.post("/", createUser);

export default userRouter;
