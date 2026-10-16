"use client";

import React from "react";
import { ArrowUpRight, Cpu, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer bg-[var(--ivory)] border border-[var(--line)] hover:border-[var(--antique-gold)] rounded-[4px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(24,61,50,0.06)] hover:-translate-y-1"
    >
      <div>
        {/* Card Header: Category & Counter */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--line-light)]">
          <div className="flex items-center gap-2">
            <span className="text-[0.68rem] font-mono tracking-widest uppercase text-[var(--antique-gold)] font-medium">
              {project.category}
            </span>
            <span className="text-[var(--line)]">•</span>
            <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-[var(--paper)] text-[var(--forest)] font-medium border border-[var(--line)]">
              {project.badge}
            </span>
          </div>
          <span className="text-xs font-serif text-[var(--muted-ink)] italic">
            № 0{index + 1}
          </span>
        </div>

        {/* Project Title */}
        <div className="pt-5 space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--forest)] group-hover:text-[var(--deep-forest)] transition-colors">
              {project.title}
            </h3>
            <span className="p-2 rounded-full border border-[var(--line)] group-hover:border-[var(--antique-gold)] bg-[var(--paper)] text-[var(--muted-ink)] group-hover:text-[var(--forest)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-[var(--antique-gold)] tracking-wide">
            {project.subtitle}
          </p>
        </div>

        {/* Problem & What I Built */}
        <div className="py-4 space-y-3">
          <p className="text-xs sm:text-sm text-[var(--muted-ink)] leading-relaxed">
            <strong className="font-medium text-[var(--ink)]">Problem: </strong>
            {project.problem}
          </p>
          <p className="text-xs sm:text-sm text-[var(--ink)]/90 leading-relaxed font-light">
            <strong className="font-medium text-[var(--forest)]">Engineering: </strong>
            {project.whatIBuilt}
          </p>
        </div>
      </div>

      {/* Footer: Tech tags and metrics preview */}
      <div className="pt-5 border-t border-[var(--line-light)] mt-4 space-y-4">
        {/* Metric preview */}
        <div className="grid grid-cols-2 gap-2 bg-[var(--paper)] p-3 rounded-[3px] border border-[var(--line)]">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="space-y-0.5">
              <span className="text-[0.62rem] uppercase tracking-wider text-[var(--muted-ink)] block">
                {m.label}
              </span>
              <span className="font-mono text-xs font-medium text-[var(--forest)] truncate block">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[0.68rem] px-2 py-0.5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] text-[var(--ink)] font-mono"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[0.68rem] px-1.5 py-0.5 text-[var(--muted-ink)] font-mono">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Link */}
        <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[var(--forest)] pt-1">
          <span className="group-hover:underline underline-offset-4 decoration-[var(--antique-gold)]">
            Examine Architecture & Case Study
          </span>
          <span className="text-[var(--antique-gold)] text-sm">→</span>
        </div>
      </div>
    </article>
  );
}
