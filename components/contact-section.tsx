"use client";

import React, { useState } from "react";
import { EditorialHeading } from "./editorial-heading";
import { MotionReveal } from "./motion-reveal";
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const emailAddress = "Jeevanpaul766@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[var(--deep-forest)] text-[var(--ivory)] relative overflow-hidden">
      {/* Subtle background ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--antique-gold)]/40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement & Direct Connections */}
          <div className="lg:col-span-6 space-y-8">
            <MotionReveal direction="up">
              <EditorialHeading
                eyebrow="Initiate Contact"
                title="Let’s make something useful."
                description="Have a problem worth solving? I’m open to thoughtful conversations about AI applications, backend systems, and high-impact engineering projects."
                theme="dark"
              />
            </MotionReveal>

            {/* Direct Email Card */}
            <MotionReveal delay={0.15} direction="up">
              <div className="p-6 bg-[var(--forest)]/60 border border-[var(--antique-gold)]/30 rounded-[4px] space-y-4">
                <span className="text-[0.68rem] tracking-widest uppercase font-mono text-[var(--antique-gold)] block">
                  Direct Correspondence
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-serif text-lg sm:text-xl text-[var(--ivory)] hover:text-[var(--antique-gold-light)] transition-colors underline-offset-4 hover:underline"
                  >
                    {emailAddress}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-[var(--deep-forest)] border border-[var(--antique-gold)]/40 hover:border-[var(--antique-gold)] text-[var(--ivory)] rounded-[2px] transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--antique-gold)]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-[var(--sage)] font-light leading-relaxed">
                  Typically responds within 24 hours. Confidential technical discussions welcomed.
                </p>
              </div>
            </MotionReveal>

            {/* Social / Professional Channels */}
            <MotionReveal delay={0.25} direction="up">
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono tracking-widest uppercase text-[var(--sage)] block">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Jeevanpaul766"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[var(--forest)]/40 border border-[var(--line)]/20 hover:border-[var(--antique-gold)] text-[var(--ivory)] rounded-[2px] transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-[var(--antique-gold)]" />
                    <span>github.com/Jeevanpaul766</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jeevanbandanadham/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[var(--forest)]/40 border border-[var(--line)]/20 hover:border-[var(--antique-gold)] text-[var(--ivory)] rounded-[2px] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[var(--antique-gold)]" />
                    <span>linkedin.com/in/jeevanbandanadham</span>
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-6">
            <MotionReveal delay={0.2} direction="up">
              <div className="bg-[var(--forest)]/40 border border-[var(--line)]/30 p-6 sm:p-8 rounded-[4px] shadow-xl">
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--ivory)] font-medium mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[var(--sage)] mb-6 font-light">
                  All messages are routed securely to Jeevan Paul’s inbox.
                </p>

                {status === "success" ? (
                  <div className="p-6 bg-[var(--forest)] border border-[var(--antique-gold)] rounded-[3px] text-center space-y-3 animate-in fade-in">
                    <Sparkles className="w-8 h-8 text-[var(--antique-gold)] mx-auto" />
                    <h4 className="font-serif text-xl text-[var(--ivory)]">
                      Message Dispatched
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--sage)]">
                      Thank you. Your inquiry has been received. I will review your note and respond promptly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 text-xs font-mono text-[var(--antique-gold)] underline uppercase tracking-wider"
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-1.5"
                      >
                        Your Name / Organization <span className="text-[var(--antique-gold)]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Jane Doe or Acme AI"
                        className="w-full px-3.5 py-2.5 bg-[var(--deep-forest)] border border-[var(--line)]/40 focus:border-[var(--antique-gold)] text-[var(--ivory)] text-sm rounded-[2px] outline-none transition-colors placeholder:text-neutral-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-1.5"
                      >
                        Email Address <span className="text-[var(--antique-gold)]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="jane@organization.com"
                        className="w-full px-3.5 py-2.5 bg-[var(--deep-forest)] border border-[var(--line)]/40 focus:border-[var(--antique-gold)] text-[var(--ivory)] text-sm rounded-[2px] outline-none transition-colors placeholder:text-neutral-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-1.5"
                      >
                        Inquiry Scope
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        placeholder="e.g. AI System Architecture / Backend Engineering"
                        className="w-full px-3.5 py-2.5 bg-[var(--deep-forest)] border border-[var(--line)]/40 focus:border-[var(--antique-gold)] text-[var(--ivory)] text-sm rounded-[2px] outline-none transition-colors placeholder:text-neutral-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-1.5"
                      >
                        Project Details & Objectives <span className="text-[var(--antique-gold)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="Describe your current system challenges, goals, or timeline..."
                        className="w-full px-3.5 py-2.5 bg-[var(--deep-forest)] border border-[var(--line)]/40 focus:border-[var(--antique-gold)] text-[var(--ivory)] text-sm rounded-[2px] outline-none transition-colors placeholder:text-neutral-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3 px-6 bg-[var(--antique-gold)] hover:bg-[var(--antique-gold-light)] text-[var(--deep-forest)] text-xs font-semibold uppercase tracking-[0.14em] rounded-[2px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                    >
                      {status === "submitting" ? (
                        <span>Encrypting & Sending...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <p className="text-[0.68rem] text-[var(--sage)]/80 text-center pt-2">
                      Zero tracking. No spam or commercial newsletters.
                    </p>
                  </form>
                )}
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
