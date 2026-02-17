"use client";
import React from "react";
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
        <div key={idx}>
          <a href={each.href}>{each.icon}</a>
        </div>
      ))}
    </div>
  );
};
