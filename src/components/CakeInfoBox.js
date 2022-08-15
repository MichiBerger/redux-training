import { useSelector } from "react-redux";
import { initialCakeState } from "../redux/cake/cakeReducer.js";

export function CakeInfoBox() {
  const { numberOfCakes, count } = useSelector((state) => state.cake);
  const amount = numberOfCakes - count;
  console.log(amount);
  return (
    <div className="cake-info-box">
      <p>There are {numberOfCakes} cakes left</p>
      <p>Number of sold Cakes: {count}</p>
    </div>
  );
}
