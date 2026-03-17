"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export const ModeToggler = () => {
  const { theme, setTheme } = useTheme();
  const mount = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mount) return null;

  const handleThemeChange = () => {
    const current = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(current);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleThemeChange}
        className="rounded-lg p-2 dark:border-white shadow-elevated dark:shadow-elevated-dark"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <IconSun size={16} className="text-white sm:h-6 sm:w-6" />
        ) : (
          <IconMoon size={16} className="text-black sm:h-6 sm:w-6" />
        )}
      </button>
    </div>
  );
};
