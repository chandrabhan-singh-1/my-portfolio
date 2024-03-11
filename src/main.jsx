import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics";
inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
