import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center h-10 w-10 rounded-[12px] bg-inputs-light dark:bg-inputs-dark">
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
    </div>
  );
};

export default ThemeButton;
