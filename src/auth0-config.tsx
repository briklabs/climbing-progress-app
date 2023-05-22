import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const authConfig: Auth0ProviderOptions = {
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

const Auth0ProviderWithRouter: React.FC = () => (
  <Auth0Provider {...authConfig}>
    <Router>
      <Routes>
        <Route path="*" Component={App} />
      </Routes>
    </Router>
  </Auth0Provider>
);

export default Auth0ProviderWithRouter;
