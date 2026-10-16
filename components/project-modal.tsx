"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu, Activity } from "lucide-react";
import { GithubIcon, AppleIcon } from "./icons";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[var(--deep-forest)]/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--ivory)] border border-[var(--line)] rounded-[4px] shadow-2xl p-6 sm:p-8 md:p-10 text-[var(--ink)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full border border-[var(--line)] hover:border-[var(--antique-gold)] hover:bg-[var(--paper)] text-[var(--muted-ink)] hover:text-[var(--forest)] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-[var(--line)] pb-6 pr-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--antique-gold)]">
              {project.category}
            </span>
            <span className="text-[0.68rem] font-mono px-2 py-0.5 rounded bg-[var(--paper)] border border-[var(--line)] text-[var(--forest)] font-medium">
              {project.badge}
            </span>
          </div>

          <h2 id="modal-title" className="font-serif text-3xl sm:text-4xl text-[var(--forest)] font-normal">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-ink)] font-light">
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] text-[var(--ink)] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-b border-[var(--line)] bg-[var(--paper)]/50 -mx-6 sm:-mx-8 md:-mx-10 px-6 sm:px-8 md:px-10 my-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="space-y-0.5">
              <span className="text-[0.68rem] tracking-wider uppercase text-[var(--muted-ink)]">
                {metric.label}
              </span>
              <p className="font-serif text-base sm:text-lg font-medium text-[var(--forest)]">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-6 pt-3 text-sm sm:text-base leading-relaxed">
          {/* Problem & Solution */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-[var(--forest)] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--antique-gold)]" />
              Problem & Operational Context
            </h3>
            <p className="text-[var(--muted-ink)]">
              {project.architecture.context}
            </p>
          </div>

          {/* My Role & Architecture */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-[var(--forest)] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[var(--antique-gold)]" />
              My Architectural Responsibility
            </h3>
            <p className="text-[var(--muted-ink)]">
              {project.architecture.role}
            </p>
          </div>

          {/* Hard Engineering Part */}
          <div className="space-y-2 bg-[var(--paper)] p-4 rounded-[3px] border-l-2 border-[var(--antique-gold)]">
            <h3 className="font-serif text-base font-semibold text-[var(--forest)] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[var(--antique-gold)]" />
              The Difficult Engineering Challenge
            </h3>
            <p className="text-xs sm:text-sm text-[var(--ink)]">
              {project.architecture.hardPart}
            </p>
          </div>

          {/* Validation & Evidence */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-[var(--forest)] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[var(--antique-gold)]" />
              Empirical Validation & Testing
            </h3>
            <p className="text-[var(--muted-ink)]">
              {project.architecture.validation}
            </p>
          </div>

          {/* Outcome & Current State */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-[var(--forest)] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--forest)]" />
              Current State & Findings
            </h3>
            <p className="text-[var(--muted-ink)]">
              {project.architecture.outcome}
            </p>
          </div>

          {/* Disclaimer if applicable */}
          {project.disclaimer && (
            <div className="text-xs text-[var(--muted-ink)] italic bg-[var(--paper)] p-3 border border-[var(--line)] rounded-[2px]">
              <strong>Note:</strong> {project.disclaimer}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider bg-[var(--forest)] text-[var(--ivory)] hover:bg-[var(--deep-forest)] rounded-[2px] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider bg-[var(--deep-forest)] border border-[var(--antique-gold)]/40 hover:border-[var(--antique-gold)] text-[var(--ivory)] rounded-[2px] transition-colors"
              >
                <AppleIcon className="w-4 h-4 text-[var(--antique-gold)]" />
                <span>View on Apple App Store</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider bg-[var(--paper)] border border-[var(--line)] hover:border-[var(--antique-gold)] text-[var(--forest)] rounded-[2px] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Showcase</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-medium uppercase tracking-wider text-[var(--muted-ink)] hover:text-[var(--forest)]"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
