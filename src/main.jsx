import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import "milligram/dist/milligram.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
