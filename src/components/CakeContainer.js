import { useSelector, useDispatch } from "react-redux";
import { Button } from "./Button.js";
import { buyCake } from "../redux/cake/cakeActions.js";

export function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  function handleBuyCakeClick() {
    dispatch(buyCake());
  }
  return (
    <div>
      <h2>Anzahl verbleibende Kuchen: {numberOfCakes}</h2>
      <Button name="kaufen" onClick={handleBuyCakeClick} />
    </div>
  );
}
