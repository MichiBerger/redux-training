import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { CakeContainer } from "./components/CakeContainer.js";
import { IceCreamContainer } from "./components/IceCreamContainer.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
