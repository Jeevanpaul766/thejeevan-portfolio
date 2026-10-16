import React from "react";

interface EditorialHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function EditorialHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: EditorialHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span className="w-6 h-[1px] bg-[var(--antique-gold)]" />
          <p className="text-[0.72rem] tracking-[0.18em] uppercase font-semibold text-[var(--antique-gold)]">
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.08] tracking-tight ${
          isDark ? "text-[var(--ivory)]" : "text-[var(--forest)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed pt-1 ${
            isDark ? "text-[var(--sage)]/90" : "text-[var(--muted-ink)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
