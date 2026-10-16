"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--deep-forest)] text-[var(--sage)] py-12 border-t border-[var(--antique-gold)]/20 text-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--forest)]">
          {/* Wordmark & Descriptor */}
          <div className="space-y-1 text-center md:text-left">
            <span className="font-serif text-lg font-bold tracking-[0.16em] text-[var(--ivory)] block">
              JEEVAN BANDANADHAM
            </span>
            <p className="text-[var(--sage)]/90 font-light">
              AI Engineer · Agentic AI · LangGraph · Python Backend
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[0.75rem] font-mono uppercase tracking-wider text-[var(--ivory)]">
            <a href="#work" className="hover:text-[var(--antique-gold)] transition-colors">
              Work
            </a>
            <a href="#experience" className="hover:text-[var(--antique-gold)] transition-colors">
              Experience
            </a>
            <a href="#capabilities" className="hover:text-[var(--antique-gold)] transition-colors">
              Capabilities
            </a>
            <a href="#approach" className="hover:text-[var(--antique-gold)] transition-colors">
              Approach
            </a>
            <a href="#about" className="hover:text-[var(--antique-gold)] transition-colors">
              About
            </a>
            <a href="#notes" className="hover:text-[var(--antique-gold)] transition-colors">
              Field Notes
            </a>
            <a href="#contact" className="hover:text-[var(--antique-gold)] transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--forest)] hover:bg-[var(--forest)]/80 text-[var(--ivory)] border border-[var(--antique-gold)]/30 rounded-[2px] transition-all font-mono text-[0.7rem] uppercase tracking-wider"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--antique-gold)]" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[0.7rem] text-[var(--sage)]/70 gap-3 text-center sm:text-left">
          <p>© {currentYear} Jeevan Bandanadham. All rights reserved.</p>
          <p className="font-mono">
            Crafted with editorial precision · Next.js, LangGraph & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
