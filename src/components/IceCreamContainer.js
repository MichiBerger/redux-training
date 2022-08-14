import { useSelector, useDispatch } from "react-redux";
import { buyIceCreamAction } from "../redux/index";
import { Button } from "./Button.js";

export function IceCreamContainer() {
  const iceCreamState = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  console.log(iceCreamState);

  function handleBuyIceCream() {
    dispatch(buyIceCreamAction());
  }

  return (
    <div>
      <h2>Anzahl verbleibende IceCreams: {iceCreamState}</h2>
      <Button name="Eis kaufen" onClick={handleBuyIceCream} />
    </div>
  );
}
