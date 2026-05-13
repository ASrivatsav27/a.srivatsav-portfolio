"use client";

import { useEffect, useRef } from "react";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number; color: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90, color: "#dcdcaa" },
      { name: "TypeScript", level: 85, color: "#569cd6" },
      { name: "SQL", level: 75, color: "#c586c0" },
      { name: "HTML / CSS", level: 92, color: "#ce9178" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 90, color: "#61dafb" },
      { name: "Next.js 14", level: 85, color: "#cccccc" },
      { name: "Node.js", level: 88, color: "#4ec9b0" },
      { name: "Express", level: 85, color: "#dcdcaa" },
      { name: "Socket.IO", level: 82, color: "#569cd6" },
      { name: "Tailwind CSS", level: 80, color: "#38bdf8" },
    ],
  },
  {
    title: "AI & APIs",
    skills: [
      { name: "GPT-4o-mini", level: 88, color: "#c586c0" },
      { name: "OpenRouter API", level: 85, color: "#4ec9b0" },
      { name: "Prompt Engineering", level: 80, color: "#569cd6" },
      { name: "LLM Integration", level: 85, color: "#ce9178" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 85, color: "#569cd6" },
      { name: "Git & GitHub", level: 90, color: "#ce9178" },
      { name: "MongoDB Atlas", level: 82, color: "#4ec9b0" },
      { name: "Redis", level: 78, color: "#f44747" },
      { name: "WebRTC", level: 80, color: "#dcdcaa" },
      { name: "CI/CD", level: 75, color: "#c586c0" },
    ],
  },
];

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar-fill");
            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.classList.add("animate");
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="max-w-5xl fade-in-up" ref={containerRef}>
      {/* Code Comment */}
      <p className="text-[#6a9955] text-sm mb-2 font-mono">
        {"// skills.json — tech stack & tools I actually use"}
      </p>

      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans">
        Skills
      </h2>
      <p className="text-[#858585] text-sm mb-10 font-mono">
        {'{ "status": "always_learning", "passion": "immeasurable" }'}
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title}>
            {/* Category Header */}
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#e0e0e0] font-bold mb-4 pb-2 border-b border-[#3c3c3c]">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  {/* Skill Name */}
                  <span className="text-[13px] text-[#a0a0a0] w-32 flex-shrink-0">
                    {skill.name}
                  </span>

                  {/* Progress Bar */}
                  <div className="flex-1 h-[6px] bg-[#333333] rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill h-full rounded-full"
                      style={
                        {
                          "--bar-width": `${skill.level}%`,
                          backgroundColor: skill.color,
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  {/* Percentage */}
                  <span
                    className="text-[12px] font-mono w-8 text-right font-medium"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
