import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import "./styles/index.scss";
import ReactQuery from "./components/ReactQuery";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ReactQuery>
        <App />
      </ReactQuery>
    </Provider>
  </BrowserRouter>
);
