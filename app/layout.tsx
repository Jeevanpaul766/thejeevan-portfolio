import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thejeevan.in"),
  title: "Jeevan Bandanadham — AI Engineer | Agentic AI | LangGraph | Python Backend",
  description:
    "Personal portfolio of Jeevan Bandanadham. Building production Generative AI, LangGraph multi-agent systems, hybrid RAG, LangSmith tracing, and Python FastAPI backends.",
  keywords: [
    "Jeevan Bandanadham",
    "Jeevan Paul",
    "AI Engineer",
    "LangGraph",
    "Multi-Agent Orchestration",
    "Hybrid RAG",
    "ChromaDB",
    "BM25",
    "FastAPI",
    "Python Backend",
    "LangSmith",
    "Project Anveshan",
    "NyayaPath",
    "WorldTrendz",
  ],
  authors: [{ name: "Jeevan Bandanadham" }],
  creator: "Jeevan Bandanadham",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thejeevan.in",
    title: "Jeevan Bandanadham — AI Engineer | Agentic AI & Python Backend",
    description:
      "Production Generative AI and agentic systems with LangChain, LangGraph, and Python backends.",
    siteName: "thejeevan.in — Portfolio",
    images: [
      {
        url: "https://thejeevan.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeevan Bandanadham — AI Engineer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevan Bandanadham — AI Engineer | Agentic AI & Python Backend",
    description:
      "Building intelligent agentic systems with LangGraph, hybrid RAG, and dependable Python architectures.",
    images: ["https://thejeevan.in/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#183D32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased selection:bg-[var(--forest)] selection:text-[var(--ivory)]">
        {children}
      </body>
    </html>
  );
}
