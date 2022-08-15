import { useSelector, useDispatch } from "react-redux";
import { Button } from "./Button.js";
import { buyCakeAction, addCakeAction, resetCakeAction } from "../redux/index";

export function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  function handleBuyCakeClick() {
    dispatch(buyCakeAction());
  }

  function handleAddNewCake() {
    dispatch(addCakeAction());
  }
  function handleResetCake() {
    dispatch(resetCakeAction());
  }

  return (
    <div>
      <h2>Anzahl verbleibende Kuchen: {numberOfCakes}</h2>
      <div className="button-group">
        <Button
          disabled={numberOfCakes <= 0}
          name="kaufen"
          onClick={handleBuyCakeClick}
        />
        <Button
          disabled={numberOfCakes >= 50}
          name="hinzufügen"
          onClick={handleAddNewCake}
        />
        <Button name="reset" onClick={handleResetCake} />
      </div>
    </div>
  );
}
