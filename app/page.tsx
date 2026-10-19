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
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jeevan Bandanadham",
    alternateName: "Jeevan Paul",
    jobTitle: "AI Engineer",
    description:
      "AI Engineer building production Generative AI, LangGraph multi-agent systems, hybrid RAG, LangSmith tracing, and Python FastAPI backends.",
    url: "https://thejeevan.in",
    image: "https://thejeevan.in/images/jeevan-paul.png",
    email: "mailto:Jeevanpaul766@gmail.com",
    sameAs: [
      "https://github.com/Jeevanpaul766",
      "https://www.linkedin.com/in/jeevanbandanadham/",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Krishna Chaitanya Degree College",
    },
    knowsAbout: [
      "LangGraph",
      "Multi-Agent Orchestration",
      "Hybrid RAG",
      "LangSmith",
      "FastAPI",
      "Python",
      "LangChain",
      "Generative AI",
      "ChromaDB",
      "Docker",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Trivexa Technologies",
      url: "https://trivexatechnologies.in/",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jeevan Bandanadham — AI Engineer Portfolio",
    url: "https://thejeevan.in",
    description:
      "Personal portfolio of Jeevan Bandanadham. Building production Generative AI, LangGraph multi-agent systems, hybrid RAG, and Python FastAPI backends.",
    author: {
      "@type": "Person",
      name: "Jeevan Bandanadham",
    },
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Jeevan Bandanadham",
      url: "https://thejeevan.in",
    },
    dateCreated: "2026-10-01",
    dateModified: "2026-10-19",
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />

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
