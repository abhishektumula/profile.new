"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { ModeToggler } from "./mode-toggle";
import { useEffect, useState } from "react";
import Image from "next/image";
import { p } from "motion/react-client";
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
  const lists: string[] = ["experience", "projects", "blogs"];

  return (
    <div
      className={`border border-red-900 pl-16 w-full h-24 flex flex-rows items-center justify-between p-2 bg-white dark:bg-black 
        sticky top-0 ${scroll ? "bg-white/20 dark:bg-black/20 backdrop-blur-sm" : "opacity-100"}`}
    >
      <div className="w-full h-full flex flex-row gap-4 pt-2">
        <div className="w-16 h-16">
          <img
            src="/profile.png"
            alt=""
            className="w-full h-full rounded-xl border-2 border-neutral-300 dark:border-neutral-700"
          />
        </div>
        <div className="flex flex-row items-end justify-start gap-4 p-2">
          {lists.map((each, idx) => (
            <p className="text-sm hover:underline cursor-pointer" key={idx}>
              {each}
            </p>
          ))}
        </div>
      </div>
      <div>
        <ModeToggler />
      </div>
    </div>
  );
};

{
  /* <h1 className="text-3xl font-bold text-black dark:text-white">
          Abhishek Tumula
        </h1>
        <p className="text-md text-neutral-600 dark:text-neutral-500">
          A Full stack Web Developer
        </p> */
}
