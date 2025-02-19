import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const ROOT_SELECTOR = "#root";

const container = document.querySelector(ROOT_SELECTOR);

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error(`Element with selector ${ROOT_SELECTOR} not found`);
}
