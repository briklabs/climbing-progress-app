import FriendsList from "../components/FriendsList";
import LogoutButton from "../components/LogoutButton";
import MyRoutes from "../components/MyRoutes";
import NewBetas from "../components/NewBetas";
import UserProfilePicture from "../components/UserProfilePicture";

export default function HomePage() {
  return (
    <div>
      <header className="flex flex-col items-center justify-center gap-6 p-6 border-b">
        <UserProfilePicture />
        <h1>Know what you wanna climb?</h1>
        <LogoutButton />
      </header>
      <main className="p-6 space-y-6">
        <FriendsList />
        <MyRoutes />
        <NewBetas />
      </main>
    </div>
  );
}
