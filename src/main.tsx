import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";
import "./styles/base.css";
import "./styles/components/_blocks.css";
import "./styles/components/_bento.css";
import "./styles/components/_carousel.css";
import "./styles/components/_extras.css";
import "./styles/motion.css";
import "./styles/performance.css";
import "./styles/theme-executive-black.css";
import "./styles/responsive.css";
import "./styles/_a11y.css";
import "./styles/perf-overrides.css";
import "./styles/polish-hero.css";
import "./styles/polish-guarantee.css";
import "./styles/polish-perfection.css";
import "./styles/polish-header.css";
import "./styles/polish-responsive.css";
import "./styles/polish-bento-layout.css";
import "./styles/polish-bento-tile.css";
import "./styles/polish-bento-finish.css";
import "./styles/polish-hero-pro.css";
import "./styles/polish-category-accent.css";
import "./styles/polish-paywave.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
