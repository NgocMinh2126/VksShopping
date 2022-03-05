import { combineReducers } from "redux";
import { category } from "./category";
import { product } from "./product";
import { user } from "./user";
import { app } from "./app";
import { cart } from "./cart";
const rootReducer = combineReducers({
  category,
  product,
  user,
  app,
  cart,
});
export default rootReducer;
