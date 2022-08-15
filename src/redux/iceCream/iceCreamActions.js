import { BUY_ICECREAM } from "./iceCreamTypes.js";

export function buyIceCreamAction(value) {
  return {
    type: BUY_ICECREAM,
    payload: value,
  };
}
