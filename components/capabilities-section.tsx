"use client";

import React from "react";
import { EditorialHeading } from "./editorial-heading";
import { MotionReveal } from "./motion-reveal";
import { Bot, Server, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { skillsData } from "@/data/resume";

export function CapabilitiesSection() {
  const capabilityGroups = [
    {
      title: "Generative & Agentic AI",
      icon: Bot,
      eyebrow: "Core Specialization",
      summary:
        "Architecting multi-agent state machines, cyclical graphs, hybrid retrieval pipelines, and deterministic guardrail gates.",
      skills: skillsData.generativeAI,
      technologies: ["LangGraph", "LangChain", "ChromaDB", "BM25 / RRF", "LangSmith", "Ollama"],
    },
    {
      title: "Backend & Distributed Systems",
      icon: Server,
      eyebrow: "Production Engineering",
      summary:
        "Building asynchronous REST APIs, authentication layers, stateful context windows, and containerized cloud services.",
      skills: [
        "Asynchronous FastAPI REST API architectures",
        "PostgreSQL and MongoDB data modeling & queries",
        "Stateless JWT authentication & session management",
        "Containerization with Docker & automated PyTest CI",
        "Cloud deployments on GCP & Firebase infrastructure",
      ],
      technologies: skillsData.backendCloud,
    },
    {
      title: "Languages, Core & Frontend",
      icon: Layers,
      eyebrow: "Engineering Foundations",
      summary:
        "Deep foundation in Python OOP, mathematical reasoning, type-safe APIs, and responsive React dashboards.",
      skills: [
        "Python (OOP, async/await, Pydantic type safety)",
        "REST API design & OpenAPI specifications",
        "React & Vite for real-time SSE streaming dashboards",
        "Hugging Face Transformers & local model inference",
        "Git version control & structured code review practice",
      ],
      technologies: skillsData.languagesCore.concat(["React", "Vite"]),
    },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-32 border-b border-[var(--line)] bg-[var(--ivory)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <MotionReveal direction="up">
          <EditorialHeading
            eyebrow="Technical Stack"
            title="Technical skills & core disciplines."
            description="Production technologies and agentic frameworks verified across real projects, academic research OS, and live Apple App Store backends."
            className="mb-14"
          />
        </MotionReveal>

        {/* 3 Editorial Columns with thin vertical dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[var(--line)] rounded-[4px] bg-[var(--paper)] overflow-hidden shadow-sm">
          {capabilityGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <MotionReveal
                key={group.title}
                delay={idx * 0.12}
                direction="up"
                className={`p-8 sm:p-10 flex flex-col justify-between ${
                  idx !== capabilityGroups.length - 1
                    ? "lg:border-r border-b lg:border-b-0 border-[var(--line)]"
                    : ""
                }`}
              >
                <div className="space-y-6">
                  {/* Column Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] tracking-widest uppercase font-mono text-[var(--antique-gold)]">
                        {group.eyebrow}
                      </span>
                      <Icon className="w-5 h-5 text-[var(--forest)]" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--forest)]">
                      {group.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--muted-ink)] leading-relaxed font-light">
                    {group.summary}
                  </p>

                  <div className="w-full h-[1px] bg-[var(--line-light)]" />

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--antique-gold)] shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-8 mt-8 border-t border-[var(--line-light)]">
                  <span className="text-[0.62rem] tracking-widest uppercase text-[var(--muted-ink)] block mb-2 font-mono">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[0.68rem] px-2 py-0.5 bg-[var(--ivory)] border border-[var(--line)] rounded-[2px] font-mono text-[var(--forest)] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
