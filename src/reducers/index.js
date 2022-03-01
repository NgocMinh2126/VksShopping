import { combineReducers } from "redux";
import { category } from "./category";
import { product } from "./product";
import { user } from "./user";
import { app } from "./app";
const rootReducer = combineReducers({
  category,
  product,
  user,
  app,
});
export default rootReducer;
