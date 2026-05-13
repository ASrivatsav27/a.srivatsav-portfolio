"use client";

import { X, FileCode2, FileJson, FileType, FileText, Palette } from "lucide-react";
import type { FileTab } from "@/app/page";

interface EditorTabsProps {
  files: FileTab[];
  openTabs: string[];
  activeTab: string;
  onTabClick: (id: string) => void;
  onTabClose: (id: string, e: React.MouseEvent) => void;
}

const FILE_ICONS: Record<string, { icon: React.ElementType; color: string }> = {
  react: { icon: FileCode2, color: "#61dafb" },
  html: { icon: FileType, color: "#e44d26" },
  ts: { icon: FileCode2, color: "#3178c6" },
  json: { icon: FileJson, color: "#cbcb41" },
  css: { icon: Palette, color: "#563d7c" },
  md: { icon: FileText, color: "#519aba" },
};

export default function EditorTabs({
  files,
  openTabs,
  activeTab,
  onTabClick,
  onTabClose,
}: EditorTabsProps) {
  const openFiles = openTabs
    .map((id) => files.find((f) => f.id === id))
    .filter(Boolean) as FileTab[];

  return (
    <div
      id="editor-tabs"
      className="h-[35px] bg-[#252526] flex items-end overflow-x-auto flex-shrink-0 border-b border-[#1e1e1e]"
    >
      {openFiles.map((file) => {
        const isActive = activeTab === file.id;
        const fileIcon = FILE_ICONS[file.icon];
        const Icon = fileIcon?.icon || FileCode2;
        const iconColor = fileIcon?.color || "#cccccc";

        return (
          <button
            key={file.id}
            onClick={() => onTabClick(file.id)}
            className={`group h-full flex items-center gap-2 px-3 text-[13px] border-r border-[#252526] transition-colors min-w-0 flex-shrink-0
              ${
                isActive
                  ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]"
                  : "bg-[#2d2d2d] text-[#969696] hover:bg-[#2d2d2d] border-t-2 border-t-transparent"
              }`}
          >
            <Icon
              size={14}
              className="flex-shrink-0"
              style={{ color: iconColor }}
            />
            <span className="truncate">{file.name}</span>
            <span
              onClick={(e) => onTabClose(file.id, e)}
              className={`ml-1 p-0.5 rounded hover:bg-[#505050] transition-colors flex-shrink-0
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            >
              <X size={14} />
            </span>
          </button>
        );
      })}
    </div>
  );
}
