import { IconType } from "react-icons";
import { FiHome, FiCompass, FiList, FiUser } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardPage() {
  const navLinks: { text: string; value: string; icon?: IconType }[] = [
    {
      text: "Home",
      value: "",
      icon: FiHome,
    },
    {
      text: "Explore",
      value: "explore",
      icon: FiCompass,
    },
    {
      text: "Board",
      value: "board",
      icon: FiList,
    },
    {
      text: "Profile",
      value: "profile",
      icon: FiUser,
    },
  ];
  const navClassNames =
    "inline-flex flex-col items-center justify-center gap-1 h-full";
  return (
    <div className="flex flex-col h-screen w-screen">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <nav className="bg-white grid grid-cols-4 h-24">
        {navLinks.map((n, i) => (
          <NavLink
            to={n.value}
            key={i}
            end
            className={({ isActive }) =>
              isActive
                ? `text-black ${navClassNames}`
                : `text-gray-400 ${navClassNames}`
            }
          >
            {n.icon && <n.icon className="w-6 h-6" />}
            <span className="text-xs font-light tracking-wider">{n.text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
