import { IconType } from "react-icons";
import { FiHome, FiCompass, FiList, FiUser, FiPlus } from "react-icons/fi";
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
    <div className="flex flex-col h-[100dvh] w-screen">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <nav className="bg-white grid grid-cols-4 h-24 relative">
        <NavLink
          to="new-routine"
          end
          className="absolute w-16 h-16 bg-black text-white flex flex-col items-center justify-center -top-8 right-1/2 -mr-8 rounded-full"
        >
          <FiPlus className="w-6 h-6 mx-auto" />
          <span className="text-xs font-light tracking-wider">Start</span>
        </NavLink>
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
