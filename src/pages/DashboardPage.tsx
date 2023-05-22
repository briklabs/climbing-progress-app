import { Link, Outlet } from "react-router-dom";

export default function DashboardPage() {
  const navLinks: { text: string; value: string }[] = [
    {
      text: "Home",
      value: "",
    },
    {
      text: "Explore",
      value: "explore",
    },
    {
      text: "Board",
      value: "board",
    },
    {
      text: "Profile",
      value: "profile",
    },
  ];
  return (
    <div className="flex flex-col h-screen w-screen">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <nav className="bg-white grid grid-cols-4 h-24">
        {navLinks.map((n, i) => (
          <Link
            to={n.value}
            key={i}
            className=" inline-flex items-center justify-center h-full"
          >
            {n.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
