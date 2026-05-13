"use client";

import {
  Cpu,
  Radio,
  Globe,
  Container,
  BrainCircuit,
  Rocket,
  GraduationCap,
  School,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-section" className="max-w-4xl fade-in-up">
      {/* Code Comment */}
      <p className="text-[#6a9955] text-sm mb-2 font-mono">
        {"<!-- about.html - Adapa SriVatsav -->"}
      </p>

      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans">
        About Me
      </h2>
      <p className="text-[#858585] text-sm mb-8 font-mono">
        {"// who I am · what I do · where I build"}
      </p>

      {/* Bio Card */}
      <div className="border border-[#3c3c3c] rounded-lg p-6 mb-10 bg-[#252526]/50">
        <p className="text-[#a0a0a0] text-[15px] leading-relaxed">
          Hi! I&apos;m{" "}
          <strong className="text-[#4ec9b0]">Adapa SriVatsav</strong>, a
          full-stack developer and AI enthusiast living at the convergence of{" "}
          <strong className="text-white">backend engineering</strong>,{" "}
          <strong className="text-[#569cd6]">AI/ML</strong>, and{" "}
          <strong className="text-[#c586c0]">real-time systems</strong>. I love
          building systems that are not just functional but genuinely{" "}
          <strong className="text-white">intelligent and scalable</strong>.
          Currently pursuing B.E. in Computer Science (AI & ML) at Methodist
          College of Engineering & Technology, Hyderabad.
        </p>
      </div>

      {/* Current Focus */}
      <h3 className="text-sm tracking-[0.2em] uppercase text-[#4ec9b0] font-bold mb-6">
        Current Focus
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          {
            icon: Cpu,
            text: "Building AI-powered hiring pipelines & voice agents",
          },
          {
            icon: Radio,
            text: "Deep interest in real-time systems — WebRTC, WebSockets",
          },
          {
            icon: Globe,
            text: "Full-stack development with React, Next.js & Node.js",
          },
          {
            icon: Container,
            text: "Docker containerization & isolated dev environments",
          },
          {
            icon: BrainCircuit,
            text: "LLM integration, prompt engineering & AI agents",
          },
          {
            icon: Rocket,
            text: "Always learning, always shipping",
          },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 text-[14px]">
            <Icon
              size={18}
              className="text-[#4ec9b0] mt-0.5 flex-shrink-0"
            />
            <span className="text-[#a0a0a0]">{text}</span>
          </div>
        ))}
      </div>

      {/* Education */}
      <h3 className="text-sm tracking-[0.2em] uppercase text-[#4ec9b0] font-bold mb-6">
        Education
      </h3>
      <div className="space-y-4">
        {/* College */}
        <div className="border border-[#3c3c3c] rounded-lg p-5 bg-[#252526]/30 hover:border-[#4ec9b0]/30 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-1 gap-1 sm:gap-0">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-[#dcdcaa] flex-shrink-0" />
              <strong className="text-white text-[15px] leading-tight">
                Methodist College of Engineering & Technology
              </strong>
            </div>
            <span className="text-[#858585] text-sm sm:whitespace-nowrap ml-7 sm:ml-4">
              Sep 2023 – Sep 2027
            </span>
          </div>
          <p className="text-[#858585] text-sm ml-7 mb-1">
            Hyderabad, India
          </p>
          <p className="text-[#569cd6] text-sm ml-7 font-medium">
            B.E. in Computer Science and Engineering (AI & ML)
          </p>
        </div>

        {/* School */}
        <div className="border border-[#3c3c3c] rounded-lg p-5 bg-[#252526]/30 hover:border-[#4ec9b0]/30 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-1 gap-1 sm:gap-0">
            <div className="flex items-center gap-2">
              <School size={18} className="text-[#dcdcaa] flex-shrink-0" />
              <strong className="text-white text-[15px] leading-tight">
                St Paul&apos;s High School
              </strong>
            </div>
            <span className="text-[#858585] text-sm sm:whitespace-nowrap ml-7 sm:ml-4">
              Graduated 2023
            </span>
          </div>
          <p className="text-[#858585] text-sm ml-7 mb-1">Hyderabad</p>
          <p className="text-[#569cd6] text-sm ml-7 font-medium">
            Grade:{" "}
            <span className="text-[#4ec9b0]">9.8</span>
          </p>
        </div>
      </div>
    </section>
  );
}
