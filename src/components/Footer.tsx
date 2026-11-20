"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 w-full py-12 px-6 md:px-12 lg:px-20 bg-[#01090f] border-t border-white/5 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-xs font-bold">
            ME
          </div>
          <p className="text-xs font-mono text-slate-400">
            © 2026 Minéka Edirisooriya. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <span className="text-slate-500">Melbourne, Victoria</span>
          <span className="text-slate-700">•</span>
          <span className="text-cyan-400">Next.js 14 + Framer Motion</span>
          <span className="text-slate-700">•</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all hover:scale-105"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
