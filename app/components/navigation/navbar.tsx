import { Search, Bell, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider/theme-provider";
import logoDark from "../icons/logo-dark.svg";
import logoLight from "../icons/logo-light.svg";
import { Link } from "react-router";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full bg-background-light dark:bg-background-dark border-1 border-line-light dark:border-line-dark top-0 fixed z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <img src={theme === "dark" ? logoLight : logoDark} />
            <Link
              to="/"
              className="text-xl font-bold text-brand-dark dark:text-brand-light cursor-pointer"
            >
              Artify
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="#" className="sub-header">
                Explore
              </Link>
              <Link to="#" className="sub-header">
                Create
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative item-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search
                  size={20}
                  className="text-brand-secondary dark:text-brand-tertiary"
                />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="inputs w-40 md:w-56 pl-10 pr-4 py-2 border"
              />
            </div>
            <Button className="btn h-10">Connect Wallet</Button>
            <div className="flex items-center justify-center h-10 w-10 rounded-[12px] bg-inputs-light dark:bg-inputs-dark">
              <Bell
                strokeWidth={1.5}
                size={20}
                className=" text-brand-dark dark:text-brand-light cursor-pointer"
              />
            </div>
            <b className="flex items-center justify-center h-10 w-10 rounded-[12px] bg-inputs-light dark:bg-inputs-dark">
              <button
                className="cursor-pointer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "dark" ? (
                  <Sun
                    className="text-brand-dark dark:text-brand-light"
                    size={20}
                    strokeWidth={1.5}
                  />
                ) : (
                  <Moon
                    className="text-brand-dark dark:text-brand-light"
                    size={20}
                    strokeWidth={1.5}
                  />
                )}
              </button>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
