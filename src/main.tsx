import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledEngineProvider } from "@mui/material";
import AppProvider from "./context/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AppProvider>
        <App />
      </AppProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
