import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.get("/:userId", getUserById);
userRouter.post("/", createUser);
userRouter.patch("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);
export default userRouter;
