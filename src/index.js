import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/* Store & localStorage */
import store, { persister } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

/* Root */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
