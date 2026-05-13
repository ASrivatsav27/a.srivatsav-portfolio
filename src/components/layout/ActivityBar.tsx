"use client";

import {
  Files,
  Search,
  GitBranch,
  Settings,
  Mail,
  Bot,
} from "lucide-react";

interface ActivityBarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  copilotOpen: boolean;
  onToggleCopilot: () => void;
}

export default function ActivityBar({
  sidebarOpen,
  onToggleSidebar,
  copilotOpen,
  onToggleCopilot,
}: ActivityBarProps) {
  const topIcons = [
    { icon: Files, label: "Explorer", active: sidebarOpen, onClick: onToggleSidebar },
    { icon: Search, label: "Search", active: false },
    { icon: GitBranch, label: "Source Control", active: false },
    { icon: Bot, label: "AI Copilot Chat", active: copilotOpen, onClick: onToggleCopilot },
  ];

  const bottomIcons = [
    {
      icon: Mail,
      label: "Send Email",
      onClick: () => {
        window.open("mailto:srivatsava47@gmail.com?subject=Hello%20SriVatsav");
      },
    },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <nav
      id="activitybar"
      className="w-12 bg-[#333333] flex flex-col items-center justify-between py-1 flex-shrink-0 border-r border-[#252526]"
      aria-label="Activity Bar"
    >
      <div className="flex flex-col items-center gap-0.5">
        {topIcons.map(({ icon: Icon, label, active, onClick }) => (
          <button
            key={label}
            title={label}
            aria-label={label}
            onClick={onClick}
            className={`w-12 h-12 flex items-center justify-center transition-all duration-150 relative group
              ${
                active
                  ? "text-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-6 before:bg-white before:rounded-r"
                  : "text-[#858585] hover:text-white"
              }`}
          >
            <Icon size={24} strokeWidth={1.5} />
            {/* Tooltip */}
            <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#252526] text-[#cccccc] text-xs px-2 py-1 rounded border border-[#454545] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-0.5">
        {bottomIcons.map(({ icon: Icon, label, onClick }) => (
          <button
            key={label}
            title={label}
            aria-label={label}
            onClick={onClick}
            className="w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white transition-all duration-150 relative group"
          >
            <Icon size={24} strokeWidth={1.5} />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#252526] text-[#cccccc] text-xs px-2 py-1 rounded border border-[#454545] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
