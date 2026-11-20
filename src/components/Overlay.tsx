"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Screen 1 (0%): Center
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -60]);

  // Screen 2 (30%): Left
  const opacity2 = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.20, 0.28, 0.48], [80, 0, -60]);

  // Screen 3 (60%): Right
  const opacity3 = useTransform(scrollYProgress, [0.50, 0.58, 0.70, 0.80], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.50, 0.58, 0.80], [80, 0, -60]);

  // Scroll indicator fade out
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Screen 1 (0%): Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-xl text-white">
            Mineka Edirisooriya
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light drop-shadow-lg">
            Marketing | Strategy | Consulting
          </p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-12 flex flex-col items-center animate-bounce text-white/50"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>

      {/* Screen 2 (30%): Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-32"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 max-w-2xl leading-tight text-white drop-shadow-2xl">
          Welcome to my<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
            portfolio.
          </span>
        </h2>
        <div className="w-24 h-1 bg-white/20 mt-2 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(34,197,94,0.35)]" />
      </motion.div>

      {/* Screen 3 (60%): Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-32"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 max-w-2xl leading-tight text-white drop-shadow-2xl">
          Creating leverage<br />
          with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
            marketing.
          </span>
        </h2>
        <div className="w-24 h-1 bg-white/20 mt-2 self-end backdrop-blur-md rounded-full mt-4 shadow-[0_0_20px_rgba(34,197,94,0.35)]" />
      </motion.div>
    </div>
  );
}
