import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CryptoProvider } from "./context/CryptoContext";
import { NewsProvider } from "./context/NewsContext";

ReactDOM.render(
  <NewsProvider>
    <CryptoProvider>
      <App />
    </CryptoProvider>
  </NewsProvider>,
  document.getElementById("root")
);
