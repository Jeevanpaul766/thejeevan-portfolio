import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Jeevan Bandanadham",
  description:
    "Privacy policy for thejeevan.in. No cookies, no trackers, no third-party analytics. Your data is never collected or shared.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* Header */}
      <header className="border-b border-[var(--forest)]/15 py-6">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link
            href="/"
            className="font-serif text-lg font-bold tracking-[0.16em] text-[var(--forest)] hover:text-[var(--antique-gold)] transition-colors"
          >
            ← JEEVAN BANDANADHAM
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--ink)]/60 font-mono uppercase tracking-wider mb-12">
          Last updated: October 2026
        </p>

        <div className="space-y-10 text-[var(--ink)]/85 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              Introduction
            </h2>
            <p>
              This website,{" "}
              <strong className="text-[var(--forest)]">thejeevan.in</strong>, is
              the personal portfolio of Jeevan Bandanadham. I respect your
              privacy and am committed to transparency about how this site
              operates.
            </p>
          </section>

          {/* No Cookies */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              No Cookies
            </h2>
            <p>
              This website does <strong>not</strong> set any cookies — no
              first-party cookies, no third-party cookies, no tracking cookies,
              and no session cookies. Your browser will not receive or store any
              cookie data from this site.
            </p>
          </section>

          {/* No Tracking or Analytics */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              No Tracking or Analytics
            </h2>
            <p>
              This site does <strong>not</strong> use any analytics services
              (such as Google Analytics, Mixpanel, Hotjar, or similar). No
              tracking pixels, fingerprinting scripts, or behavioral monitoring
              tools are embedded in these pages. Your browsing behavior on this
              site is not recorded, profiled, or shared with anyone.
            </p>
          </section>

          {/* No Data Collection */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              No Personal Data Collection
            </h2>
            <p>
              This website does <strong>not</strong> collect, store, or process
              any personal information. No forms on this site capture or transmit
              your data to any server. The contact section provides a direct
              email link — if you choose to contact me, your email is handled
              solely by your own email provider.
            </p>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              Hosting & Infrastructure
            </h2>
            <p>
              This site is hosted on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--forest)] underline underline-offset-2 hover:text-[var(--antique-gold)] transition-colors"
              >
                Vercel
              </a>
              . Vercel may process standard HTTP server logs (IP addresses,
              request timestamps, user agents) as part of their infrastructure
              operations. This is standard web hosting behavior and is governed
              by{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--forest)] underline underline-offset-2 hover:text-[var(--antique-gold)] transition-colors"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* External Links */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              External Links
            </h2>
            <p>
              This site contains links to external services including GitHub,
              LinkedIn, the Apple App Store, LangChain Academy, and others.
              These are third-party websites with their own privacy policies. I
              am not responsible for their content or privacy practices.
            </p>
          </section>

          {/* LLM Access */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              AI & LLM Access
            </h2>
            <p>
              This site provides{" "}
              <code className="text-sm bg-[var(--forest)]/8 px-1.5 py-0.5 rounded font-mono">
                llms.txt
              </code>{" "}
              and{" "}
              <code className="text-sm bg-[var(--forest)]/8 px-1.5 py-0.5 rounded font-mono">
                llms-full.txt
              </code>{" "}
              files following the emerging llms.txt specification. These files
              provide structured, machine-readable summaries of the portfolio
              content to enable AI agents and large language models to
              understand and reference this site. These files contain only
              publicly available portfolio information — no private or user data.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              Changes to This Policy
            </h2>
            <p>
              If this privacy policy is updated, the changes will be reflected on
              this page with an updated date. Since this site collects no data,
              material changes are unlikely.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-[var(--forest)] mb-3">
              Contact
            </h2>
            <p>
              If you have any questions about this privacy policy, you can reach
              me at{" "}
              <a
                href="mailto:Jeevanpaul766@gmail.com"
                className="text-[var(--forest)] underline underline-offset-2 hover:text-[var(--antique-gold)] transition-colors"
              >
                Jeevanpaul766@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[var(--forest)]/15 py-8">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center text-xs text-[var(--ink)]/50">
          <p>© 2026 Jeevan Bandanadham. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
