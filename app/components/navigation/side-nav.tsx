import { Bell, House, Search, Plus, Boxes, CircleUser } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useTheme } from "../theme-provider/theme-provider";
import logoDark from "../icons/logo-dark.svg";
import logoLight from "../icons/logo-light.svg";
import ThemeButton from "../theme-provider/theme-button";

const links = [
  {
    name: "House",
    icon: House,
    link: "/dashboard",
  },
  {
    name: "Explore",
    icon: Search,
    link: "/dashboard/explore",
  },
  {
    name: "Activity",
    icon: Bell,
    link: "/activity",
  },
  {
    name: "Create",
    icon: Plus,
    link: "/create",
  },
  {
    name: "My assets",
    icon: Boxes,
    link: "/assets",
  },
];

const SideNav = () => {
  const { theme } = useTheme();
  const activePath = useLocation()?.pathname;

  return (
    <div className="w-80 h-screen fixed top-0 left-0 ml-6 px-4 pt-9">
      <div className="flex items-center gap-4 pb-6">
        <img src={theme === "dark" ? logoLight : logoDark} />
        <Link
          to="/dashboard"
          className="text-xl font-bold text-brand-dark dark:text-brand-light cursor-pointer"
        >
          Artify
        </Link>
        <div className="ml-[143px]">
          <ThemeButton />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {links.map(({ link, name, icon: Icon }) => (
          <Link
            key={name}
            to={link}
            className={`sub-header text-brand-dark dark:text-brand-light flex gap-4 items-center w-full px-3 py-2 ${activePath === link && "bg-inputs-light dark:bg-inputs-dark"} radius-default`}
          >
            <Icon strokeWidth={1.5} />
            {name}
          </Link>
        ))}
      </div>
      <Link
        to="/account"
        className={`mt-107 sub-header text-brand-dark dark:text-brand-light flex gap-4 items-center w-full px-3 py-2 ${activePath === "/account" && "bg-inputs-light dark:bg-inputs-dark"} radius-default`}
      >
        <CircleUser strokeWidth={1.5} />
        Account
      </Link>
    </div>
  );
};

export default SideNav;
