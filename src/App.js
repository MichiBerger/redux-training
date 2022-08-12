import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { CakeContainer } from "./components/CakeContainer.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
