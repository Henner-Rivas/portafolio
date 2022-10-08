import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./context";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider>
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Context.Provider>
);
