"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "next-themes";
export const ModeToggler = () => {
  const { theme, setTheme } = useTheme();
  const hadelThemeChange = () => {
    const current = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    console.log("theme change");
    setTheme(current);
  };
  return (
    <div className="px-4 h-full  flex items-center justify-center">
      <button
        onClick={hadelThemeChange}
        className="p-2 rounded-full border border-black dark:border-white"
      >
        {theme === "dark" ? (
          <IconSun size={24} className="text-white" />
        ) : (
          <IconMoon size={24} className="text-black" />
        )}
      </button>
    </div>
  );
};
