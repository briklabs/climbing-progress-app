import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ExplorePage from "./pages/ExplorePage";
import NewRoutinePage from "./pages/NewRoutinePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="board" element={<LeaderboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="new-routine" element={<NewRoutinePage />} />
      </Route>
      <Route path="/terms" element={<TermsConditionsPage />} />
    </Routes>
  );
}
