"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { ModeToggler } from "./mode-toggle";
export const NavBar = () => {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div className="w-full h-20 flex flex-rows items-center justify-between p-4 bg-white dark:bg-black sticky top-1">
      <div className="">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Abhishek Tumula
        </h1>
      </div>
      <div>
        <ModeToggler />
      </div>
    </div>
  );
};
