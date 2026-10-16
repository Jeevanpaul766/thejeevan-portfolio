"use client";

import React from "react";
import Image from "next/image";
import { EditorialHeading } from "./editorial-heading";
import { MotionReveal } from "./motion-reveal";
import { HeartHandshake, MapPin, GraduationCap, Code2 } from "lucide-react";
import { personalInfo, education } from "@/data/resume";

export function AboutSection() {
  const principles = [
    {
      title: "Start with the problem, not the framework.",
      detail:
        "Resist reaching for complex multi-agent graphs when a deterministic heuristic, structured parser, or hybrid search resolves the user's problem with lower latency and zero hallucination risk.",
    },
    {
      title: "Make agent state transitions observable.",
      detail:
        "Every node execution, tool call, and state reduction must emit structured trace spans. Full-lifecycle LangSmith instrumentation ensures non-deterministic LLM loops remain debuggable.",
    },
    {
      title: "Enforce deterministic quality gates.",
      detail:
        "Generative outputs must pass through strict, zero-LLM sanitizers, statutory allowlists, and factuality assertions before reaching live end users.",
    },
    {
      title: "Design for failure and regime shifts.",
      detail:
        "Statutory transitions (like IPC to BNS), API rate limits, and network dropouts will occur. Build date-based temporal routing, fallback triage, and checkpointed state recovery from day one.",
    },
    {
      title: "Ground claims in empirical test suites.",
      detail:
        "Measure system performance with automated test suites (like NyayaPath's 140 unit tests) and citation integrity benchmarks, proving reliability over marketing claims.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 border-b border-[var(--line)] bg-[var(--ivory)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <MotionReveal direction="up">
          <EditorialHeading
            eyebrow="About Me"
            title="The person behind the systems."
            description="AI Engineer specializing in production Generative AI, LangGraph state machines, hybrid retrieval, and Python backend services."
            className="mb-14"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Statement & Photo */}
          <div className="lg:col-span-5 space-y-8">
            <MotionReveal delay={0.1} direction="up">
              <div className="relative bg-[var(--paper)] border border-[var(--line)] p-4 rounded-[4px] shadow-sm">
                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-[2px] border border-[var(--line-light)]">
                  <Image
                    src="/images/jeevan-paul.png"
                    alt="Jeevan Bandanadham"
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover object-top filter contrast-[1.01]"
                  />
                </div>
                <div className="pt-3.5 space-y-1 text-center">
                  <h4 className="font-serif text-base font-semibold text-[var(--forest)]">
                    {personalInfo.name}
                  </h4>
                  <p className="text-xs text-[var(--muted-ink)] flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--antique-gold)]" />
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.2} direction="up">
              <div className="bg-[var(--paper)] border border-[var(--line)] p-6 rounded-[4px] space-y-4 text-xs sm:text-sm text-[var(--muted-ink)] leading-relaxed">
                <h4 className="font-serif text-base font-semibold text-[var(--forest)] flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[var(--antique-gold)]" />
                  Engineering Background
                </h4>
                <p>
                  With a foundational background in <strong className="text-[var(--ink)]">Mathematics, Statistics & Computer Science</strong> ({education.institution}), I approach AI engineering with rigorous quantitative and state-machine thinking rather than superficial wrapper scripting.
                </p>
                <p>
                  My engineering journey spans one year as an AI Engineering Intern and Associate Backend Engineer at <strong className="text-[var(--ink)]">Vaaryan Interfaces</strong>, advancing to freelance production AI backends for <strong className="text-[var(--ink)]">WorldTrendz LLC</strong> published on the Apple App Store, and authoring open-source systems like <strong className="text-[var(--ink)]">Project Anveshan</strong> and <strong className="text-[var(--ink)]">NyayaPath</strong>.
                </p>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Working Principles */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal delay={0.15} direction="up">
              <div className="border-b border-[var(--line)] pb-4 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-medium text-[var(--forest)]">
                  Engineering Principles & Standards
                </h3>
                <span className="text-xs font-mono text-[var(--antique-gold)] tracking-widest uppercase">
                  Craft Discipline
                </span>
              </div>
            </MotionReveal>

            <div className="space-y-4 pt-2">
              {principles.map((item, idx) => (
                <MotionReveal
                  key={item.title}
                  delay={0.1 + idx * 0.08}
                  direction="up"
                  className="p-5 sm:p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[3px] hover:border-[var(--antique-gold)] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-lg font-semibold text-[var(--antique-gold)] shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-medium text-[var(--forest)]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--muted-ink)] leading-relaxed font-light">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
