"use client";

import React from "react";
import { Wrench } from "lucide-react";

const skills = [
  { name: "MS Excel", level: "Advanced Financial & Strategy Modeling" },
  { name: "Figma", level: "Interactive CX Prototyping" },
  { name: "MS PowerPoint", level: "Executive Pitch Decks" },
  { name: "PowerBI", level: "Business Intelligence Dashboards" },
  { name: "Canva", level: "Brand Identity Design" },
  { name: "Prompt Engineering", level: "Multimodal LLM Testing" },
  { name: "Google Analytics", level: "Funnel & Conversion Audits" },
  { name: "Tableau", level: "Data Visualization" },
  { name: "NPD Stage-Gate", level: "Product Ideation & Screening" },
  { name: "Consumer Research", level: "Academic & Empirical Synthesis" },
];

export default function SkillsMarquee() {
  return (
    <div className="relative z-20 w-full py-12 bg-[#01090f] border-y border-white/5 overflow-hidden">
      {/* Gradient edge masks for smooth fade */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#01090f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#01090f] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-6 items-center">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-panel border border-white/10 shrink-0 hover:border-cyan-400/40 transition-colors"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-bold text-slate-100">{skill.name}</span>
            <span className="text-xs font-mono text-slate-400">({skill.level})</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
