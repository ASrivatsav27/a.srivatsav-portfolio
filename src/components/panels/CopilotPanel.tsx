"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, Sparkles, MessageSquare } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Tell me about beyondATS?",
  "What is FlowStack IDE?",
  "What are your top skills?",
  "Tell me about your hackathon wins?",
  "How can I contact SriVatsav?",
];

const BOT_RESPONSES: Record<string, string> = {
  beyondats: `**beyondATS** is an AI Job Matching & Voice Screening pipeline built with **Next.js 14, TypeScript, MongoDB Atlas, Retell AI, Twilio, and GPT-4o-mini**.

Key highlights:
- 🚀 4-stage AI hiring pipeline that cuts screening time to under 5 mins.
- 🧠 Hybrid matching engine: 70% semantic skill graph + 30% 8D embedding vectors.
- 📞 Retell AI + Twilio integration for real, live phone screening calls.
- 🥉 Won **3rd Place** at the NYXORA MREM 2026 national hackathon!`,

  flowstack: `**FlowStack IDE** is a browser-based IDE featuring Docker isolation.

Technical stack includes: **React, Node.js, Express, Docker, Socket.IO, Redis, Monaco Editor, xterm.js**.
- 🐳 Provisions isolated Docker containers per project with real PTY terminals via node-pty.
- 🤖 Integrates **APEX AI agent** (GPT-4o-mini) which scaffolds projects, detects build/fix intent, and runs install commands automatically.
- 🔒 Fully secured with JWT in httpOnly cookies, Google OAuth, and Redis token blacklisting.`,

  skills: `Here is a quick overview of SriVatsav's core stack:

- 💻 **Languages:** JavaScript, TypeScript, SQL, HTML / CSS
- 🛠️ **Frameworks:** React, Next.js 14, Node.js, Express, Prisma, TailwindCSS, Socket.IO
- 🤖 **AI & APIs:** GPT-4o-mini, Prompt Engineering, Webhooks
- 📡 **Real-Time & Auth:** WebRTC, WebSockets, JWT, Redis Token Blacklist
- ⚙️ **DevOps:** Docker, Git/GitHub, CI/CD, Vite, Monaco Editor`,

  hackathon: `SriVatsav is a **2x National Hackathon Winner**:

1. 🥇 **1st Place** — Google Developer Community **HackNovate 2025** for building the "AI Voice Agent for Automated Phone Calls".
2. 🥉 **3rd Place** — Google Developer Community **NYXORA MREM 2026** for the "beyondATS AI Hiring Platform".`,

  contact: `You can connect with SriVatsav via:

- 📧 **Email:** [srivatsava47@gmail.com](mailto:srivatsava47@gmail.com)
- 💼 **LinkedIn:** [linkedin/adapa-srivatsav](https://linkedin.com/in/adapa-srivatsav)
- 🐙 **GitHub:** [github/ASrivatsav27](https://github.com/ASrivatsav27)
- 📞 **Phone:** [+91-9989916427](tel:+919989916427)

Feel free to reach out for collabs, opportunities, or a chat!`,
};

export default function CopilotPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I'm SriVatsav's Copilot 👋. 

