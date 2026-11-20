"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Feather, ArrowUpRight, Globe } from "lucide-react";
import { sound } from "@/lib/sound";

export default function ThoughtCafe() {
  const articles = [
    {
      title: "The Friction of Modern Choice: Why Less is More in Premium CX",
      category: "Consumer Psychology",
      readTime: "5 min read",
      excerpt:
        "Analyzing cognitive overload in luxury automotive and retail. When choice architecture shifts from endless configurators to guided narrative curation.",
    },
    {
      title: "The 4 AI Archetypes: Reclaiming Human Judgment in Agency Workflows",
      category: "AI & Strategy",
      readTime: "7 min read",
      excerpt:
        "Where LLMs automate, where they accelerate, and why cultural sensitivity remains an unbreachable human guardrail.",
    },
    {
      title: "Greenwashing vs. Signalling: The Psychology Behind Clothing Eco-Labels",
      category: "Sustainable Commerce",
      readTime: "6 min read",
      excerpt:
        "Synthesizing 42 empirical studies on why shoppers trust some labels immediately while filtering out generic claims.",
    },
  ];

  return (
    <section id="thought-cafe" className="relative z-20 w-full py-28 px-6 md:px-12 lg:px-20 bg-[#01090f] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-amber-500/20 text-xs font-mono text-amber-300 mb-4">
              <Feather className="w-3.5 h-3.5" />
              <span>INDEPENDENT EDITORIAL VENTURE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-100 tracking-tight uppercase">
              Thought <span className="text-gradient-cyan">Café.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-4">
              An independent writing platform exploring current affairs, marketing, culture, and emerging digital paradigms.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://thoughttapestry.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/15 hover:border-cyan-400/40 text-xs font-mono text-cyan-300 hover:text-white transition-all hover:scale-105"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>thoughttapestry.com.au</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/mineka_thishakya.23/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/15 hover:border-pink-400/40 text-xs font-mono text-pink-300 hover:text-white transition-all hover:scale-105"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@mineka_thishakya.23</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => sound.playHover()}
              className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                  <span className="text-cyan-400">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                <span>Read Analysis</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
