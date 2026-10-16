"use client";

import React from "react";
import { EditorialHeading } from "./editorial-heading";
import { MotionReveal } from "./motion-reveal";
import { Search, Compass, Hammer, ShieldAlert } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      title: "Understand",
      icon: Search,
      tagline: "Define problem & failure constraints",
      description:
        "Isolate user requirements, latency tolerances, and data sensitivity before committing to frameworks or model architectures.",
      checklist: [
        "Deconstruct core bottlenecks",
        "Specify latency and cost budgets",
        "Identify data boundary risks",
      ],
    },
    {
      step: "02",
      title: "Design",
      icon: Compass,
      tagline: "Map data flows & state topologies",
      description:
        "Draft the explicit state graph, schema definitions, deterministic fallbacks, and observability instrumentation up front.",
      checklist: [
        "State machine & transition graph",
        "Schema enforcement (Pydantic / TS)",
        "Degradation & recovery paths",
      ],
    },
    {
      step: "03",
      title: "Build",
      icon: Hammer,
      tagline: "Implement modular, testable units",
      description:
        "Code isolated, testable components with defensive error boundaries and transparent telemetry logging.",
      checklist: [
        "Decoupled service modules",
        "Deterministic evaluation hooks",
        "Type-safe API contracts",
      ],
    },
    {
      step: "04",
      title: "Verify",
      icon: ShieldAlert,
      tagline: "Stress test & document limitations",
      description:
        "Subject the pipeline to adversarial inputs, quantify hallucination rates, and honestly document operational trade-offs.",
      checklist: [
        "Adversarial red-teaming tests",
        "Trace span telemetry audit",
        "Explicit limitation disclosures",
      ],
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-32 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <MotionReveal direction="up">
          <EditorialHeading
            eyebrow="Approach"
            title="How I think."
            description="A disciplined engineering methodology that prizes evidence, observability, and robust failure recovery over superficial demos."
            className="mb-14"
          />
        </MotionReveal>

        {/* Steps: Horizontal on desktop, Vertical on mobile */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-[1px] bg-[var(--line)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionReveal
                  key={item.step}
                  delay={idx * 0.1}
                  direction="up"
                  className="bg-[var(--ivory)] border border-[var(--line)] p-6 sm:p-7 rounded-[4px] shadow-sm flex flex-col justify-between hover:border-[var(--antique-gold)] transition-colors group"
                >
                  <div className="space-y-4">
                    {/* Header with Step Number and Icon */}
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--line-light)]">
                      <span className="font-serif text-2xl font-semibold text-[var(--antique-gold)] group-hover:text-[var(--forest)] transition-colors">
                        {item.step}
                      </span>
                      <div className="p-2 bg-[var(--paper)] rounded-full border border-[var(--line)] text-[var(--forest)]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[var(--forest)]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[var(--antique-gold)] mt-0.5">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--muted-ink)] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Checklist */}
                  <div className="pt-5 mt-5 border-t border-[var(--line-light)]">
                    <ul className="space-y-1.5">
                      {item.checklist.map((c) => (
                        <li
                          key={c}
                          className="text-[0.72rem] text-[var(--ink)] flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--antique-gold)] shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
