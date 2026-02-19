"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { IconSend } from "@tabler/icons-react";
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
import { div } from "motion/react-client";
export const PublicHandles = () => {
  const [hover, setHover] = useState<number | null>(null);
  const links: handles[] = [
    {
      title: "x",
      href: "https://x.com/dammmhmmm",
      access: true,
      icon: <IconBrandTwitter size={24} />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/",
      access: false,
      icon: <IconBrandInstagram size={24} />,
    },
    {
      title: "Github",
      href: "https://github.com/abhishektumula",
      access: true,
      icon: <IconBrandGithub size={24} />,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <CTA />
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
    </div>
  );
};

export const CTA = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 rounded-md bg-neutral-900 dark:bg-neutral-200 text-white dark:text-black shadow-elevated dark:shadow-elevated-dark">
        <IconSend size={20} className="" />
        <button className="p-1 text-sm">
          <h1 className="text-sm tracking-tight">Get in touch</h1>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white shadow-elevated dark:shadow-elevated-dark">
        <IconSend size={20} className="" />
        <button className="p-1 text-sm">Resume</button>
      </div>
    </div>
  );
};
