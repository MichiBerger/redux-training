import { BUY_ICECREAM } from "./iceCreamTypes.js";

export function buyIceCreamAction(value = 1) {
  return {
    type: BUY_ICECREAM,
    payload: value,
  };
}
