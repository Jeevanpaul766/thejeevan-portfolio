"use client";

import React from "react";
import { EditorialHeading } from "./editorial-heading";
import { MotionReveal } from "./motion-reveal";
import { experiences, certifications, education } from "@/data/resume";
import { Briefcase, Award, GraduationCap, ExternalLink, CheckCircle2, ShieldCheck, Globe } from "lucide-react";
import { AppleIcon } from "./icons";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20">
        {/* 1. Professional Experience Section */}
        <div>
          <MotionReveal direction="up">
            <EditorialHeading
              eyebrow="Career Journey"
              title="Professional experience."
              description="Engineering production AI backends, multi-model LLM orchestration, and enterprise RAG systems across commercial client applications."
              className="mb-14"
            />
          </MotionReveal>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <MotionReveal
                key={exp.role + exp.company}
                delay={idx * 0.1}
                direction="up"
                className="bg-[var(--ivory)] border border-[var(--line)] rounded-[4px] p-6 sm:p-8 hover:border-[var(--antique-gold)] transition-colors shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[var(--line-light)] pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-[var(--forest)]">
                        {exp.role}
                      </span>
                      {exp.badge && (
                        <span className="text-[0.65rem] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--paper)] border border-[var(--line)] text-[var(--forest)] font-medium">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--antique-gold)] font-medium">
                      <span>{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[var(--forest)] hover:underline ml-2 bg-[var(--paper)] px-2.5 py-0.5 rounded border border-[var(--line)] hover:border-[var(--antique-gold)] transition-colors"
                        >
                          {exp.link.includes("apple.com") ? (
                            <AppleIcon className="w-3 h-3 text-[var(--antique-gold)]" />
                          ) : (
                            <Globe className="w-3 h-3 text-[var(--antique-gold)]" />
                          )}
                          <span>{exp.linkText}</span>
                          <ExternalLink className="w-3 h-3 text-[var(--muted-ink)]" />
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[var(--muted-ink)] sm:text-right shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--antique-gold)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            ))}
          </div>
        </div>

        {/* 2. Industry Certifications Section */}
        <div>
          <MotionReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--line-light)] pb-6 mb-10">
              <EditorialHeading
                eyebrow="Verified Credentials"
                title="Certifications & specializations."
                description="Rigorous accreditations in LangGraph state machines, deep agent architectures, LangSmith observability, and multi-tool evaluations."
              />
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <MotionReveal
                key={cert.title}
                delay={idx * 0.08}
                direction="up"
                className="bg-[var(--ivory)] border border-[var(--line)] rounded-[4px] p-6 flex flex-col justify-between hover:border-[var(--antique-gold)] transition-colors group shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.68rem] font-mono tracking-wider uppercase text-[var(--antique-gold)] font-medium">
                      {cert.issuer}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[var(--antique-gold)]" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[var(--forest)] group-hover:text-[var(--deep-forest)] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[var(--muted-ink)] leading-relaxed font-light">
                    {cert.skills}
                  </p>

                  {cert.credentialId && (
                    <p className="text-[0.65rem] font-mono text-[var(--muted-ink)]">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--line-light)] flex items-center justify-between">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-[var(--forest)] font-medium">
                    {cert.badge}
                  </span>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--antique-gold)] group-hover:text-[var(--forest)] font-semibold transition-colors uppercase tracking-wider"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>

        {/* 3. Formal Education Section */}
        <MotionReveal direction="up">
          <div className="bg-[var(--ivory)] border border-[var(--line)] rounded-[4px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--paper)] rounded-full border border-[var(--line)] text-[var(--forest)] shrink-0">
                <GraduationCap className="w-6 h-6 text-[var(--antique-gold)]" />
              </div>
              <div className="space-y-1">
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-[var(--antique-gold)] font-semibold">
                  Formal Academic Foundation
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[var(--forest)]">
                  {education.degree} – {education.field}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-ink)]">
                  {education.institution} · {education.location}
                </p>
              </div>
            </div>

            <div className="sm:text-right shrink-0 pl-14 sm:pl-0">
              <span className="font-mono text-xs text-[var(--muted-ink)] bg-[var(--paper)] px-3 py-1 rounded border border-[var(--line)]">
                {education.period}
              </span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
