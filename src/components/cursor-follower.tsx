"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import React from "react";
import { useEffect, useState, useRef } from "react";

const cursorBits = [
  "✨",
  "🔥",
  "⚡",
  "🎯",
  "🫧",
  "👨‍💻",
  "build",
  "ship",
  "vibe",
  "wow",
];

export const CursorFollower = () => {
  const [cursorBit, setCursorBit] = useState(cursorBits[0]);
  const [isVisible, setIsVisible] = useState(false);
  const indexRef = useRef(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % cursorBits.length;
      setCursorBit(cursorBits[indexRef.current]);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden="true"
    >
      <motion.div
        style={{
          position: "fixed",
          top: springY,
          left: springX,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.92,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-lg border border-neutral-300/80 bg-white/75 px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur-sm dark:border-neutral-700/80 dark:bg-neutral-950/70 dark:text-neutral-200"
      >
        {cursorBit}
      </motion.div>
    </motion.div>
  );
};
