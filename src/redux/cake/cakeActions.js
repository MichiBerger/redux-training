import { BUY_CAKE, ADD_CAKE, RESET } from "./cakeTypes.js";

export function buyCakeAction() {
  return {
    type: BUY_CAKE,
  };
}

export function addCakeAction() {
  return {
    type: ADD_CAKE,
  };
}
export function resetCakeAction() {
  return {
    type: RESET,
  };
}