I can answer any questions you have about his projects, technical stack, hackathon achievements, or background. What would you like to explore today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const generateResponse = (query: string) => {
    const lower = query.toLowerCase();
    if (lower.includes("beyond") || lower.includes("beyondats") || /\bats\b/.test(lower)) return BOT_RESPONSES.beyondats;
    if (lower.includes("flowstack") || lower.includes("ide")) return BOT_RESPONSES.flowstack;
    if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) return BOT_RESPONSES.skills;
    if (lower.includes("hackathon") || lower.includes("win") || lower.includes("achieve") || lower.includes("place")) return BOT_RESPONSES.hackathon;
    if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("phone") || lower.includes("connect") || lower.includes("hire") || lower.includes("talk") || lower.includes("sriovatsav") || lower.includes("srivatsav")) return BOT_RESPONSES.contact;
    
    return `I'm specialized in answering questions about SriVatsav's work. 

You can try asking me about:
- **beyondATS** AI voice screening
- **FlowStack IDE** Docker containerized environment
- **WebRTC** P2P calling app
- His **skills** or **hackathon achievements**.`;
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = {
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulated delay to feel intelligent
    setTimeout(() => {
      const assistantMsg: Message = {
        role: "assistant",
        content: generateResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  return (
    <aside
      id="copilot-panel"
      className="w-full h-full bg-[#252526] flex-shrink-0 flex flex-col overflow-hidden"
      aria-label="AI Copilot Panel"
    >
      {/* Header */}
      <div className="h-[35px] border-b border-[#1e1e1e] flex items-center justify-between px-3 bg-[#252526] flex-shrink-0">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#cccccc] uppercase tracking-wider">
          <Bot size={16} className="text-[#4ec9b0]" />
          <span>SriVatsav&apos;s Copilot</span>
          <span className="text-[9px] bg-[#37373d] text-[#4ec9b0] px-1.5 py-0.5 rounded-sm border border-[#4ec9b0]/20 font-bold">
            AI
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-[#37373d] rounded transition-colors text-[#858585] hover:text-white"
          title="Close panel"
        >
          <X size={14} />
        </button>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 fade-in-up ${
              msg.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded flex-shrink-0 flex items-center justify-center border
                ${
                  msg.role === "assistant"
                    ? "bg-[#1e1e1e] border-[#4ec9b0]/30 text-[#4ec9b0]"
                    : "bg-[#007acc] border-[#007acc] text-white"
                }`}
            >
              {msg.role === "assistant" ? (
                <Bot size={15} />
              ) : (
                <div className="text-[11px] font-bold font-sans">ME</div>
              )}
            </div>

            {/* Content Bubble */}
            <div
              className={`flex flex-col max-w-[85%] ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`text-[13px] leading-relaxed px-3 py-2 rounded-md border whitespace-pre-line select-text
                  ${
                    msg.role === "user"
                      ? "bg-[#007acc]/20 border-[#007acc]/30 text-[#e0e0e0]"
                      : "bg-[#1e1e1e] border-[#3c3c3c] text-[#cccccc]"
                  }`}
              >
                {msg.content}
              </div>
              <span className="text-[10px] text-[#5a5a5a] mt-1 block px-1 font-mono tabular-nums">
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded bg-[#1e1e1e] border border-[#4ec9b0]/30 flex-shrink-0 flex items-center justify-center text-[#4ec9b0]">
              <Bot size={15} />
            </div>
            <div className="bg-[#1e1e1e] border border-[#3c3c3c] px-3 py-2 rounded-md flex items-center gap-1.5 h-8 mt-0.5">
              <div className="w-1.5 h-1.5 bg-[#4ec9b0] rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-[#4ec9b0] rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-[#4ec9b0] rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        {/* Suggested Prompts */}
        {!isTyping && messages.length < 6 && (
          <div className="mt-2 space-y-2 flex flex-col items-start">
            <div className="flex items-center gap-1.5 text-[#858585] text-[11px] uppercase tracking-wider font-bold mb-1 px-1">
              <Sparkles size={11} className="text-[#dcdcaa]" />
              <span>Suggestions</span>
            </div>
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSendMessage(q)}
                className="text-[12px] text-[#a0a0a0] hover:text-[#4ec9b0] bg-[#1e1e1e] hover:bg-[#1e1e1e] border border-[#3c3c3c] hover:border-[#4ec9b0] px-3 py-1.5 rounded transition-all text-left w-full group flex items-center justify-between"
              >
                <span className="truncate">{q}</span>
                <MessageSquare size={12} className="opacity-0 group-hover:opacity-100 text-[#4ec9b0] transition-opacity flex-shrink-0 ml-2" />
              </button>
            ))}
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Bottom Input Bar */}
      <div className="p-3 border-t border-[#1e1e1e] bg-[#252526]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(input);
          }}
          className="flex flex-col border border-[#3c3c3c] rounded bg-[#1e1e1e] focus-within:border-[#007fd4] transition-colors overflow-hidden shadow-inner"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(input);
              }
            }}
            placeholder="Ask SriVatsav's Copilot a question..."
            className="w-full bg-transparent text-[13px] text-[#cccccc] placeholder-[#5a5a5a] px-3 py-2.5 focus:outline-none resize-none h-16 min-h-[50px]"
          />
          <div className="flex justify-between items-center px-2 py-1.5 border-t border-[#2d2d2d] bg-[#252526]/40">
            <span className="text-[10px] text-[#5a5a5a] font-mono flex items-center gap-1">
              Use markdown supported
            </span>
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-1.5 rounded text-white bg-[#007acc] hover:bg-[#006bb3] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              title="Send Message"
            >
              <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}
