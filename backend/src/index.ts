import express from "express";
import foodRouter from "./routes/food.route.js";
import foodCategoryRouter from "./routes/food-category.route.js";
import foodOrderRouter from "./routes/food-order.route.js";
import userRouter from "./routes/user.route.js";
// import authRouter from "./routes/auth.route.js";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://unuboldse:3K_CArJUDb2%40Ys5@cluster0.tc8rbfs.mongodb.net/food-delivery"
);

const app = express();
app.use(express.json());
// Middleware to parse JSON bodies
const port = 3000;

app.use("/food", foodRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);
app.use("/user", userRouter);
// app.use("/auth", authRouter);

app.get("/", (_request, response) => {
  response.send("hello world");
});

app.listen(port, () => {
  console.log("server aslaa");
});
