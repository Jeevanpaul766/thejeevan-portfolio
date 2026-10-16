"use client";

import React, { useState } from "react";
import { EditorialHeading } from "./editorial-heading";
import { MotionReveal } from "./motion-reveal";
import { fieldNotes, Note } from "@/data/notes";
import { ArrowUpRight, BookOpen, Clock, X, CheckCircle } from "lucide-react";

export function NotesSection() {
  const [activeNote, setActiveNote] = useState<Note | null>(null);

  return (
    <section id="notes" className="py-20 md:py-32 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <MotionReveal direction="up">
          <EditorialHeading
            eyebrow="Field Notes"
            title="Technical reflections & observations."
            description="Brief essays and field dispatches documenting non-obvious engineering decisions, failure patterns, and architectural trade-offs."
            className="mb-14"
          />
        </MotionReveal>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fieldNotes.map((note, idx) => (
            <MotionReveal
              key={note.slug}
              delay={idx * 0.1}
              direction="up"
              className="bg-[var(--ivory)] border border-[var(--line)] hover:border-[var(--antique-gold)] rounded-[4px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-sm group cursor-pointer"
            >
              <div
                onClick={() => setActiveNote(note)}
                className="space-y-4"
              >
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-[var(--muted-ink)] pb-3 border-b border-[var(--line-light)]">
                  <span className="font-mono text-[var(--antique-gold)] font-medium uppercase tracking-wider text-[0.68rem]">
                    {note.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[0.7rem]">
                    <Clock className="w-3 h-3" />
                    <span>{note.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--forest)] group-hover:text-[var(--deep-forest)] transition-colors leading-snug">
                  {note.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[var(--muted-ink)] leading-relaxed font-light">
                  {note.summary}
                </p>
              </div>

              {/* Action */}
              <div
                onClick={() => setActiveNote(note)}
                className="pt-6 mt-6 border-t border-[var(--line-light)] flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[var(--forest)]"
              >
                <span className="group-hover:underline underline-offset-4 decoration-[var(--antique-gold)]">
                  Read Note Summary
                </span>
                <ArrowUpRight className="w-4 h-4 text-[var(--antique-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>

      {/* Note Reader Modal */}
      {activeNote && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--deep-forest)]/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveNote(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[var(--ivory)] border border-[var(--line)] rounded-[4px] p-6 sm:p-8 md:p-10 shadow-2xl text-[var(--ink)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveNote(null)}
              aria-label="Close note"
              className="absolute top-5 right-5 p-2 rounded-full border border-[var(--line)] hover:border-[var(--antique-gold)] text-[var(--muted-ink)] hover:text-[var(--forest)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 border-b border-[var(--line)] pb-5 pr-8">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-mono text-[var(--antique-gold)] uppercase tracking-wider font-semibold">
                  {activeNote.category}
                </span>
                <span className="text-[var(--line)]">•</span>
                <span className="text-[var(--muted-ink)]">{activeNote.date}</span>
                <span className="text-[var(--line)]">•</span>
                <span className="text-[var(--muted-ink)]">{activeNote.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[var(--forest)] font-normal leading-tight">
                {activeNote.title}
              </h2>
            </div>

            <div className="py-6 space-y-5 text-sm sm:text-base leading-relaxed text-[var(--ink)]">
              <p className="text-[var(--muted-ink)]">
                {activeNote.summary}
              </p>

              <div className="bg-[var(--paper)] p-5 rounded-[3px] border border-[var(--line)] space-y-3">
                <h4 className="font-serif text-base font-semibold text-[var(--forest)] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[var(--antique-gold)]" />
                  Key Engineering Takeaways
                </h4>
                <ul className="space-y-2.5">
                  {activeNote.takeaways.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink)]">
                      <CheckCircle className="w-4 h-4 text-[var(--antique-gold)] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--line)] flex justify-end">
              <button
                onClick={() => setActiveNote(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[var(--forest)] text-[var(--ivory)] hover:bg-[var(--deep-forest)] rounded-[2px]"
              >
                Close Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
