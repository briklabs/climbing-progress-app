import { useNavigate } from "react-router-dom";
import FriendsList from "../components/FriendsList";
import MyRoutes from "../components/MyRoutes";
import NewBetas from "../components/NewBetas";
import UserProfilePicture from "../components/UserProfilePicture";
import { Button } from "antd";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex flex-col items-center justify-center gap-6 p-6 border-b">
        <UserProfilePicture />
        <h1>Know what you wanna climb?</h1>
        <Button
          type="primary"
          className="bg-black"
          onClick={() => navigate("explore")}
        >
          Find your route
        </Button>
      </header>
      <main className="p-6 space-y-6">
        <FriendsList />
        <MyRoutes />
        <NewBetas />
      </main>
    </div>
  );
}
