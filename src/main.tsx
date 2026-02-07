import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// main.tsx に置くものは、createRoot、global CSSのimport、React全体の “基盤” Provider　例：Theme / Store / QueryClient / i18n など
