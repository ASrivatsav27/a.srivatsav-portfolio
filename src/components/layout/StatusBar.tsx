"use client";

import { useEffect, useState } from "react";
import {
  GitBranch,
  AlertTriangle,
  Info,
  Bell,
  Check,
  Terminal as TerminalIcon,
} from "lucide-react";

interface StatusBarProps {
  language: string;
  onToggleTerminal?: () => void;
}

export default function StatusBar({ language, onToggleTerminal }: StatusBarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="statusbar"
      className="h-[22px] bg-[#007acc] flex items-center justify-between px-2 text-[12px] text-white flex-shrink-0"
    >
      {/* Left */}
      <div className="flex items-center gap-0">
        <div className="statusbar-item flex items-center gap-1 px-2 h-full cursor-pointer">
          <GitBranch size={13} />
          <span>main</span>
        </div>
        <div className="statusbar-item flex items-center gap-1 px-2 h-full cursor-pointer hidden sm:flex">
          <AlertTriangle size={13} />
          <span>0</span>
          <Info size={13} className="ml-0.5" />
          <span>0</span>
        </div>
        <div 
          onClick={onToggleTerminal}
          className="statusbar-item flex items-center gap-1 px-2 h-full cursor-pointer"
          title="Toggle Terminal"
        >
          <TerminalIcon size={13} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-0">
        <div className="statusbar-item px-2 h-full flex items-center cursor-pointer max-w-[100px] truncate sm:max-w-none">
          {language}
        </div>
        <div className="statusbar-item px-2 h-full flex items-center cursor-pointer hidden sm:flex">
          UTF-8
        </div>
        <div className="statusbar-item px-2 h-full flex items-center cursor-pointer hidden sm:flex">
          Prettier
        </div>
        <div className="statusbar-item flex items-center gap-1 px-2 h-full cursor-pointer hidden sm:flex">
          <Check size={13} />
          <span>SriVatsav Dark</span>
        </div>
        <div className="statusbar-item flex items-center gap-1 px-2 h-full cursor-pointer hidden md:flex">
          <Bell size={13} />
        </div>
        <div className="statusbar-item px-2 h-full flex items-center cursor-pointer font-mono tabular-nums">
          {time}
        </div>
      </div>
    </footer>
  );
}
