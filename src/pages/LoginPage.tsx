import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import SplashPage from "./SplashPage";
import PageLoader from "./PageLoader";

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <PageLoader />;
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : <SplashPage />;
}
