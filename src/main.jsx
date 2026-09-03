import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./pages/components/ScrollToTop.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </HelmetProvider>
  </StrictMode>,
);
