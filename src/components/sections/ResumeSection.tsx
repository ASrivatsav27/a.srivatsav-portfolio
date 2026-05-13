"use client";

import { Download, ExternalLink } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume-section" className="max-w-4xl fade-in-up pb-12">
      {/* Header & Download */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#3c3c3c] pb-4">
        <div>
          <h2 className="text-3xl font-bold text-white font-sans flex items-center gap-2">
            Resume
          </h2>
          <p className="text-[#858585] text-sm mt-1">
            Professional Experience & Background
          </p>
        </div>
        
        <a 
          href="/resume.pdf" 
          download="Adapa_SriVatsav_Resume.pdf"
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4ec9b0] text-[#1e1e1e] text-sm font-bold rounded hover:bg-[#3dbda4] transition-all"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* Clean Resume Layout */}
      <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6 md:p-12 shadow-lg font-sans text-[#cccccc] leading-relaxed">
        {/* Name & Contact */}
        <div className="text-center mb-8 border-b border-[#3c3c3c] pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">Adapa SriVatsav</h1>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[13px] md:text-sm text-[#4ec9b0]">
            <a href="tel:+919989916427" className="hover:underline">+91-9989916427</a>
            <span className="text-[#5a5a5a]">|</span>
            <a href="mailto:srivatsava47@gmail.com" className="hover:underline">srivatsava47@gmail.com</a>
            <span className="text-[#5a5a5a]">|</span>
            <a href="https://linkedin.com/in/adapa-srivatsav" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin/adapa-srivatsav</a>
            <span className="text-[#5a5a5a]">|</span>
            <a href="https://github.com/ASrivatsav27" target="_blank" rel="noopener noreferrer" className="hover:underline">github/ASrivatsav27</a>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-bold text-white border-b border-[#3c3c3c] pb-1 mb-4 uppercase tracking-wider">Education</h2>
          
          <div className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <h3 className="font-bold text-[#e0e0e0] text-[15px]">Methodist College of Engineering & Technology <span className="font-normal text-[#858585] hidden md:inline">| Hyderabad, India</span></h3>
              <span className="text-sm text-[#4ec9b0] md:text-[#a0a0a0] whitespace-nowrap mt-1 md:mt-0">Sep 2023 – Sep 2027</span>
            </div>
            <p className="text-sm italic text-[#a0a0a0]">B.E. in Computer Science and Engineering (AI & ML)</p>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <h3 className="font-bold text-[#e0e0e0] text-[15px]">St Paul&apos;s High School <span className="font-normal text-[#858585] hidden md:inline">| Hyderabad</span></h3>
              <span className="text-sm text-[#4ec9b0] md:text-[#a0a0a0] whitespace-nowrap mt-1 md:mt-0">Graduated 2023</span>
            </div>
            <p className="text-sm italic text-[#a0a0a0]">High School | Grade: 9.8</p>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-bold text-white border-b border-[#3c3c3c] pb-1 mb-4 uppercase tracking-wider">Projects</h2>
          
          {/* beyondATS */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-[#e0e0e0] text-[15px]">beyondATS — AI Job Matching & Voice Screening</h3>
              <a href="https://github.com/ASrivatsav27/beyondATS" target="_blank" rel="noopener noreferrer" className="text-[#007acc] hover:underline text-sm flex items-center gap-1 shrink-0 ml-2">GitHub <ExternalLink size={12}/></a>
            </div>
            <p className="text-xs text-[#a0a0a0] italic mb-2">Next.js 14, TypeScript, MongoDB Atlas, GPT-4o-mini, OpenRouter API, Twilio</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-[13.5px] text-[#cccccc]">
              <li>Built a 4-stage AI hiring pipeline (resume parsing → hybrid skill matching → AI voice call → GPT-4o-mini evaluation) that cuts screening time to under 5 minutes; <strong className="text-[#e0e0e0]">3rd place at NYXORA MREM 2026 national hackathon</strong>.</li>
              <li>Designed a hybrid matching engine: 70% semantic skill graph (40+ skill families with exact/fuzzy/transitive matching) + 30% 8-dimensional embedding vectors with cosine similarity, and gradient-based adaptive weight learning (lr = 0.03) driven by employer invite/reject feedback.</li>
              <li>Integrated Retell AI + Twilio for real phone screening calls with dynamically generated questions per candidate resume; post-call transcript evaluated by GPT-4o-mini across 5 weighted dimensions.</li>
            </ul>
          </div>

          {/* FlowStack */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-[#e0e0e0] text-[15px]">FlowStack IDE — Browser-Based IDE with Docker Isolation</h3>
              <a href="https://github.com/ASrivatsav27/FlowStack" target="_blank" rel="noopener noreferrer" className="text-[#007acc] hover:underline text-sm flex items-center gap-1 shrink-0 ml-2">GitHub <ExternalLink size={12}/></a>
            </div>
            <p className="text-xs text-[#a0a0a0] italic mb-2">React, Node.js, Express, Docker, Socket.IO, MongoDB, Redis, JWT, Google OAuth, Monaco Editor, xterm.js</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-[13.5px] text-[#cccccc]">
              <li>Provisioned isolated Docker containers per project (Node / Python / Go / Rust images) with real PTY terminals via <code className="bg-[#2d2d2d] px-1 rounded text-[#dcdcaa] font-mono text-xs">node-pty</code>, volume-mounted workspaces, and live file-tree updates via <code className="bg-[#2d2d2d] px-1 rounded text-[#dcdcaa] font-mono text-xs">chokidar</code> streamed over Socket.IO.</li>
              <li>Built APEX AI agent (GPT-4o-mini via OpenRouter) that reads all workspace files as context, detects intent, scaffolds full React/Vite and Next.js projects, and pipes install commands to the terminal automatically.</li>
              <li>Secured the platform with JWT stored in httpOnly cookies, Google OAuth via Passport.js, and a Redis token blacklist for immediate session invalidation on logout.</li>
            </ul>
          </div>

          {/* WebRTC */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-[#e0e0e0] text-[15px]">WebRTC P2P Video Call App</h3>
              <a href="https://github.com/ASrivatsav27/Peer-Link" target="_blank" rel="noopener noreferrer" className="text-[#007acc] hover:underline text-sm flex items-center gap-1 shrink-0 ml-2">GitHub <ExternalLink size={12}/></a>
            </div>
            <p className="text-xs text-[#a0a0a0] italic mb-2">React, TypeScript, Vite, Node.js, Express, Socket.IO, WebRTC</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-[13.5px] text-[#cccccc]">
              <li>Implemented the full WebRTC handshake from scratch (createOffer → setLocalDescription → answer → setRemoteDescription → ICE candidate exchange) using Google STUN (<code className="bg-[#2d2d2d] px-1 rounded text-[#dcdcaa] font-mono text-xs">stun.l.google.com:19302</code>) for public IP discovery.</li>
              <li>Used Socket.IO exclusively for SDP/ICE signaling so that all video and audio flows peer-to-peer with zero server relay once the P2P tunnel is established.</li>
            </ul>
          </div>

          {/* AI Voice Agent */}
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-[#e0e0e0] text-[15px]">AI Voice Agent for Automated Phone Calls</h3>
              <a href="https://github.com/ASrivatsav27/Voice-Agent-for-Automated-Phone-Calls" target="_blank" rel="noopener noreferrer" className="text-[#007acc] hover:underline text-sm flex items-center gap-1 shrink-0 ml-2">GitHub <ExternalLink size={12}/></a>
            </div>
            <p className="text-xs text-[#a0a0a0] italic mb-2">React, Node.js, Express, Prisma ORM, SQLite</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-[13.5px] text-[#cccccc]">
              <li>Built a full-stack AI customer support platform that automates voice call interactions using Retell AI, with persistent conversation history tracking via Prisma ORM and a real-time call analytics dashboard; <strong className="text-[#e0e0e0]">1st place at HackNovate 2025 national hackathon</strong>.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-bold text-white border-b border-[#3c3c3c] pb-1 mb-4 uppercase tracking-wider">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-2.5 text-[13.5px]">
            <div><strong className="text-[#e0e0e0] inline-block w-[140px]">Languages:</strong> JavaScript, TypeScript, SQL, HTML / CSS</div>
            <div><strong className="text-[#e0e0e0] inline-block w-[140px]">CS Fundamentals:</strong> Data Structures, Algorithms, OOP, System Design, REST API Design, Agile</div>
            <div><strong className="text-[#e0e0e0] inline-block w-[140px]">Frameworks:</strong> React, Next.js 14, Node.js, Express, Tailwind CSS, Prisma ORM, Mongoose, Socket.IO, Passport.js</div>
            <div><strong className="text-[#e0e0e0] inline-block w-[140px]">AI & APIs:</strong> GPT-4o-mini, OpenRouter API, LLM Integration, Prompt Engineering, Webhooks</div>
            <div><strong className="text-[#e0e0e0] inline-block w-[140px]">Real-Time & Auth:</strong> WebRTC, WebSockets, JWT Authentication, Google OAuth 2.0, httpOnly Cookies, Redis Token Blacklist</div>
            <div><strong className="text-[#e0e0e0] inline-block w-[140px]">Databases:</strong> MongoDB Atlas, Redis, MySQL, SQLite</div>
            <div><strong className="text-[#e0e0e0] inline-block w-[140px]">DevOps & Tools:</strong> Docker, Git, GitHub, CI/CD Pipelines, Vite, VS Code, Twilio, node-pty, Monaco Editor</div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white border-b border-[#3c3c3c] pb-1 mb-4 uppercase tracking-wider">Achievements</h2>
          <ul className="list-disc list-outside ml-4 space-y-2 text-[13.5px]">
            <li><strong className="text-[#e0e0e0]">1st Place</strong> — National-Level Hackathon, Google Developer Community <strong>(HackNovate 2025)</strong> — AI Voice Agent for Automated Phone Calls</li>
            <li><strong className="text-[#e0e0e0]">3rd Place</strong> — National-Level Hackathon, Google Developer Community <strong>(NYXORA MREM 2026)</strong> — beyondATS AI Hiring Platform</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
