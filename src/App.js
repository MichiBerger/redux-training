import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { CakeContainer } from "./components/CakeContainer.js";
import { IceCreamContainer } from "./components/IceCreamContainer.js";
import { CakeInfoBox } from "./components/CakeInfoBox.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CakeInfoBox />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
