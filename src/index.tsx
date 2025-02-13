import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const ROOT_SELECTOR = "#root";

const container = document.querySelector(ROOT_SELECTOR);

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
