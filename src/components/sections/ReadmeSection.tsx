"use client";

import { Sparkles, Shield, Cpu, Zap, Cloud } from "lucide-react";

export default function ReadmeSection() {
  return (
    <section id="readme-section" className="max-w-4xl fade-in-up font-sans text-[#cccccc] leading-relaxed pb-12">
      {/* README Header */}
      <div className="border-b border-[#3c3c3c] pb-4 mb-6">
        <div className="flex items-center gap-2 text-[#858585] text-xs mb-2 font-mono">
          <span>README.md</span>
          <span>●</span>
          <span>1.2 KB</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white font-sans tracking-tight flex items-center gap-3">
          Adapa SriVatsav <Sparkles size={24} className="text-[#4ec9b0]" />
        </h1>
        <p className="text-[#858585] mt-2 text-lg">
          Building production-grade full-stack apps, AI agents, and high-performance real-time platforms.
        </p>
      </div>

      {/* Shield Badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="inline-flex items-center gap-1.5 bg-[#264f78]/20 border border-[#264f78]/60 px-2.5 py-0.5 rounded text-xs font-semibold text-[#4fc1ff]">
          <Shield size={12} /> build: passing
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#4ec9b0]/20 border border-[#4ec9b0]/60 px-2.5 py-0.5 rounded text-xs font-semibold text-[#4ec9b0]">
          <Cpu size={12} /> AI-Agents: enabled
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#ce9178]/20 border border-[#ce9178]/60 px-2.5 py-0.5 rounded text-xs font-semibold text-[#ce9178]">
          <Zap size={12} /> status: open_to_collab
        </span>
      </div>

      {/* Markdown Content Blocks */}
      <div className="space-y-8 text-[15px]">
        {/* Summary */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2 border-b border-[#2d2d2d] pb-1">
            # Executive Summary
          </h2>
          <p className="mb-3">
            I&apos;m an engineering student focused on the convergence of <strong>Full-Stack Development</strong> and <strong>Artificial Intelligence</strong>. I specialize in creating intelligent pipelines, distributed environments, and high-fidelity real-time systems.
          </p>
          <p>
            My approach centers around <strong>extreme functionalism</strong>: designing clean API architectures, containerizing isolated environments, and writing highly resilient real-time services (using WebSockets & WebRTC).
          </p>
        </div>

        {/* Core Architecture Stack */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2 border-b border-[#2d2d2d] pb-1">
            # Core Stack & Workflow
          </h2>
          <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-4 font-mono text-[13px] leading-6 overflow-x-auto">
            <div className="text-[#6a9955]">{"// srivatsav.config.json"}</div>
            <div>{"{"}</div>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">&quot;languages&quot;</span>: [<span className="text-[#ce9178]">&quot;TypeScript&quot;</span>, <span className="text-[#ce9178]">&quot;JavaScript&quot;</span>, <span className="text-[#ce9178]">&quot;SQL&quot;</span>],
            </div>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">&quot;frontend&quot;</span>: [<span className="text-[#ce9178]">&quot;Next.js 14&quot;</span>, <span className="text-[#ce9178]">&quot;React&quot;</span>, <span className="text-[#ce9178]">&quot;Tailwind v4&quot;</span>],
            </div>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">&quot;backend&quot;</span>: [<span className="text-[#ce9178]">&quot;Node.js&quot;</span>, <span className="text-[#ce9178]">&quot;Express&quot;</span>, <span className="text-[#ce9178]">&quot;Socket.IO&quot;</span>, <span className="text-[#ce9178]">&quot;Prisma&quot;</span>],
            </div>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">&quot;ai_stack&quot;</span>: [<span className="text-[#ce9178]">&quot;GPT-4o-mini&quot;</span>, <span className="text-[#ce9178]">&quot;OpenRouter&quot;</span>],
            </div>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">&quot;devops&quot;</span>: [<span className="text-[#ce9178]">&quot;Docker&quot;</span>, <span className="text-[#ce9178]">&quot;Redis&quot;</span>, <span className="text-[#ce9178]">&quot;WebRTC&quot;</span>]
            </div>
            <div>{"}"}</div>
          </div>
        </div>

        {/* Philosophy */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2 border-b border-[#2d2d2d] pb-1">
            # Development Philosophy
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-2 text-[#a0a0a0]">
            <li>
              <strong className="text-[#e0e0e0]">Performance First:</strong> Zero-bloat rendering pipelines and lightweight, cached queries.
            </li>
            <li>
              <strong className="text-[#e0e0e0]">Native Intelligence:</strong> Integrating language models to enhance user workflows, not just as simple chat bots.
            </li>
            <li>
              <strong className="text-[#e0e0e0]">Extreme Isolation:</strong> Wrapping compute and runtime environments inside Docker to preserve local security.
            </li>
            <li>
              <strong className="text-[#e0e0e0]">Real-Time Always:</strong> Reducing relay servers and moving high-throughput data peer-to-peer.
            </li>
          </ul>
        </div>

        {/* Quote Block */}
        <blockquote className="border-l-4 border-[#4ec9b0] pl-4 py-1 italic text-[#858585] bg-[#252526]/30 rounded-r">
          &quot;The best code is not written for the compiler, but for the humans reading it, wrapped perfectly inside containers running effortlessly.&quot;
        </blockquote>
      </div>
    </section>
  );
}
