"use client";

import { useState, useEffect, useCallback } from "react";
import TitleBar from "@/components/layout/TitleBar";
import ActivityBar from "@/components/layout/ActivityBar";
import Sidebar from "@/components/layout/Sidebar";
import EditorTabs from "@/components/layout/EditorTabs";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import StatusBar from "@/components/layout/StatusBar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import ReadmeSection from "@/components/sections/ReadmeSection";
import ResumeSection from "@/components/sections/ResumeSection";
import CopilotPanel from "@/components/panels/CopilotPanel";
import dynamic from "next/dynamic";

const TerminalPanel = dynamic(() => import("@/components/panels/TerminalPanel"), { ssr: false });

export interface FileTab {
  id: string;
  name: string;
  icon: string;
  language: string;
}

const FILES: FileTab[] = [
  { id: "home", name: "home.tsx", icon: "react", language: "TypeScript React" },
  { id: "about", name: "about.html", icon: "html", language: "HTML" },
  { id: "projects", name: "projects.ts", icon: "ts", language: "TypeScript" },
  { id: "skills", name: "skills.json", icon: "json", language: "JSON" },
  { id: "achievements", name: "achievements.ts", icon: "ts", language: "TypeScript" },
  { id: "contact", name: "contact.css", icon: "css", language: "CSS" },
  { id: "readme", name: "README.md", icon: "md", language: "Markdown" },
  { id: "resume", name: "resume.tex", icon: "md", language: "LaTeX" },
];

const SECTIONS: Record<string, React.ComponentType> = {
  home: HomeSection,
  about: AboutSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  achievements: AchievementsSection,
  contact: ContactSection,
  readme: ReadmeSection,
  resume: ResumeSection,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [openTabs, setOpenTabs] = useState<string[]>(["home"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copilotOpen, setCopilotOpen] = useState(true); // Default to true to show off AI right away
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive layout handling
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
        setCopilotOpen(false);
        setSidebarWidth(window.innerWidth - 48);
      } else {
        // Optional: restore some layout if resized to desktop? 
        // For now, let's just make sure it doesn't break.
        setSidebarWidth(260);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openFile = useCallback(
    (fileId: string) => {
      if (!openTabs.includes(fileId)) {
        setOpenTabs((prev) => [...prev, fileId]);
      }
      setActiveTab(fileId);
      
      // Auto-close sidebar on mobile after selecting a file
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    },
    [openTabs]
  );

  const closeTab = useCallback(
    (fileId: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const newTabs = openTabs.filter((t) => t !== fileId);
      if (newTabs.length === 0) {
        setOpenTabs(["home"]);
        setActiveTab("home");
      } else {
        setOpenTabs(newTabs);
        if (activeTab === fileId) {
          setActiveTab(newTabs[newTabs.length - 1]);
        }
      }
    },
    [openTabs, activeTab]
  );

  const handleMouseDown = useCallback(() => {
    setIsResizing(true);
  }, []);

  useEffect(() => {
    if (!isResizing) return;
    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = e.clientX - 48;
      setSidebarWidth(Math.max(180, Math.min(400, newWidth)));
    };
    const handleMouseUp = () => setIsResizing(false);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const activeFile = FILES.find((f) => f.id === activeTab);
  const ActiveSection = SECTIONS[activeTab] || HomeSection;

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] overflow-hidden select-none">
      {/* Title Bar */}
      <TitleBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          copilotOpen={copilotOpen}
          onToggleCopilot={() => setCopilotOpen(!copilotOpen)}
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <>
            <div className={`flex-shrink-0 z-10 ${isMobile ? 'absolute h-[calc(100vh-22px-35px)] bg-[#252526]' : 'relative'}`} style={{ width: sidebarWidth }}>
              <Sidebar
                files={FILES}
                activeTab={activeTab}
                onFileClick={openFile}
                width={sidebarWidth}
              />
            </div>
            {/* Resize Handle - Hide on mobile */}
            <div
              className="w-[3px] cursor-col-resize hover:bg-[#007fd4] transition-colors duration-150 flex-shrink-0 hidden md:block"
              onMouseDown={handleMouseDown}
            />
          </>
        )}

        {/* Main Editor */}
        <main className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Tabs */}
          <EditorTabs
            files={FILES}
            openTabs={openTabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            onTabClose={closeTab}
          />

          {/* Breadcrumbs */}
          <Breadcrumbs fileName={activeFile?.name || "home.tsx"} />

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 md:px-12 py-8">
            <div className="tab-content-enter" key={activeTab}>
              <ActiveSection onNavigate={openFile} />
            </div>
          </div>
          
          {/* Terminal */}
          {terminalOpen && (
            <TerminalPanel onClose={() => setTerminalOpen(false)} />
          )}
        </main>

        {/* Copilot Right Panel */}
        {copilotOpen && (
          <div className={`flex-shrink-0 z-10 border-l border-[#252526] ${isMobile ? 'absolute right-0 h-[calc(100vh-22px-35px)] bg-[#252526]' : 'relative'}`} style={{ width: isMobile ? 'calc(100vw - 48px)' : 320 }}>
            <CopilotPanel onClose={() => setCopilotOpen(false)} />
          </div>
        )}
      </div>

      {/* Status Bar */}
      <StatusBar 
        language={activeFile?.language || "TypeScript React"} 
        onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
      />
    </div>
  );
}
