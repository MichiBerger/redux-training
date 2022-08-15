import { BUY_CAKE, ADD_CAKE } from "./cakeTypes.js";

export const initialCakeState = {
  numberOfCakes: 10,
  count: 0,
};

export function cakeReducer(state = initialCakeState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
        count: state.count + 1,
      };
    case ADD_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 10,
      };
    default:
      return state;
  }
}
