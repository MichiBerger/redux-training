import { BUY_ICECREAM } from "./iceCreamTypes.js";

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

export function iceCreamReducer(state = initialIceCreamState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    default:
      return state;
  }
}
