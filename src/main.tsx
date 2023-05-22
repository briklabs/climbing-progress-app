import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import Auth0ProviderWithRouter from "./auth0-config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithRouter />
  </React.StrictMode>
);
