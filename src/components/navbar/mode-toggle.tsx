"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export const ModeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  });

  if (!mount) return null;
  const hadelThemeChange = () => {
    const current = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(current);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={hadelThemeChange}
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
