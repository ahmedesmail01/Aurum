"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        ease: [0.25, 1, 0.5, 1], // Custom quintic ease-out for luxury motion feel
        duration: 0.7,
      }}
      className="grow flex flex-col"
    >
      {children}
    </motion.main>
  );
}
