import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import "./i18n";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
