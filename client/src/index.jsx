import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HomeProvider } from "./contexts/";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HomeProvider>
      <App />
    </HomeProvider>
  </BrowserRouter>
);
