import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ExplorePage from "./pages/ExplorePage";
import NewRoutinePage from "./pages/NewRoutinePage";
import PageLoader from "./pages/PageLoader";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import NotFoundPage from "./pages/NotFoundPage";

const AuthenticationGuard: React.FC<{
  component: React.ComponentType<object>;
}> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoader />,
  });

  return <Component />;
};

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={<AuthenticationGuard component={DashboardPage} />}
      >
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="board" element={<LeaderboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="new-routine" element={<NewRoutinePage />} />
      </Route>
      <Route path="/terms" element={<TermsConditionsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
