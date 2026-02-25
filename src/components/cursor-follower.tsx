"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import React from "react";
export const CursorFollower = () => {
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
        className="p-4 border border-neutral-300 dark:border-neutral-800 rounded-lg"
      >
        🔥
      </motion.div>
    </motion.div>
  );
};
