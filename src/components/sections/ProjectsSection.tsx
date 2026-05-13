"use client";

import {
  ExternalLink,
  BrainCircuit,
  Monitor,
  Video,
  Mic,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface Project {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  categories: string[];
  categoryColor: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  achievement?: string;
}

const PROJECTS: Project[] = [
  {
    id: "beyondats",
    icon: BrainCircuit,
    iconColor: "#c586c0",
    categories: ["AI", "HIRING", "FULL STACK"],
    categoryColor: "#c586c0",
    title: "beyondATS",
    description:
      "4-stage AI hiring pipeline (resume parsing → hybrid skill matching → AI voice call → GPT-4o-mini evaluation) that cuts screening time to under 5 minutes. Hybrid matching: 70% semantic skill graph + 30% embedding vectors with cosine similarity and adaptive weight learning.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "GPT-4o-mini",
      "Retell AI",
      "Twilio",
    ],
    github: "https://github.com/ASrivatsav27",
    achievement: "🥉 3rd Place — NYXORA MREM 2026",
  },
  {
    id: "flowstack",
    icon: Monitor,
    iconColor: "#569cd6",
    categories: ["DEV TOOLS", "DOCKER", "AI"],
    categoryColor: "#569cd6",
    title: "FlowStack IDE",
    description:
      "Browser-based IDE with isolated Docker containers per project, real PTY terminals via node-pty, volume-mounted workspaces, and APEX AI agent that reads workspace context, detects intent, scaffolds projects, and pipes install commands automatically.",
    tech: [
      "React",
      "Node.js",
      "Docker",
      "Socket.IO",
      "MongoDB",
      "Redis",
      "Monaco Editor",
    ],
    github: "https://github.com/ASrivatsav27",
  },
  {
    id: "webrtc",
    icon: Video,
    iconColor: "#4ec9b0",
    categories: ["REAL-TIME", "WEBRTC", "P2P"],
    categoryColor: "#4ec9b0",
    title: "WebRTC P2P Video Call",
    description:
      "Full WebRTC handshake from scratch — createOffer → setLocalDescription → answer → setRemoteDescription → ICE candidate exchange using Google STUN for public IP discovery. All video/audio flows peer-to-peer with zero server relay.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Socket.IO", "WebRTC"],
    github: "https://github.com/ASrivatsav27",
  },
  {
    id: "voiceagent",
    icon: Mic,
    iconColor: "#dcdcaa",
    categories: ["AI", "VOICE", "FULL STACK"],
    categoryColor: "#dcdcaa",
    title: "AI Voice Agent",
    description:
      "Full-stack AI customer support platform automating voice call interactions using Retell AI, with persistent conversation history via Prisma ORM and a real-time call analytics dashboard.",
    tech: ["React", "Node.js", "Express", "Prisma", "SQLite", "Retell AI"],
    github: "https://github.com/ASrivatsav27",
    achievement: "🥇 1st Place — HackNovate 2025",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="max-w-5xl fade-in-up">
      {/* Code Comment */}
      <p className="text-[#6a9955] text-sm mb-2 font-mono">
        {"// projects.ts : things I've built & shipped"}
      </p>

      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans">
        Projects
      </h2>
      <p className="text-[#858585] text-sm mb-8 font-mono">
        {"const projects = [ ...shipped, ...building ]"}
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => {
          const Icon = project.icon;
          return (
            <article
              key={project.id}
              className="project-card border border-[#3c3c3c] rounded-lg p-6 bg-[#252526]/40 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <Icon
                  size={28}
                  style={{ color: project.iconColor }}
                  className="flex-shrink-0"
                />
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#a0a0a0] border border-[#3c3c3c] rounded px-2 py-1 hover:border-[#4ec9b0] hover:text-[#4ec9b0] transition-colors"
                    >
                      <GithubIcon size={12} />
                      GitHub
                      <ExternalLink size={10} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#1e1e1e] bg-[#4ec9b0] rounded px-2 py-1 hover:bg-[#3dbda4] transition-colors"
                    >
                      Live
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] tracking-widest font-bold uppercase"
                    style={{ color: project.categoryColor }}
                  >
                    {cat}
                    {cat !==
                      project.categories[project.categories.length - 1] &&
                      " ·"}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 font-sans">
                {project.title}
              </h3>

              {/* Achievement Badge */}
              {project.achievement && (
                <div className="mb-3 px-2 py-1 bg-[#4ec9b0]/10 border border-[#4ec9b0]/30 rounded text-xs text-[#4ec9b0] font-medium inline-block w-fit">
                  {project.achievement}
                </div>
              )}

              {/* Description */}
              <p className="text-[#a0a0a0] text-[13px] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] text-[#cccccc] border border-[#3c3c3c] rounded px-2 py-0.5 bg-[#1e1e1e]/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
