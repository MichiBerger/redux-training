import { BUY_CAKE } from "./cakeTypes.js";

const initialCakeState = {
  numberOfCakes: 10,
};

export function cakeReducer(state = initialCakeState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
}
