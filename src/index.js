import React from "react";
import ReactDom from "react-dom/client";
// import { HashRouter } from "react-router-dom";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    // <HashRouter>
      <App />
    // </HashRouter>
  // </React.StrictMode>
);
