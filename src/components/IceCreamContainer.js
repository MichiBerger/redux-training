import { type } from "@testing-library/user-event/dist/type/index.js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCreamAction } from "../redux/index";
import { Button } from "./Button.js";
import { Input } from "./Input.js";

export function IceCreamContainer() {
  const [inputValue, setInputValue] = useState("");

  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  function handleBuyIceCream(value) {
    dispatch(buyIceCreamAction(value));
  }

  function handleInputChange(event) {
    if (Number(event.target.value) <= 0) {
      return;
    }
    setInputValue(Number(event.target.value));
  }

  return (
    <div>
      <h2>Anzahl verbleibende IceCreams: {numberOfIceCreams}</h2>
      <div className="icecream-input-group">
        <Input
          htmlFor="icecream-input"
          labelText="Anzahl Eis"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          disabled={numberOfIceCreams <= 0}
          name="Eis kaufen"
          onClick={() => handleBuyIceCream(inputValue)}
        />
      </div>

      {inputValue !== "" ? <p>{inputValue}</p> : null}
    </div>
  );
}
