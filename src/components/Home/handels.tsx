"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
type handles = {
  title: string;
  href: string;
  access: boolean;
  icon: React.ReactNode;
};

import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { redirect } from "next/navigation";
export const PublicHandles = () => {
  const [hover, setHover] = useState<number | null>(null);
  const links: handles[] = [
    {
      title: "x",
      href: "https://x.com/dammmhmmm",
      access: true,
      icon: <IconBrandTwitter />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/",
      access: false,
      icon: <IconBrandInstagram />,
    },
    {
      title: "Github",
      href: "https://github.com/abhishektumula",
      access: true,
      icon: <IconBrandGithub />,
    },
  ];

  return (
    <div className="w-full flex flex-row items-center justify-start gap-4">
      {links.map((each, idx) => (
        <motion.div key={idx} className="relative">
          {hover === idx && (
            <div className="w-fit absolute inset-x-0 -top-6">
              <h1
                className="text-[12px] px-1 py-0.5 rounded-md
              text-left bg-neutral-300 dark:bg-neutral-700"
              >
                {each.title}
              </h1>
            </div>
          )}
          <motion.a
            className={`${each.access ? "" : "text-red-400"}`}
            onHoverStart={() => setHover(idx)}
            onHoverEnd={() => setHover(null)}
            href={each.href}
          >
            {each.icon}
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};
