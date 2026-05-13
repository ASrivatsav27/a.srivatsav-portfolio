"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileCode2,
  FileJson,
  FileType,
  FileText,
  Palette,
} from "lucide-react";
import type { FileTab } from "@/app/page";

interface SidebarProps {
  files: FileTab[];
  activeTab: string;
  onFileClick: (id: string) => void;
  width: number;
}

const FILE_ICONS: Record<string, { icon: React.ElementType; color: string }> = {
  react: { icon: FileCode2, color: "#61dafb" },
  html: { icon: FileType, color: "#e44d26" },
  ts: { icon: FileCode2, color: "#3178c6" },
  json: { icon: FileJson, color: "#cbcb41" },
  css: { icon: Palette, color: "#563d7c" },
  md: { icon: FileText, color: "#519aba" },
};

export default function Sidebar({
  files,
  activeTab,
  onFileClick,
  width,
}: SidebarProps) {
  const [folderOpen, setFolderOpen] = useState(true);

  return (
    <aside
      id="sidebar"
      className="bg-[#252526] flex-shrink-0 flex flex-col overflow-hidden border-r border-[#1e1e1e]"
      style={{ width }}
      aria-label="Explorer Sidebar"
    >
      {/* Header */}
      <div className="h-[35px] flex items-center px-4 text-[11px] tracking-widest uppercase text-[#bbbbbb] font-medium flex-shrink-0">
        Explorer
      </div>

      {/* Folder */}
      <div className="flex-1 overflow-y-auto">
        {/* Folder Header */}
        <button
          onClick={() => setFolderOpen(!folderOpen)}
          className="w-full flex items-center gap-1 px-2 py-[3px] text-[11px] tracking-wider uppercase text-[#cccccc] font-bold hover:bg-[#2a2d2e] transition-colors"
        >
          {folderOpen ? (
            <ChevronDown size={16} className="text-[#cccccc]" />
          ) : (
            <ChevronRight size={16} className="text-[#cccccc]" />
          )}
          Portfolio
        </button>

        {/* File List */}
        {folderOpen && (
          <div className="ml-2">
            {files.map((file) => {
              const fileIcon = FILE_ICONS[file.icon];
              const Icon = fileIcon?.icon || FileCode2;
              const iconColor = fileIcon?.color || "#cccccc";
              const isActive = activeTab === file.id;

              return (
                <button
                  key={file.id}
                  data-file={file.id}
                  onClick={() => onFileClick(file.id)}
                  className={`w-full flex items-center gap-1.5 pl-4 pr-2 py-[3px] text-[13px] transition-colors cursor-pointer
                    ${
                      isActive
                        ? "bg-[#37373d] text-white"
                        : "text-[#cccccc] hover:bg-[#2a2d2e]"
                    }`}
                >
                  <Icon
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: iconColor }}
                  />
                  <span className="truncate">{file.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
