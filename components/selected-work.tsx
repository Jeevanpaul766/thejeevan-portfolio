"use client";

import React, { useState } from "react";
import { EditorialHeading } from "./editorial-heading";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { projects, Project } from "@/data/projects";
import { MotionReveal } from "./motion-reveal";

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Agentic AI & LangGraph", "Production Services", "Hybrid RAG"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Agentic AI & LangGraph")
      return p.category.includes("Agentic") || p.tags.includes("LangGraph");
    if (activeFilter === "Production Services")
      return p.badge.includes("Production");
    if (activeFilter === "Hybrid RAG")
      return p.tags.includes("Hybrid RAG") || p.tags.includes("RAG Pipelines");
    return true;
  });

  return (
    <section id="work" className="py-20 md:py-32 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <MotionReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--line-light)]">
            <EditorialHeading
              eyebrow="Selected Work"
              title="Proof over claims."
              description="A curated selection of AI systems, multi-agent state machines, and resilient backend services built with strict evaluation and measurable outcomes."
            />

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-[2px] transition-all border ${
                    activeFilter === cat
                      ? "bg-[var(--forest)] text-[var(--ivory)] border-[var(--forest)]"
                      : "bg-[var(--ivory)] text-[var(--muted-ink)] border-[var(--line)] hover:border-[var(--antique-gold)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </MotionReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-12">
          {filteredProjects.map((project, idx) => (
            <MotionReveal
              key={project.id}
              delay={idx * 0.08}
              direction="up"
              className={idx === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                project={project}
                onSelect={(p) => setSelectedProject(p)}
                index={idx}
              />
            </MotionReveal>
          ))}
        </div>

        {/* Note on codebase availability */}
        <MotionReveal delay={0.2} direction="up">
          <div className="mt-12 p-4 rounded-[3px] bg-[var(--ivory)] border border-[var(--line)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--muted-ink)] gap-3 text-center sm:text-left">
            <span>
              Detailed test suites, trace logs, and architecture documentation available upon request.
            </span>
            <a
              href="https://github.com/Jeevan-Paul"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--forest)] hover:underline flex items-center gap-1 shrink-0"
            >
              View GitHub Profile →
            </a>
          </div>
        </MotionReveal>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
