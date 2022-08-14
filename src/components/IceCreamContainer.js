import { useSelector, useDispatch } from "react-redux";
import { Button } from "./Button.js";

export function IceCreamContainer() {
  const iceCreamState = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(iceCreamState);

  function handleBuyIceCream() {
    dispatch(() => console.log("test"));
  }

  return (
    <div>
      <h2>Anzahl verbleibende IceCreams: </h2>
      <Button name="Eis kaufen" onClick={handleBuyIceCream} />
    </div>
  );
}
