import { Route, Routes } from "react-router-dom";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import PageLoader from "./pages/PageLoader";
import { useAuth0 } from "@auth0/auth0-react";
import NotFoundPage from "./pages/NotFoundPage";
import SplashPage from "./pages/SplashPage";

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/terms" element={<TermsConditionsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
