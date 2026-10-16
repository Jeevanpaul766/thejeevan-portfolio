"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const navLinks = [
  { name: "Selected Work", href: "#work", id: "work" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Capabilities", href: "#capabilities", id: "capabilities" },
  { name: "Approach", href: "#approach", id: "approach" },
  { name: "About", href: "#about", id: "about" },
  { name: "Field Notes", href: "#notes", id: "notes" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function MobileNavigation({
  isOpen,
  onClose,
  activeSection,
}: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 bg-[var(--paper)] flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
        <span className="font-serif text-lg sm:text-xl tracking-wider text-[var(--forest)] font-semibold">
          JEEVAN BANDANADHAM
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[var(--ink)] hover:text-[var(--forest)] rounded border border-[var(--line)] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col space-y-6 my-auto">
        {navLinks.map((link, idx) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between text-2xl sm:text-3xl font-serif text-[var(--ink)] hover:text-[var(--forest)] transition-colors py-2 border-b border-[var(--line-light)]"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-sans text-[var(--antique-gold)] tracking-widest">
                  0{idx + 1}
                </span>
                <span className={isActive ? "text-[var(--forest)] font-medium" : ""}>
                  {link.name}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--antique-gold)]" />
                )}
              </div>
              <ArrowUpRight className="w-5 h-5 text-[var(--muted-ink)] group-hover:text-[var(--forest)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </nav>

      {/* Footer info */}
      <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[var(--muted-ink)] gap-3">
        <p>AI Engineering & Backend Systems</p>
        <p>jeevanpaul.work@gmail.com</p>
      </div>
    </div>
  );
}
