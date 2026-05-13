"use client";

import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  fileName: string;
}

export default function Breadcrumbs({ fileName }: BreadcrumbsProps) {
  return (
    <div
      id="breadcrumbs"
      className="h-[22px] bg-[#1e1e1e] flex items-center px-3 text-[12px] text-[#a0a0a0] flex-shrink-0 border-b border-[#2d2d2d] overflow-x-auto whitespace-nowrap scrollbar-hide"
    >
      <span className="hover:text-[#cccccc] cursor-pointer transition-colors flex-shrink-0">
        adapa-srivatsav
      </span>
      <ChevronRight size={14} className="mx-0.5 text-[#666] flex-shrink-0" />
      <span className="hover:text-[#cccccc] cursor-pointer transition-colors flex-shrink-0">
        src
      </span>
      <ChevronRight size={14} className="mx-0.5 text-[#666] flex-shrink-0" />
      <span className="text-[#cccccc] flex-shrink-0">{fileName}</span>
    </div>
  );
}
