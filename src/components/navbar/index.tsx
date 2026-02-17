"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { ModeToggler } from "./mode-toggle";
import { useEffect, useState } from "react";
export const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest > 0.04) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div
      className={`w-full h-24 flex flex-rows items-center justify-between p-4 bg-white dark:bg-black sticky top-0 ${scroll ? "bg-white/20 dark:bg-black/20 backdrop-blur-sm" : "opacity-100"}`}
    >
      <div className="">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Abhishek Tumula
        </h1>
        <p className="text-md text-neutral-600 dark:text-neutral-500">
          A Full stack Web Developer
        </p>
      </div>
      <div>
        <ModeToggler />
      </div>
    </div>
  );
};
