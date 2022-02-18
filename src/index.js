import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { PostContextProvider } from "./context/postContext";

ReactDOM.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
