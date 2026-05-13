"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "srivatsava47@gmail.com",
    href: "mailto:srivatsava47@gmail.com",
    color: "#ce9178",
  },
  {
    icon: LinkedinIcon,
    label: "LINKEDIN",
    value: "linkedin.com/in/adapa-srivatsav",
    href: "https://linkedin.com/in/adapa-srivatsav",
    color: "#569cd6",
  },
  {
    icon: GithubIcon,
    label: "GITHUB",
    value: "github.com/ASrivatsav27",
    href: "https://github.com/ASrivatsav27",
    color: "#cccccc",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91-9989916427",
    href: "tel:+919989916427",
    color: "#4ec9b0",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate send (replace with Formspree/EmailJS integration)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("sent");
    setTimeout(() => {
      setFormState("idle");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact-section" className="max-w-5xl fade-in-up">
      {/* Code Comment */}
      <p className="text-[#6a9955] text-sm mb-2 font-mono">
        {"/* contact.css — let's build something */"}
      </p>

      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans">
        Contact
      </h2>
      <p className="text-[#858585] text-sm mb-8 font-mono">
        {"// open to work, collabs & good conversations"}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Find Me On */}
        <div>
          <h3 className="text-sm tracking-[0.2em] uppercase text-[#4ec9b0] font-bold mb-5">
            Find Me On
          </h3>
          <div className="space-y-3">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card flex items-center gap-4 p-4 border border-[#3c3c3c] rounded-lg bg-[#252526]/30 group"
              >
                <Icon
                  size={22}
                  style={{ color }}
                  className="flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs tracking-widest font-bold uppercase"
                    style={{ color }}
                  >
                    {label}
                  </p>
                  <p className="text-[13px] text-[#a0a0a0] truncate">
                    {value}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[#858585] group-hover:text-[#4ec9b0] transition-colors flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h3 className="text-sm tracking-[0.2em] uppercase text-[#4ec9b0] font-bold mb-5">
            Send A Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-[12px] text-[#858585] font-mono mb-1 block">
                {"// YOUR_NAME"}{" "}
                <span className="text-[#f44747]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="string"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-2 text-[14px] text-[#cccccc] placeholder-[#5a5a5a] focus:border-[#007fd4] focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[12px] text-[#858585] font-mono mb-1 block">
                {"// YOUR_EMAIL"}{" "}
                <span className="text-[#f44747]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="string"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-2 text-[14px] text-[#cccccc] placeholder-[#5a5a5a] focus:border-[#007fd4] focus:outline-none transition-colors"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-[12px] text-[#858585] font-mono mb-1 block">
                {"// SUBJECT"}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="string"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-2 text-[14px] text-[#cccccc] placeholder-[#5a5a5a] focus:border-[#007fd4] focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-[12px] text-[#858585] font-mono mb-1 block">
                {"// MESSAGE"}{" "}
                <span className="text-[#f44747]">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="```your message```"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-2 text-[14px] text-[#cccccc] placeholder-[#5a5a5a] focus:border-[#007fd4] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState !== "idle"}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm transition-all cursor-pointer
                ${
                  formState === "sent"
                    ? "bg-[#4ec9b0] text-[#1e1e1e]"
                    : "bg-[#007acc] text-white hover:bg-[#006bb3]"
                }
                ${formState === "sending" ? "opacity-70" : ""}`}
            >
              {formState === "idle" && (
                <>
                  <ArrowRight size={16} />
                  {"send_message()"}
                </>
              )}
              {formState === "sending" && (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              )}
              {formState === "sent" && (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent!
                </>
              )}
            </button>

            <p className="text-[11px] text-[#5a5a5a] font-mono text-center">
              {"// Powered by Formspree (lands directly in my inbox) :p"}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
