"use client";

import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { X, Maximize2, Minus } from "lucide-react";
import "xterm/css/xterm.css";

interface TerminalPanelProps {
  onClose: () => void;
}

export default function TerminalPanel({ onClose }: TerminalPanelProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const currentLineRef = useRef("");

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new Terminal({
      theme: {
        background: "#1e1e1e",
        foreground: "#cccccc",
        cursor: "#cccccc",
        selectionBackground: "#264f78",
        black: "#000000",
        red: "#cd3131",
        green: "#0dbc79",
        yellow: "#e5e510",
        blue: "#2472c8",
        magenta: "#bc3fbc",
        cyan: "#11a8cd",
        white: "#e5e5e5",
      },
      fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: 13,
      cursorBlink: true,
      cursorStyle: "block",
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(terminalRef.current);
    fitAddon.fit();

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;

    const writePrompt = () => {
      term.write("\r\n\x1b[1;32madapa-srivatsav\x1b[0m@\x1b[1;34mportfolio\x1b[0m:~\x1b[1;36m$\x1b[0m ");
    };

    term.writeln("Welcome to the Portfolio Terminal.");
    term.writeln("Type 'help' to see a list of available commands.");
    term.write("\x1b[1;32madapa-srivatsav\x1b[0m@\x1b[1;34mportfolio\x1b[0m:~\x1b[1;36m$\x1b[0m ");

    term.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

      if (domEvent.keyCode === 13) {
        // Enter
        const command = currentLineRef.current.trim();
        if (command) {
          executeCommand(command, term);
        } else {
          writePrompt();
        }
        currentLineRef.current = "";
      } else if (domEvent.keyCode === 8) {
        // Backspace
        if (currentLineRef.current.length > 0) {
          currentLineRef.current = currentLineRef.current.slice(0, -1);
          term.write("\b \b");
        }
      } else if (printable) {
        currentLineRef.current += key;
        term.write(key);
      }
    });

    const safeFit = () => {
      try {
        if (terminalRef.current && terminalRef.current.clientWidth > 0) {
          fitAddon.fit();
        }
      } catch (e) {
        // Prevent xterm renderer crashes when hidden
      }
    };

    const handleResize = () => {
      safeFit();
    };

    window.addEventListener("resize", handleResize);

    // Initial timeout to ensure proper sizing after mount
    const fitTimeout = setTimeout(safeFit, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(fitTimeout);
      term.dispose();
    };
  }, []);

  const executeCommand = (cmd: string, term: Terminal) => {
    term.write("\r\n");
    const [base, ...args] = cmd.split(" ");
    
    switch (base.toLowerCase()) {
      case "help":
        term.writeln("Available commands:");
        term.writeln("  aboutme       - Displays information about me");
        term.writeln("  contact       - Displays contact information");
        term.writeln("  ls            - Lists files in current directory");
        term.writeln("  cat <file>    - Displays contents of a file");
        term.writeln("  clear         - Clears the terminal screen");
        term.writeln("  echo <text>   - Prints text");
        term.writeln("  date          - Prints current date and time");
        term.writeln("  npm           - Node package manager");
        break;
      case "aboutme":
        term.writeln("Hi! I'm Adapa SriVatsav, an engineering student focused on the convergence of Full-Stack Development and Artificial Intelligence.");
        term.writeln("I specialize in creating intelligent pipelines, distributed environments, and high-fidelity real-time systems.");
        break;
      case "contact":
        term.writeln("You can connect with me via:");
        term.writeln("  Email:    srivatsava47@gmail.com");
        term.writeln("  LinkedIn: linkedin.com/in/adapa-srivatsav");
        term.writeln("  GitHub:   github.com/ASrivatsav27");
        term.writeln("  Phone:    +91-9989916427");
        break;
      case "ls":
        term.writeln("\x1b[1;36mhome.tsx\x1b[0m  \x1b[1;36mabout.html\x1b[0m  \x1b[1;36mprojects.ts\x1b[0m  \x1b[1;36mskills.json\x1b[0m  \x1b[1;36machievements.ts\x1b[0m  \x1b[1;36mcontact.css\x1b[0m  \x1b[1;36mREADME.md\x1b[0m  \x1b[1;36mresume.tex\x1b[0m");
        break;
      case "cat":
        if (args.length === 0) {
          term.writeln("cat: missing file operand");
        } else {
          const file = args[0].toLowerCase();
          switch (file) {
            case "home.tsx": term.writeln("// hello world !! Welcome to my portfolio"); break;
            case "about.html": term.writeln("<h1>Adapa SriVatsav</h1><p>Full-Stack Developer</p>"); break;
            case "projects.ts": term.writeln("const projects = ['beyondATS', 'FlowStack IDE', 'WebRTC P2P Video Call', 'AI Voice Agent'];"); break;
            case "skills.json": term.writeln('{"languages": ["TypeScript", "JavaScript", "SQL", "HTML/CSS"]}'); break;
            case "achievements.ts": term.writeln('const wins = ["HackNovate 2025 1st Place", "NYXORA MREM 2026 3rd Place"];'); break;
            case "contact.css": term.writeln(".contact { email: 'srivatsava47@gmail.com'; }"); break;
            case "readme.md": term.writeln("# Adapa SriVatsav\\nBuilding production-grade full-stack apps."); break;
            case "resume.tex": term.writeln("\\documentclass{article}\\n\\begin{document}\\nAdapa SriVatsav\\n\\end{document}"); break;
            default: term.writeln(`cat: ${args[0]}: No such file or directory`);
          }
        }
        break;
      case "clear":
        term.clear();
        break;
      case "echo":
        term.writeln(args.join(" "));
        break;
      case "date":
        term.writeln(new Date().toString());
        break;
      case "npm":
        if (args[0] === "run" && args[1] === "build") {
          term.writeln("v18.17.0");
          term.writeln("> srivatsav-portfolio@0.1.0 build");
          term.writeln("> next build");
          term.writeln("");
          term.writeln("info  - Creating an optimized production build...");
          setTimeout(() => {
            term.writeln("info  - Compiled successfully");
            term.writeln("info  - Collecting page data...");
            setTimeout(() => {
              term.writeln("info  - Generating static pages (6/6)");
              term.writeln("info  - Finalizing page optimization...");
              term.writeln("");
              term.writeln("Route (app)                              Size     First Load JS");
              term.writeln("┌ ○ /                                    142 kB          230 kB");
              term.writeln("└ ○ /_not-found                          871 B          88.7 kB");
              term.writeln("");
              term.write("\x1b[1;32madapa-srivatsav\x1b[0m@\x1b[1;34mportfolio\x1b[0m:~\x1b[1;36m$\x1b[0m ");
            }, 800);
          }, 800);
          return; // Skip immediate prompt since we are async
        } else {
          term.writeln(`npm ERR! Unknown command: ${args.join(" ")}`);
        }
        break;
      default:
        term.writeln(`bash: ${base}: command not found`);
    }
    
    term.write("\x1b[1;32madapa-srivatsav\x1b[0m@\x1b[1;34mportfolio\x1b[0m:~\x1b[1;36m$\x1b[0m ");
  };

  return (
    <div className="h-64 border-t border-[#3c3c3c] bg-[#1e1e1e] flex flex-col flex-shrink-0 z-10">
      {/* Terminal Header */}
      <div className="h-9 flex items-center justify-between px-4 border-b border-[#3c3c3c] bg-[#1e1e1e] select-none">
        <div className="flex gap-4">
          <span className="text-[11px] uppercase tracking-wider text-[#cccccc] font-medium border-b border-[#007acc] pb-2.5 pt-2.5">
            TERMINAL
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#858585] hover:text-[#cccccc] transition-colors cursor-pointer pt-2.5 pb-2.5">
            OUTPUT
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#858585] hover:text-[#cccccc] transition-colors cursor-pointer pt-2.5 pb-2.5">
            DEBUG CONSOLE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-[#cccccc] text-[11px] font-mono mr-4 bg-[#2d2d2d] px-2 py-0.5 rounded">
            bash
          </div>
          <button className="text-[#858585] hover:text-white transition-colors">
            <Minus size={14} />
          </button>
          <button className="text-[#858585] hover:text-white transition-colors">
            <Maximize2 size={12} />
          </button>
          <button onClick={onClose} className="text-[#858585] hover:text-white transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>
      {/* Terminal Container */}
      <div className="flex-1 p-2 min-h-0 relative">
        <div ref={terminalRef} className="absolute inset-0 pl-4 pt-2 overflow-hidden" />
      </div>
    </div>
  );
}
