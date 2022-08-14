import { useSelector, useDispatch } from "react-redux";
import { Button } from "./Button.js";
import { buyCakeAction } from "../redux/index";

export function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  function handleBuyCakeClick() {
    dispatch(buyCakeAction());
  }
  return (
    <div>
      <h2>Anzahl verbleibende Kuchen: {numberOfCakes}</h2>
      <Button name="kaufen" onClick={handleBuyCakeClick} />
    </div>
  );
}
