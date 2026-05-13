"use client";

import { Minus, Square, X } from "lucide-react";

export default function TitleBar() {
  return (
    <header
      id="titlebar"
      className="h-[30px] bg-[#3c3c3c] flex items-center justify-between px-2 flex-shrink-0 border-b border-[#252526]"
    >
      {/* Left: macOS-style dots */}
      <div className="flex items-center gap-2 ml-1">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all cursor-pointer" />
      </div>

      {/* Center: Title */}
      <div className="flex-1 flex justify-center items-center overflow-hidden px-2">
        <div className="flex items-center gap-2 text-[13px] text-[#999] whitespace-nowrap overflow-hidden">
          <span className="text-[#4ec9b0] hidden sm:inline">●</span>
          <span className="truncate">adapa-srivatsav : portfolio</span>
          <span className="text-[11px] text-[#666] bg-[#2d2d2d] px-1.5 py-0.5 rounded hidden sm:inline-block">
            Ctrl
          </span>
          <span className="text-[11px] text-[#666] bg-[#2d2d2d] px-1.5 py-0.5 rounded hidden sm:inline-block">
            P
          </span>
        </div>
      </div>

      {/* Right: Window controls */}
      <div className="flex items-center">
        <button className="p-1.5 hover:bg-[#505050] rounded transition-colors">
          <Minus size={14} className="text-[#999]" />
        </button>
        <button className="p-1.5 hover:bg-[#505050] rounded transition-colors">
          <Square size={11} className="text-[#999]" />
        </button>
        <button className="p-1.5 hover:bg-[#e81123] rounded transition-colors group">
          <X size={14} className="text-[#999] group-hover:text-white" />
        </button>
      </div>
    </header>
  );
}
