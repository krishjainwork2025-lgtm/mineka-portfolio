"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Mail, Phone, Copy, Check, Send, Sparkles, MapPin } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "mineka2005@gmail.com";
  const phone = "+61 452 113 295";
  const linkedIn = "https://www.linkedin.com/in/mineka2005";

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    // Trigger subtle confetti burst
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.85 },
      colors: ["#38bdf8", "#34d399", "#f59e0b", "#ffffff"],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setSubmitted(true);

    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#34d399", "#ffffff"],
    });

    // Reset after delay
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative z-20 w-full py-28 px-6 md:px-12 lg:px-20 bg-[#01090f] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-100 tracking-tight uppercase">
            Let&apos;s Build <br />
            <span className="text-gradient-cyan">What&apos;s Next.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Whether you&apos;re exploring product category expansion, rebuilding customer lifecycle systems, or pioneering conversational AI architectures — let&apos;s talk.
          </p>
        </div>

        {/* 2-Column Grid: Profile & Direct Actions / Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Profile Card & Contact Info (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              {/* Headshot & Identity */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-xl shadow-cyan-500/10 shrink-0">
                  <Image
                    src="/profile/Mineka_Headshot.png"
                    alt="Mineka Edirisooriya"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    Minéka Edirisooriya
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    Strategy • NPD • CX Architecture
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    Melbourne, Australia
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                Bachelor of Commerce (Double Major Marketing &amp; Finance) with First Class Honours from The University of Melbourne. Alumni of KPMG Australia and BMW Group engagements.
              </p>
            </div>

            {/* Direct Connect Pills */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400">Direct Email</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                      {emailAddress}
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-slate-300 flex items-center gap-1">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* LinkedIn */}
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400">Professional Network</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                      linkedin.com/in/mineka2005
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">↗</span>
              </a>

              {/* Phone */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">Phone</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">{phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Dialogue (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-panel border border-white/10">
            <h3 className="text-xl font-bold text-slate-100 mb-1">
              Send an Instant Note
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              Looking for strategy consulting, brand ideation, or digital experience collaboration? Drop a message below.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100">Message Received</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out! Mineka will get back to you promptly at {email || "your email"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                    Project / Inquiry Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product, project timeline, or consulting scope..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#01090f] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
