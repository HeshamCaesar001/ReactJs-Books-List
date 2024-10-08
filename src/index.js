import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./contexts/book";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider>
      <App />
    </Provider>
  </div>
);
