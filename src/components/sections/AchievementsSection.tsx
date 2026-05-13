"use client";

import { Trophy, Award, Calendar } from "lucide-react";

interface Achievement {
  id: string;
  date: string;
  title: string;
  organization: string;
  project: string;
  description: string;
  tech: string[];
  place: string;
  placeColor: string;
  active: boolean;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hacknovate",
    date: "2025",
    title: "1st Place — HackNovate 2025",
    organization: "Google Developer Community",
    project: "AI Voice Agent for Automated Phone Calls",
    description:
      "Built a full-stack AI customer support platform automating voice call interactions using Retell AI, with persistent conversation history tracking via Prisma ORM and a real-time call analytics dashboard.",
    tech: ["React", "Node.js", "Express", "Prisma", "SQLite", "Retell AI"],
    place: "1st",
    placeColor: "#dcdcaa",
    active: true,
  },
  {
    id: "nyxora",
    date: "2026",
    title: "3rd Place — NYXORA MREM 2026",
    organization: "Google Developer Community",
    project: "beyondATS — AI Hiring Platform",
    description:
      "4-stage AI hiring pipeline with hybrid skill matching engine combining semantic skill graphs and embedding vectors, integrated with Retell AI + Twilio for real phone screening calls.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "GPT-4o-mini",
      "Retell AI",
      "Twilio",
    ],
    place: "3rd",
    placeColor: "#ce9178",
    active: false,
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements-section" className="max-w-4xl fade-in-up">
      {/* Code Comment */}
      <p className="text-[#6a9955] text-sm mb-2 font-mono">
        {"// achievements.ts - the wins so far"}
      </p>

      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans">
        Achievements
      </h2>
      <p className="text-[#858585] text-sm mb-10 font-mono">
        {"interface Career extends Timeline {}"}
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-[#3c3c3c]" />

        <div className="space-y-10">
          {ACHIEVEMENTS.map((achievement) => (
            <div key={achievement.id} className="relative pl-10">
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${achievement.active
                    ? "border-[#4ec9b0] bg-[#4ec9b0]/20 timeline-dot-pulse"
                    : "border-[#858585] bg-[#252526]"
                  }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${achievement.active ? "bg-[#4ec9b0]" : "bg-[#858585]"
                    }`}
                />
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={14} className="text-[#858585]" />
                <span className="text-[#858585] text-sm">
                  {achievement.date}
                </span>
              </div>

              {/* Title */}
              <div className="flex items-start gap-3 mb-1">
                {achievement.place === "1st" ? (
                  <Trophy size={20} className="text-[#dcdcaa] flex-shrink-0 mt-0.5" />
                ) : (
                  <Award size={20} className="text-[#ce9178] flex-shrink-0 mt-0.5" />
                )}
                <h3 className="text-xl font-bold text-white font-sans leading-tight">
                  {achievement.title}
                </h3>
              </div>

              {/* Organization */}
              <p className="text-[#4ec9b0] text-sm mb-2 ml-8">
                @ {achievement.organization}
              </p>

              {/* Project Name */}
              <p className="text-[#569cd6] text-sm font-medium mb-2 ml-8">
                {achievement.project}
              </p>

              {/* Description */}
              <p className="text-[#a0a0a0] text-[13px] leading-relaxed mb-3 ml-8">
                {achievement.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 ml-8">
                {achievement.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] text-[#cccccc] border border-[#3c3c3c] rounded px-2 py-0.5 bg-[#1e1e1e]/50 hover:border-[#4ec9b0] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
