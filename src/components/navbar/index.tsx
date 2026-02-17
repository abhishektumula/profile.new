"use client";

import Image from "next/image";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { ModeToggler } from "./mode-toggle";

export const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest > 0.04);
  });

  const links: string[] = ["experience", "projects", "blogs"];

  return (
    <nav
      className={`border border-none sticky top-0 z-50 flex h-28 w-full items-center justify-between border-b border-neutral-200 bg-white px-4 dark:border-neutral-800 dark:bg-black sm:px-6 ${
        scroll ? "bg-white/40 backdrop-blur-sm dark:bg-black/40" : ""
      }`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <div className="shrink-0">
          <Image
            src="/profile.png"
            alt="avatar-image"
            width={24}
            height={24}
            className="h-12 w-12 rounded-md object-cover sm:h-16 sm:w-16"
            priority
          />
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
          {links.map((item) => (
            <p
              className="cursor-pointer text-xs capitalize text-neutral-800 hover:underline dark:text-neutral-100 sm:text-sm"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="ml-3 shrink-0">
        <ModeToggler />
      </div>
    </nav>
  );
};
