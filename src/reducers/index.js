import { combineReducers } from "redux";
import { category } from "./category";
import { product } from "./product";

const rootReducer = combineReducers({
  category,
  product,
});
export default rootReducer;
