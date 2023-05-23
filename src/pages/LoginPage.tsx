import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import SplashPage from "./SplashPage";

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <FiLoader className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : <SplashPage />;
}
