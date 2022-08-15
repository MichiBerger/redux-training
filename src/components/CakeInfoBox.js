import { useSelector } from "react-redux";

export function CakeInfoBox() {
  const { numberOfCakes, count } = useSelector((state) => state.cake);

  return (
    <div className="cake-info-box">
      <p>There are {numberOfCakes} cakes left</p>
      {count !== 0 && <p>Number of sold Cakes: {count}</p>}
    </div>
  );
}
