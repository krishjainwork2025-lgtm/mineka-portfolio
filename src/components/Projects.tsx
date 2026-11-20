"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export interface Project {
  id: string;
  role: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  details: string[];
}

export const projects: Project[] = [
  {
    id: "evergreen",
    role: "Strategy & NPD",
    title: "Evergreen Beverages",
    description:
      "Evergreen Beverages is a hypothetical premium tea merchant searching for its next beverage growth category in Australia. On a KPMG-led engagement, our team was challenged to discover these growth categories through which I owned the Ready-to-Drink tea workstream from the first market scan through to the finished product concept and launch plan of a flagship product.",
    image: "/projects/evergreen/Cover.png",
    gallery: [
      "/projects/evergreen/Cover.png",
      "/projects/evergreen/Product Mockup.png",
      "/projects/evergreen/Market Gap Analysis.png",
      "/projects/evergreen/Market Map.png",
      "/projects/evergreen/Positioning Map.png",
    ],
    details: [
      "Designed and ran a two-stage screen that took all 16 Australian beverage categories down to a single recommendation.",
      "Mapped the competitive and consumer landscape behind that choice, uncovering whitespace around functional benefits, ritual consumption and ethical sourcing.",
      "Settled on Wellness Seekers as the target customer segment as they combined the sharpest unmet need with a real willingness to pay.",
      "Built the concept out into a premium functional tea centred on gentle wellness benefits and ethically sourced ingredients.",
      "Used AI-assisted mock-ups to bring flavour architecture, packaging, positioning, and market launch pathways to life.",
    ],
  },
  {
    id: "16mille",
    role: "Digital Marketing Strategy",
    title: "16Mille Jewellery",
    description:
      "16Mille is a Melbourne-based accessible luxury jewellery brand known for a modern, minimalist and distinctly French aesthetic. After our team audited the brand's full digital ecosystem, I took ownership of the email channel and rebuilt it from a neglected broadcast list into a structured customer nurture system that carries the brand's story from first subscription through to repeat purchase.",
    image: "/projects/16mille/Cover.png",
    gallery: [
      "/projects/16mille/Cover.png",
      "/projects/16mille/Welcome Email.png",
      "/projects/16mille/Email Workflow.png",
      "/projects/16mille/New Collection Drop.png",
      "/projects/16mille/Web Form.png",
    ],
    details: [
      "Isolated email as the weakest link in the funnel by benchmarking it against 16Mille's other digital channels and interrogating open, click-through and unsubscribe rates.",
      "Ran design thinking workshops with the founders to draw out the brand's ethos, its ideal customer and the aesthetic instincts behind the label.",
      "Codified what surfaced into a working brand voice and visual identity system spanning tone, imagery, design principles and messaging standards.",
      "Designed the email journey end to end, mapping the customer lifecycle across welcome, post-purchase, nurture and new collection flows.",
      "Built reusable templates that hold the brand voice while doing real conversion work each time they are sent.",
    ],
  },
  {
    id: "bmw",
    role: "Customer Experience Design",
    title: "BMW AI Genius",
    description:
      "Buying a premium vehicle should feel exciting, but BMW's own customers were telling a different story: too many models, too many trims and no clear way to know which car fit their life. During a brand consulting project with BMW Group, our group built AI Genius, a conversational experience that gets to know a customer before it recommends a car. I designed the customer journey and the conversation architecture underneath it.",
    image: "/projects/bmw/Cover.png",
    gallery: [
      "/projects/bmw/Cover.png",
      "/projects/bmw/AI Genius Conversation Flow.png",
      "/projects/bmw/Chat - 1.png",
      "/projects/bmw/Chat - 2.png",
      "/projects/bmw/AI Genius Report.png",
    ],
    details: [
      "Researched where next-generation automotive buyers experienced friction during vehicle consideration, finding confidence building was key.",
      "Structured the conversation itself as a six-stage journey, moving from customer profile and driving context through to lifestyle, emotion, and design.",
      "Mapped answers into five customer parameters that together resolved into one of eight Driver Archetypes.",
      "Took that logic into Figma and built it into an interactive prototype, demonstrating seamless flow through to vehicle recommendation and test-drive booking.",
    ],
  },
  {
    id: "ai-matrix",
    role: "Marketing Research & AI",
    title: "AI Marketing Strategy Matrix",
    description:
      "A university assignment turned into a real question: how much should marketers actually trust AI to build a campaign? I gave three LLMs (ChatGPT, Gemini and Grok) the identical brief, developing a social media campaign for a new eco-friendly coffee cup, then pushed each output through prompt engineering and edge cases to see where it held up and where it broke.",
    image: "/projects/ai-matrix/Cover.png",
    gallery: [
      "/projects/ai-matrix/Cover.png",
      "/projects/ai-matrix/AI Marketing Strategy Matrix.png",
      "/projects/ai-matrix/Impact of Prompt Engineering.png",
      "/projects/ai-matrix/Initial Output Quality.png",
    ],
    details: [
      "Ran a controlled experiment across the three models on one identical brief, scoring each on target-audience alignment, originality, and fundamentals.",
      "Stress-tested outputs through iterative prompt engineering and deliberately awkward edge cases.",
      "Revealed that models consistently struggled with cultural sensitivity, ethical judgement and contextual nuance.",
      "Turned that pattern into the AI Marketing Strategy Matrix, sorting tasks into four categories: Automators, Accelerators, Guardrails and Blind Spots.",
    ],
  },
  {
    id: "sustainability",
    role: "Consumer Behaviour Research",
    title: "Sustainability on the Tag",
    description:
      "Why do some sustainability labels make a shopper trust a product instantly, while others get scrolled past? I set out to answer that through an integrative review of 42 academic studies to trace how consumers historically notice, interpret and act on clothing eco-labels and discover how that knowledge can shape the thinking of brands and policymakers.",
    image: "/projects/sustainability/Cover.png",
    gallery: [
      "/projects/sustainability/Cover.png",
      "/projects/sustainability/Theoretical Framework.png",
      "/projects/sustainability/Literature Screening Chart.png",
      "/projects/sustainability/Abstract.png",
      "/projects/sustainability/Sustainable Development Goal 12.jpg",
    ],
    details: [
      "Defined the research inquiry and worked through 42 empirical studies to find patterns underneath fragmented findings.",
      "Read evidence through three theoretical lenses: Theory of Planned Behaviour, Elaboration Likelihood Model, and Signalling Theory.",
      "Built a single integrated framework linking consumer psychology, product cues, and visual label design.",
      "Converted the academic framework into direct recommendations for fashion brands and policymakers aligning with UN SDG 12.",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setActiveGalleryImage(project.image);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setActiveGalleryImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Portfolio
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-[0.2em] font-light">
            Examples of my work
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-[#1a1a1a] break-inside-avoid mb-8"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110 opacity-100 block"
                style={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1 block">
                  {project.role}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center text-white/60 text-xs font-medium">
                  View Details{" "}
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal matching reference site */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] cursor-zoom-out"
            />

            {/* Modal Dialog */}
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="relative bg-[#1a1a1a] w-full max-w-4xl h-full max-h-[90vh] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-auto flex flex-col md:flex-row">
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md transition-colors text-white z-50"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Media viewer & gallery */}
                <div className="w-full md:w-1/2 h-[400px] md:h-full relative overflow-hidden bg-[#0a0a0a] flex flex-col">
                  <div className="flex-1 relative overflow-hidden flex items-center justify-center p-4">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeGalleryImage || selectedProject.image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={activeGalleryImage || selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Gallery Strip */}
                  {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                    <div className="p-4 bg-white/5 backdrop-blur-md border-t border-white/10 flex gap-3 overflow-x-auto no-scrollbar">
                      {selectedProject.gallery.map((img, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border transition-all cursor-pointer group ${
                            activeGalleryImage === img
                              ? "border-blue-500 ring-2 ring-blue-500/30"
                              : "border-white/10"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveGalleryImage(img);
                          }}
                        >
                          <img
                            src={img}
                            alt={`Gallery artifact ${idx + 1}`}
                            className={`w-full h-full object-cover transition-opacity ${
                              activeGalleryImage === img
                                ? "opacity-100"
                                : "opacity-60 group-hover:opacity-100"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Description & Details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto relative">
                  <span className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-4 block">
                    {selectedProject.role}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {selectedProject.title}
                  </h2>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                        What I Did
                      </h4>
                    </div>

                    <ul className="space-y-4">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-white/50 text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
