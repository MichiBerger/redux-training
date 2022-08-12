import { cakeReducer } from "./cake/cakeReducer.js";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cake: cakeReducer,
});
