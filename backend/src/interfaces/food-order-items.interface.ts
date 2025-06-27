import { Types } from "mongoose";

export interface FoodOrderItem {
  food: Types.ObjectId;
  quantity: number;
}
