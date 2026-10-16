import { IntroSplash } from "@/components/intro-splash";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { SelectedWork } from "@/components/selected-work";
import { ExperienceSection } from "@/components/experience-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { AboutSection } from "@/components/about-section";
import { NotesSection } from "@/components/notes-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      {/* Editorial Opening Watermark Reveal */}
      <IntroSplash />

      {/* Persistent Site Navigation Header */}
      <SiteHeader />

      {/* Main Editorial Content Sequence */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Selected Work (Project Anveshan, NyayaPath, WorldTrendz, Vaaryan GenAI) */}
        <SelectedWork />

        {/* 3. Professional Experience, Certifications & Education */}
        <ExperienceSection />

        {/* 4. Capabilities (Agentic AI, Backend & Distributed Systems, Core Stack) */}
        <CapabilitiesSection />

        {/* 5. Approach (How I Think - 4 Step Engineering Sequence) */}
        <ProcessTimeline />

        {/* 6. About (The Person Behind the Systems & Principles) */}
        <AboutSection />

        {/* 7. Field Notes / Technical Writing */}
        <NotesSection />

        {/* 8. Contact (Direct Email & Inquiries) */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </>
  );
}
