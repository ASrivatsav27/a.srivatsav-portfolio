"use client";

import {
  Mail,
  Phone,
  FolderOpen,
  User,
  Send,
  ArrowUpRight,
  Rocket,
  Trophy,
  Code2,
  Infinity,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useState, useEffect } from "react";

function TypewriterHTML({ html, delay = 15 }: { html: string; delay?: number }) {
  const [currentHtml, setCurrentHtml] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let isTag = false;
    let currentText = "";
    
    setCurrentHtml("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (i >= html.length) {
        setIsTyping(false);
        clearInterval(interval);
        return;
      }
      
      if (html[i] === "<") {
        let tag = "";
        while (i < html.length && html[i] !== ">") {
          tag += html[i];
          i++;
        }
        tag += ">";
        currentText += tag;
        i++; // move past >
      } else {
        currentText += html[i];
        i++;
      }
      
      setCurrentHtml(currentText);
    }, delay);

    return () => clearInterval(interval);
  }, [html, delay]);

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: currentHtml }} />
      <span 
        className={`inline-block w-2 h-4 ml-1 bg-[#cccccc] align-middle ${isTyping ? 'animate-none' : 'animate-pulse'}`} 
        style={{ animationDuration: '1s' }}
      />
    </>
  );
}

export default function HomeSection({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <section id="home-section" className="max-w-4xl fade-in-up">
      {/* Code Comment */}
      <p className="text-[#6a9955] text-sm mb-6 font-mono">
        {"// hello world !! Welcome to my portfolio"}
      </p>

      {/* Name */}
      <h1 className="mb-6 flex flex-wrap gap-x-3 md:gap-x-4">
        <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#e0e0e0] tracking-tight leading-[0.95] font-sans">
          A.
        </span>
        <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#4ec9b0] tracking-tight leading-[0.95] font-sans glow-accent">
          SriVatsav
        </span>
      </h1>

      {/* Role Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          "Full-Stack Developer",
          "AI & ML",
          "Real-Time Systems",
          "B.E. CSE (AI & ML)",
        ].map((role) => (
          <span
            key={role}
            className="flex items-center gap-1.5 px-3 py-1 border border-[#3c3c3c] rounded-full text-[13px] text-[#cccccc] hover:border-[#4ec9b0] hover:text-[#4ec9b0] transition-colors cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ec9b0]" />
            {role}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <p className="text-[#858585] text-sm mb-6 flex items-center gap-2">
        Building AI pipelines, real-time systems & developer tooling
        <Rocket size={16} className="text-[#4ec9b0]" />
      </p>

      {/* Bio */}
      <p className="text-[#a0a0a0] text-[15px] leading-relaxed mb-8 max-w-2xl min-h-[70px] md:min-h-[50px]">
        <TypewriterHTML 
          html={`I live at the convergence of <strong class="text-white">full-stack development</strong>, <strong class="text-[#4ec9b0]">AI/ML</strong>, and <strong class="text-[#c586c0]">real-time systems</strong>. I build systems that are genuinely <strong class="text-white">intelligent and scalable</strong>.`} 
          delay={65}
        />
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => {
            if (onNavigate) onNavigate("projects");
            else window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }));
          }}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#4ec9b0] text-[#1e1e1e] font-semibold text-sm rounded hover:bg-[#3dbda4] transition-colors cursor-pointer"
        >
          <FolderOpen size={16} />
          Projects
        </button>
        <button
          onClick={() => {
            if (onNavigate) onNavigate("about");
            else window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' }));
          }}
          className="flex items-center gap-2 px-5 py-2.5 border border-[#3c3c3c] text-[#cccccc] text-sm rounded hover:border-[#4ec9b0] hover:text-[#4ec9b0] transition-colors cursor-pointer"
        >
          <User size={16} />
          About Me
        </button>
        <button
          onClick={() => {
            if (onNavigate) onNavigate("contact");
            else window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
          }}
          className="flex items-center gap-2 px-5 py-2.5 border border-[#3c3c3c] text-[#cccccc] text-sm rounded hover:border-[#4ec9b0] hover:text-[#4ec9b0] transition-colors cursor-pointer"
        >
          <Send size={16} />
          Contact
        </button>
      </div>

      {/* Stats */}
      <div className="border border-[#3c3c3c] rounded-lg p-6 mb-8 bg-[#1e1e1e]/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2+", label: "YEARS", icon: Code2 },
            { value: "4+", label: "PROJECTS", icon: Rocket },
            { value: "2", label: "HACKATHON WINS", icon: Trophy },
            { value: "∞", label: "CURIOSITY", icon: Infinity },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center count-up">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Icon size={18} className="text-[#4ec9b0]" />
                <span className="text-3xl font-bold text-white font-mono">
                  {value}
                </span>
              </div>
              <span className="text-[11px] tracking-widest text-[#858585] uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-2">
        {[
          {
            icon: GithubIcon,
            label: "GitHub",
            href: "https://github.com/ASrivatsav27",
          },
          {
            icon: LinkedinIcon,
            label: "LinkedIn",
            href: "https://linkedin.com/in/adapa-srivatsav",
          },
          {
            icon: Mail,
            label: "Email",
            href: "mailto:srivatsava47@gmail.com",
          },
          {
            icon: Phone,
            label: "Phone",
            href: "tel:+919989916427",
          },
        ].map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link flex items-center gap-2 px-3 py-1.5 border border-[#3c3c3c] rounded text-[13px] text-[#a0a0a0] hover:text-[#4ec9b0] hover:border-[#4ec9b0] transition-all"
          >
            <Icon size={15} />
            {label}
            <ArrowUpRight size={12} className="opacity-50" />
          </a>
        ))}
      </div>
    </section>
  );
}
