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
  const indexRef = useRef(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % cursorBits.length;
      setCursorBit(cursorBits[indexRef.current]);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  return (
    <motion.div
      className="w-full min-h-screen absolute"
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: springY,
          left: springX,
        }}
        className="p-2 border border-neutral-300 dark:border-neutral-800 rounded-lg"
      >
        {cursorBit}
      </motion.div>
    </motion.div>
  );
};
