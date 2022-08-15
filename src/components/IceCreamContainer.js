import { useSelector, useDispatch } from "react-redux";
import { buyIceCreamAction } from "../redux/index";
import { Button } from "./Button.js";

export function IceCreamContainer() {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  function handleBuyIceCream() {
    dispatch(buyIceCreamAction());
  }

  return (
    <div>
      <h2>Anzahl verbleibende IceCreams: {numberOfIceCreams}</h2>
      <Button
        disabled={numberOfIceCreams <= 0}
        name="Eis kaufen"
        onClick={handleBuyIceCream}
      />
    </div>
  );
}
