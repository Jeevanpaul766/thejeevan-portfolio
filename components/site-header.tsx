"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "work",
        "experience",
        "capabilities",
        "approach",
        "about",
        "notes",
        "contact",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--paper)]/92 backdrop-blur-md border-b border-[var(--line)] py-3.5 shadow-[0_4px_20px_rgba(24,61,50,0.03)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--forest)]"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.14em] text-[var(--forest)] group-hover:text-[var(--deep-forest)] transition-colors">
              JEEVAN BANDANADHAM
            </span>
            <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[var(--muted-ink)] font-medium">
              AI Engineer · LangGraph & Python
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm">
            {[
              { label: "Work", href: "#work", id: "work" },
              { label: "Experience", href: "#experience", id: "experience" },
              { label: "Capabilities", href: "#capabilities", id: "capabilities" },
              { label: "Approach", href: "#approach", id: "approach" },
              { label: "About", href: "#about", id: "about" },
              { label: "Writing", href: "#notes", id: "notes" },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 font-medium transition-colors hover:text-[var(--forest)] ${
                    isActive
                      ? "text-[var(--forest)]"
                      : "text-[var(--muted-ink)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--antique-gold)] rounded-full animate-in fade-in" />
                  )}
                </a>
              );
            })}

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] bg-[var(--forest)] text-[var(--ivory)] hover:bg-[var(--deep-forest)] border border-[var(--forest)] hover:border-[var(--deep-forest)] transition-all shadow-sm rounded-[3px]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-[var(--forest)] text-[var(--ivory)] rounded-[3px]"
            >
              Contact
            </a>
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 border border-[var(--line)] bg-[var(--ivory)]/80 text-[var(--ink)] hover:text-[var(--forest)] rounded-[3px] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
