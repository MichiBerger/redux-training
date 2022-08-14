import { cakeReducer } from "./cake/cakeReducer.js";
import { iceCreamReducer } from "./iceCream/iceCreamReducers.js";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
