"use client";

import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const experienceList = [
  {
    period: "Feb 2026 - Present",
    role: "Student Welcome Leader",
    company: "The University of Melbourne",
    location: "Melbourne, AU",
  },
  {
    period: "Nov 2025 – Jun 2026",
    role: "Strategy Consulting Intern",
    company: "Gilmour & Associates",
    location: "Melbourne, AU",
  },
  {
    period: "Feb 2026 – May 2026",
    role: "Project Consultant",
    company: "KPMG Australia",
    location: "Melbourne, AU",
  },
  {
    period: "Feb 2025 – May 2025",
    role: "WorkHub Intern",
    company: "BMW Australia",
    location: "Melbourne, AU",
  },
  {
    period: "Feb 2022 – Feb 2024",
    role: "Retail Sales Assistant",
    company: "Amy G Clothing",
    location: "Colombo, LK",
  },
];

const technicalSkills = [
  { name: "Excel", level: "Advanced", width: "95%" },
  { name: "PowerPoint", level: "Advanced", width: "95%" },
  { name: "Canva", level: "Advanced", width: "90%" },
  { name: "Figma", level: "Intermediate", width: "80%" },
  { name: "PowerBI", level: "Intermediate", width: "75%" },
  { name: "GA4 / Analytics", level: "Proficient", width: "70%" },
  { name: "Tableau", level: "Intermediate", width: "65%" },
  { name: "CapCut", level: "Intermediate", width: "65%" },
];

const extraCurriculars = [
  {
    title: "Head Treasurer",
    description:
      "Led a 35-member committee in developing a 24-month fundraising strategy that generated approximately $25,000, while managing finances and reporting for major student events.",
  },
  {
    title: "EMDG Co-Author",
    description:
      "Surveyed 30+ Australian SMEs to identify pain points in the Export Market Development Grant process, translating qualitative and quantitative insights into practical recommendations for a more accessible program.",
  },
  {
    title: "Faculty Ambassador",
    description:
      "Fostered a culture of student belonging by ideating, planning and running student brunches, diversity fairs and wellbeing pop-ups throughout the semester.",
  },
  {
    title: "Events Officer",
    description:
      "Coordinated student networking events and expert panels, using targeted promotion and post-event feedback to strengthen member engagement and improve the event experience.",
  },
  {
    title: "Foundation Volunteer",
    description:
      "Designed inclusive promotional materials, high clarity visual aids, and tailored learning programs to support students with diverse learning needs at a charitable foundation.",
  },
];

export default function Experience() {
  return (
    <section className="relative w-full min-h-screen bg-[#121212] py-32 px-6 md:px-12 z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Experience Header & Timeline */}
        <div className="mb-32">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center text-white drop-shadow-lg">
            Experience
          </h3>

          <div className="relative flex flex-col items-center w-full pb-8">
            {/* Center line */}
            <div className="absolute border-r border-white/20 h-full left-1/2 -translate-x-1/2" />

            {experienceList.map((exp, index) => (
              <div
                key={index}
                className="relative w-full md:w-8/12 lg:w-7/12 flex flex-col items-center mb-8 group"
              >
                <div className="z-20 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] focus:outline-none">
                  <p className="text-xs md:text-sm text-blue-400 font-medium mb-1 tracking-wide">
                    {exp.period}
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {exp.role}
                  </h4>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3 text-white/60 text-sm md:text-base">
                    <span className="font-medium text-white/90">{exp.company}</span>
                    <span className="hidden md:inline text-white/20">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Technical Skills (Left) + Extra-Curriculars (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 text-white relative inline-block">
                Education
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full" />
              </h3>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">
                      University of Melbourne
                    </h4>
                    <p className="text-blue-400 font-semibold text-lg">
                      Bachelor of Commerce
                    </p>
                    <p className="text-white/70 text-sm">
                      Double Major: Marketing and Finance
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm font-semibold w-fit">
                    🏆 First Class Honours
                  </div>
                </div>

                {/* Dean's Honours List Showcase */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3 font-semibold">
                    Academic Honours &amp; Distinction
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* 2025 */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-blue-500/25 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <h5 className="text-sm font-bold text-white">Dean&apos;s Honours List</h5>
                        </div>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          2025
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed mt-1">
                        Recognized among the top 3% percentile of students in the Faculty of Business and Economics.
                      </p>
                    </div>

                    {/* 2024 */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-blue-500/25 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <h5 className="text-sm font-bold text-white">Dean&apos;s Honours List</h5>
                        </div>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          2024
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed mt-1">
                        Consecutive merit selection honoring outstanding academic excellence and scholarship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 text-white relative inline-block">
                Technical Skills
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full" />
              </h3>
              <div className="space-y-6 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                {technicalSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-xs text-white/40 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 h-1.5 rounded-full"
                        style={{ width: skill.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Extra-Curriculars */}
          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 text-white relative inline-block">
                Extra-Curriculars
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full" />
              </h3>
              <div className="space-y-4">
                {extraCurriculars.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Project Section (Thought Café) matching reference site */}
        <section className="relative w-full bg-[#121212] py-20 px-6 md:px-12 z-20 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              {/* Text & Content */}
              <div className="flex-1 space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest">
                  <BookOpen className="w-4 h-4" />
                  Personal Project
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                  Founder of Thought Café
                </h2>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                  I manage an independent writing platform exploring current affairs,
                  marketing, culture and emerging ideas. I research complex topics,
                  develop accessible long-form articles, and use social media content
                  and audience engagement insights to refine how ideas are communicated
                  and build a consistent digital brand.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      ✍
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Content Strategy</h4>
                      <p className="text-white/40 text-sm">
                        Researching complex topics and translating diverse sources into clear, engaging analysis.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      📊
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Audience Insights</h4>
                      <p className="text-white/40 text-sm">
                        Planning content, adapting ideas for Instagram and using engagement insights to strengthen reach.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                  <a
                    href="https://thoughttapestry.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all group shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    <span>Visit Thought Café</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="https://www.instagram.com/mineka_thishakya.23/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all group"
                  >
                    <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>Follow @mineka_thishakya.23</span>
                  </a>
                </div>
              </div>

              {/* Profile Image Frame */}
              <div className="relative flex-shrink-0 order-1 lg:order-2">
                <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
                <div className="relative p-4 md:p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl">
                  <div className="bg-white p-6 rounded-[2rem] shadow-inner">
                    <img
                      src="/profile/Mineka_Headshot.png"
                      alt="Mineka Edirisooriya"
                      className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl"
                      style={{ scale: 1.02 }}
                    />
                  </div>
                  <div className="mt-8 text-center italic text-white/40 text-sm font-medium">
                    Minéka Edirisooriya • Melbourne, AU
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch (Footer) matching reference site */}
        <div className="pt-12 border-t border-white/5 text-center">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white">
            Get in Touch
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-white/70">
            <a
              href="mailto:mineka2005@gmail.com"
              className="text-xl md:text-2xl hover:text-white transition-colors"
            >
              mineka2005@gmail.com
            </a>
            <span className="hidden md:block text-white/20">|</span>
            <a
              href="https://www.linkedin.com/in/mineka2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:text-white transition-colors"
            >
              Check my Linkedin
            </a>
            <span className="hidden md:block text-white/20">|</span>
            <a
              href="tel:+61452113295"
              className="text-xl md:text-2xl hover:text-white transition-colors"
            >
              +61 452 113 295
            </a>
          </div>
          <p className="mt-16 text-white/20 text-sm font-mono tracking-widest uppercase">
            © 2026 Minéka Edirisooriya
          </p>
        </div>
      </div>
    </section>
  );
}
