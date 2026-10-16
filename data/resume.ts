export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  badge?: string;
  link?: string;
  linkText?: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  skills: string;
  verificationUrl: string;
  credentialId?: string;
  badge?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
}

export const personalInfo = {
  name: "Jeevan Bandanadham",
  preferredName: "Jeevan",
  title: "AI Engineer | Agentic AI | LangGraph | RAG | Python Backend",
  location: "Andhra Pradesh, India",
  email: "Jeevanpaul766@gmail.com",
  github: "https://github.com/Jeevanpaul766",
  linkedin: "https://www.linkedin.com/in/jeevanbandanadham/",
  summary:
    "AI Engineer building production Generative AI and agentic systems with LangChain, LangGraph, and Python backends. Hands-on with hybrid RAG, embeddings, vector retrieval, prompt engineering, LangSmith tracing, and agent graphs (state, reducers, checkpointing, HITL, safety gates). Built NyayaPath, Project Anveshan, and a freelance conversational AI app on the Apple App Store.",
};

export const experiences: Experience[] = [
  {
    role: "Freelance AI & Backend Engineer",
    company: "WorldTrendz LLC",
    period: "Mar 2026 – Jun 2026",
    badge: "Production App Store",
    link: "https://apps.apple.com/in/app/worldtrendz/id6761761956",
    linkText: "Apple App Store",
    highlights: [
      "Designed and deployed WorldTrendz, a production conversational AI app published on the Apple App Store.",
      "Built secure FastAPI backends, authentication, context management, and multi-model LLM orchestration for live users.",
    ],
  },
  {
    role: "AI Engineer / Associate Backend Engineer",
    company: "Vaaryan Interfaces Pvt. Ltd.",
    period: "2025",
    badge: "Production Cloud",
    highlights: [
      "Built production GenAI backend services with Python, FastAPI, and LangChain — RAG pipelines, embeddings, vector retrieval, and prompt engineering.",
      "Delivered authenticated REST APIs, Dockerized services on GCP / Firebase, and maintained quality with PyTest, debugging, and code reviews.",
    ],
  },
  {
    role: "AI Engineering Intern",
    company: "Vaaryan Interfaces Pvt. Ltd.",
    period: "2024 – 2025",
    badge: "Promotion upon Ownership",
    highlights: [
      "One-year internship in Python backend, LLM integration, and RAG; built FastAPI APIs with PostgreSQL/MongoDB; promoted based on ownership.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Introduction to LangGraph (Python)",
    issuer: "LangChain Academy",
    skills: "State, reducers, checkpointing, HITL, prompt caching",
    verificationUrl: "https://academy.langchain.com/certificates/iqhozymvjr",
    badge: "LangChain Certified",
  },
  {
    title: "Introduction to Deep Agents",
    issuer: "LangChain Academy",
    skills: "Long-running agents and multi-step workflows",
    verificationUrl: "https://academy.langchain.com/certificates/pmiwedztgq",
    badge: "Deep Agents",
  },
  {
    title: "Quickstart: LangSmith Essentials",
    issuer: "LangChain Academy",
    skills: "Tracing, evals, experiments, and agent observability",
    verificationUrl: "https://academy.langchain.com/certificates/dgp1iapzzc",
    badge: "Observability",
  },
  {
    title: "Hugging Face Agents Course",
    issuer: "Hugging Face",
    skills: "Certificate of Excellence — GAIA multi-tool agent evaluation (~40%)",
    verificationUrl:
      "https://us.aws.cdn.hf.co/xet-bridge-us/6800ea554845e4edbca48825/fa2723bd3ae6798d7f0cb02685caee724eb71ee958c749622396420a4faf10ee?response-content-disposition=inline;+filename*=UTF-8''2026-08-29.png",
    badge: "Certificate of Excellence",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Great Learning",
    skills: "Prompt design and LLM prompting",
    credentialId: "CWUKMBCM",
    verificationUrl:
      "https://www.mygreatlearning.com/certificate/CWUKMBCM?referrer_code=GLEUGCLZWF3IQ",
    badge: "Verified Credential",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    skills: "Agentic coding workflows with Claude Code",
    verificationUrl: "https://verify.skilljar.com/c/b886ynjobgbm",
    badge: "Anthropic Verified",
  },
];

export const education: Education = {
  degree: "B.Sc.",
  field: "Mathematics, Statistics & Computer Science",
  institution: "Krishna Chaitanya Degree College",
  location: "Andhra Pradesh, India",
  period: "2018 – 2023",
};

export const skillsData = {
  languagesCore: ["Python", "REST APIs", "OOP", "FastAPI", "TypeScript"],
  generativeAI: [
    "LangGraph",
    "Multi-Agent Orchestration",
    "Hybrid RAG",
    "Tool Use",
    "HITL (Human-in-the-Loop)",
    "Deterministic Guardrails",
    "LangSmith Tracing",
    "Deep Agents",
  ],
  frameworksTools: [
    "LangChain",
    "LangGraph",
    "ChromaDB",
    "BM25 / RRF",
    "Hugging Face Transformers",
    "Docker",
    "Git",
    "PyTest",
    "React / Vite",
  ],
  backendCloud: [
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Google Cloud Platform (GCP)",
    "Ollama (Local Models)",
    "AWS & Azure (Basic)",
  ],
};
