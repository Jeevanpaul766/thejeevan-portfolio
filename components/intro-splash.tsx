"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 750);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--paper)] pointer-events-none select-none"
      >
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--antique-gold)] text-[var(--forest)] font-serif text-lg font-bold">
            JB
          </div>
          <h1 className="font-serif text-2xl font-bold tracking-[0.2em] text-[var(--forest)] uppercase">
            Jeevan Bandanadham
          </h1>
          <p className="text-[0.68rem] tracking-[0.22em] uppercase font-mono text-[var(--muted-ink)]">
            AI Engineer · Agentic AI & Python Backend
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
