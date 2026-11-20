"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Navbar() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const state = sound.toggle();
    setSoundEnabled(state);
  };

  const navLinks = [
    { label: "Story", href: "#hero-scroller" },
    { label: "Selected Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Thought Café", href: "#thought-cafe" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Monogram / Brand Logo */}
        <a
          href="#hero-scroller"
          onClick={() => sound.playClick()}
          className="group flex items-center gap-3 px-3.5 py-2 rounded-full glass-pill border border-white/10 hover:border-cyan-400/40 transition-all shadow-lg"
        >
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-[11px] font-bold group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="text-xs font-bold tracking-wider text-slate-100 uppercase hidden sm:inline">
            Mineka Edirisooriya
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-pill border border-white/10 shadow-xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons: Sound Toggle + Contact CTA */}
        <div className="flex items-center gap-2">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound Feedback"
            title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            className="w-9 h-9 rounded-full glass-pill border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Quick Connect CTA */}
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-xs font-mono font-medium text-cyan-300 transition-all hover:scale-105 active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full glass-pill border border-white/10 flex items-center justify-center text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-3 p-4 rounded-2xl glass-panel border border-white/15 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2.5 rounded-xl text-sm font-mono text-slate-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
            }}
            className="mt-2 text-center py-2.5 rounded-xl bg-cyan-500 text-[#01090f] font-mono text-xs font-bold"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
