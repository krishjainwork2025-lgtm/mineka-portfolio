import React from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="w-full relative bg-[#121212]">
      {/* 1. Sticky Scrollytelling 500vh Section with Canvas Frame Scrubber and Parallax Overlay */}
      <ScrollyCanvas totalFrames={125} />

      {/* 2. Portfolio Work Grid (Masonry Columns & Interactive Modal) */}
      <Projects />

      {/* 3. Experience Timeline, Education, Skills, Extra-Curriculars, Thought Café, and Contact */}
      <Experience />
    </main>
  );
}
