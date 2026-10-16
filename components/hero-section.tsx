"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Terminal, MapPin } from "lucide-react";
import { MotionReveal } from "./motion-reveal";
import { personalInfo } from "@/data/resume";
import { GithubIcon, LinkedinIcon } from "./icons";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center paper-texture border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow with gold accent */}
            <MotionReveal delay={0.1} direction="up">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[var(--antique-gold)]" />
                <span className="text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[var(--forest)]">
                  Agentic AI · LangGraph · Hybrid RAG · Python Backend
                </span>
              </div>
            </MotionReveal>

            {/* Main Headline */}
            <MotionReveal delay={0.2} direction="up">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.05] tracking-tight text-[var(--forest)]">
                Building production agentic systems with architectural{" "}
                <span className="italic font-serif text-[var(--ink)]">
                  rigor.
                </span>
              </h1>
            </MotionReveal>

            {/* Supporting Copy */}
            <MotionReveal delay={0.3} direction="up">
              <p className="text-base sm:text-lg text-[var(--muted-ink)] leading-relaxed max-w-2xl font-light">
                I’m <strong className="font-semibold text-[var(--ink)]">Jeevan Bandanadham</strong>, an AI Engineer building production Generative AI and agentic systems with LangChain, LangGraph, and Python backends. Hands-on with hybrid RAG, LangSmith observability, cyclic state machines, and deterministic safety gates.
              </p>
            </MotionReveal>

            {/* CTAs */}
            <MotionReveal delay={0.4} direction="up">
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.1em] uppercase bg-[var(--forest)] text-[var(--ivory)] hover:bg-[var(--deep-forest)] transition-all rounded-[3px] shadow-[0_2px_8px_rgba(24,61,50,0.12)]"
                >
                  <span>Explore Systems & OS</span>
                  <ArrowDown className="w-4 h-4 text-[var(--antique-gold)] group-hover:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.1em] uppercase bg-[var(--ivory)] text-[var(--forest)] border border-[var(--line)] hover:border-[var(--antique-gold)] transition-all rounded-[3px]"
                >
                  <span>View Experience</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted-ink)] group-hover:text-[var(--forest)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--muted-ink)] hover:text-[var(--forest)] transition-colors"
                >
                  <span>Contact</span>
                  <span className="text-[var(--antique-gold)]">→</span>
                </a>
              </div>
            </MotionReveal>

            {/* Availability & Socials Bar */}
            <MotionReveal delay={0.5} direction="up">
              <div className="pt-6 border-t border-[var(--line-light)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--muted-ink)]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--antique-gold)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--antique-gold)]"></span>
                  </span>
                  <span className="font-medium text-[var(--ink)]">
                    Open for AI Engineer & Agentic Backend Roles
                  </span>
                  <span className="text-[var(--line)]">•</span>
                  <span className="inline-flex items-center gap-1 text-[var(--muted-ink)] font-mono text-[0.72rem]">
                    <MapPin className="w-3 h-3 text-[var(--antique-gold)]" />
                    Andhra Pradesh, India
                  </span>
                </div>

                {/* Direct quick links */}
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded border border-[var(--line)] hover:border-[var(--antique-gold)] text-[var(--forest)] hover:bg-[var(--ivory)] transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded border border-[var(--line)] hover:border-[var(--antique-gold)] text-[var(--forest)] hover:bg-[var(--ivory)] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Editorial Portrait & Architectural Card */}
          <div className="lg:col-span-5 flex justify-center">
            <MotionReveal delay={0.25} direction="left" className="w-full max-w-md">
              <div className="relative bg-[var(--ivory)] border border-[var(--line)] p-4 sm:p-5 rounded-[4px] shadow-[0_12px_40px_rgba(24,61,50,0.06)]">
                {/* Decorative gold corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[var(--antique-gold)]" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[var(--antique-gold)]" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[var(--antique-gold)]" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[var(--antique-gold)]" />

                {/* Portrait container */}
                <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[2px] bg-[var(--paper)] border border-[var(--line)]">
                  <Image
                    src="/images/jeevan-paul.png"
                    alt="Jeevan Bandanadham — AI Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover object-top filter contrast-[1.02] hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/40 via-transparent to-transparent opacity-25" />
                </div>

                {/* Engraved caption placard */}
                <div className="mt-4 pt-3.5 border-t border-[var(--line)] flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg font-semibold tracking-wide text-[var(--forest)]">
                      Jeevan Bandanadham
                    </h3>
                    <p className="text-xs text-[var(--muted-ink)] font-sans">
                      AI Engineer | Agentic AI & LangGraph
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[0.65rem] font-mono tracking-wider uppercase bg-[var(--paper)] border border-[var(--line)] text-[var(--forest)] font-medium rounded">
                      <ShieldCheck className="w-3 h-3 text-[var(--antique-gold)]" />
                      App Store & LangSmith
                    </span>
                  </div>
                </div>

                {/* Engineering Highlights Pill strip */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[0.7rem] font-sans text-[var(--muted-ink)] pt-3 border-t border-[var(--line-light)]">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[var(--antique-gold)]" />
                    <span>LangGraph StateGraphs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[var(--antique-gold)]" />
                    <span>ChromaDB + BM25 RRF</span>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
