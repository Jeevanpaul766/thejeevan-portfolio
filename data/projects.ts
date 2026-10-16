export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: "Production · App Store" | "Open Source OS" | "Educational Agent" | "Production Service";
  problem: string;
  solution: string;
  whatIBuilt: string;
  tags: string[];
  architecture: {
    context: string;
    role: string;
    hardPart: string;
    validation: string;
    outcome: string;
  };
  metrics: { label: string; value: string }[];
  disclaimer?: string;
  links: {
    github?: string;
    demo?: string;
    appStore?: string;
    article?: string;
  };
}

export const projects: Project[] = [
  {
    id: "project-anveshan",
    title: "Project Anveshan",
    subtitle: "Open Deep Research Operating System",
    category: "Agentic AI · Multi-Agent Orchestration",
    badge: "Open Source OS",
    problem:
      "Single-prompt AI search and naive RAG suffer from severe context degradation, citation hallucination, and lack of methodical critique when investigating complex academic questions.",
    solution:
      "A 5-agent LangGraph Deep Research OS with citation provenance, adversarial critique, novelty-saturation stop detection, and disk checkpointing, guaranteeing 100% verifiable citation integrity across arXiv, CrossRef, and Semantic Scholar.",
    whatIBuilt:
      "Engineered an autonomous multi-agent state machine (Orchestrator, Academic Search Manager, Evidence Extractor, Adversarial Critic, and Synthesizer) with local-first Ollama execution, React + Vite SSE live streaming dashboard, and Python SDK with hierarchical LangSmith tracing.",
    tags: [
      "LangGraph",
      "Multi-Agent",
      "LangSmith",
      "Python SDK",
      "Hybrid RAG",
      "React / Vite",
      "Ollama",
      "SSE Streaming",
    ],
    architecture: {
      context:
        "Researchers need autonomous multi-step investigation that can run for 3 to 60 minutes across academic registries without hallucinating URLs or losing state mid-investigation.",
      role:
        "Lead Architect & Open Source Creator. Designed the complete 5-agent state graph, memory checkpointing engine, Python SDK, and React Vite streaming UI.",
      hardPart:
        "Preventing infinite loops and information redundancy during multi-hop investigation. Engineered a streak-based novelty-saturation engine that computes information gain delta (ΔI) across iterations and triggers convergence when returns diminish.",
      validation:
        "Benchmarked on rigorous multi-domain academic queries; achieved 100% verified DOI/arXiv citation integrity with zero hallucinated links and 3-level hierarchical LangSmith waterfall trace coverage.",
      outcome:
        "Open-source deep research system capable of generating comprehensive, publication-grade dossiers with verifiable academic source trees and full pause/resume checkpointing.",
    },
    metrics: [
      { label: "Agent Topology", value: "5 Coordinated Agents" },
      { label: "Citation Integrity", value: "100% Grounded (No Hallucinations)" },
      { label: "Registries", value: "arXiv, CrossRef, Semantic Scholar" },
    ],
    links: {
      github: "https://github.com/Jeevanpaul766/PROJECT-ANVESHAN",
    },
  },
  {
    id: "nyayapath",
    title: "NyayaPath",
    subtitle: "Dual-Regime Legal Guidance Agent",
    category: "Legal NLP · Deterministic Guardrails",
    badge: "Educational Agent",
    problem:
      "India's transition from colonial statutes (IPC, CrPC) to modern criminal codes (BNS, BNSS) creates severe legal misdirection when generic LLMs confuse identical section numbers with completely different legal meanings (e.g., Section 482).",
    solution:
      "A 12-node cyclic LangGraph agent with date-of-offence temporal routing, local Hybrid RAG over 2,820 indexed statutory sections (ChromaDB + BM25 + RRF), two-stage asymmetric crisis gates, and pure Python zero-LLM output sanitizers.",
    whatIBuilt:
      "Architected the 12-node cyclic StateGraph in Python 3.11 with FastAPI backend, ChromaDB vector store, BM25 lexical retriever, Reciprocal Rank Fusion, deterministic section allowlist, React 19 Vite TypeScript frontend, and end-to-end LangSmith telemetry.",
    tags: [
      "LangGraph (12-Node)",
      "ChromaDB",
      "BM25 / RRF",
      "FastAPI",
      "LangSmith",
      "Deterministic Guardrails",
      "React 19 / Vite",
      "Python 3.11+",
    ],
    architecture: {
      context:
        "Educational legal tech system designed to demonstrate how deterministic guardrails and temporal routing resolve constitutional Article 20(1) ex-post-facto statute collisions.",
      role:
        "Sole AI Engineer. Implemented the 12-node cyclic state machine, statutory indexing pipeline, intent classifiers, and print-ready PDF legal memorandum export.",
      hardPart:
        "Resolving Section 482 collision: in CrPC it denotes High Court Quashing powers, whereas in BNSS it denotes Anticipatory Bail. Solved by routing offence dates strictly through temporal classifiers before retrieval.",
      validation:
        "140 passing unit tests and a 25-case automated evaluation suite spanning 7 legal categories; zero hallucinated sections allowed past the deterministic output sanitizer.",
      outcome:
        "Interactive legal orientation console generating structured 7-part legal memoranda with millisecond telemetry tracking across local Ollama Qwen2.5:7b models.",
    },
    disclaimer:
      "Portfolio & educational project demonstrating advanced agentic AI architectures and guardrails. Strictly not legal advice and not a legal service.",
    metrics: [
      { label: "Statutory Corpus", value: "2,820 Partitioned Sections" },
      { label: "Graph Complexity", value: "12-Node Cyclic StateGraph" },
      { label: "Safety Evaluation", value: "140 Unit Tests Passed" },
    ],
    links: {
      github: "https://github.com/Jeevanpaul766/NyayaPath",
    },
  },
  {
    id: "worldtrendz",
    title: "WorldTrendz",
    subtitle: "Production Conversational AI iOS Application",
    category: "Production AI · Mobile & Backend",
    badge: "Production · App Store",
    problem:
      "E-commerce mobile shoppers face friction navigating large catalogs and require instant, context-aware conversational shopping assistance with low latency on mobile devices.",
    solution:
      "A production conversational AI application published live on the Apple App Store, backed by secure asynchronous FastAPI services, robust context management, and multi-model LLM orchestration.",
    whatIBuilt:
      "Engineered the production AI backend microservices in Python and FastAPI, handling live user sessions, stateless JWT authentication, context window pruning, product catalog retrieval, and multi-model failover routing.",
    tags: [
      "FastAPI",
      "Production GenAI",
      "Apple App Store",
      "Multi-Model LLMs",
      "Context Management",
      "Python",
      "Docker",
    ],
    architecture: {
      context:
        "Commercial conversational application for WorldTrendz LLC published on the Apple App Store serving real live end-users.",
      role:
        "Freelance AI & Backend Engineer. Responsible for the FastAPI cloud backend, multi-model orchestration, security, and context memory.",
      hardPart:
        "Maintaining low latency and zero session state drops under concurrent mobile traffic while managing token budget constraints across conversation turns.",
      validation:
        "Successfully passed Apple App Store technical review and deployed to live production users with automated health check monitoring.",
      outcome:
        "Live mobile application with active users on iOS, demonstrating end-to-end production backend reliability and conversational AI orchestration.",
    },
    metrics: [
      { label: "Deployment", value: "Apple App Store (Live)" },
      { label: "Backend Latency", value: "Sub-second Streaming" },
      { label: "Architecture", value: "Async FastAPI + Multi-LLM" },
    ],
    links: {
      appStore: "https://apps.apple.com/in/app/worldtrendz/id6761761956",
    },
  },
  {
    id: "vaaryan-genai",
    title: "Production GenAI & RAG Services",
    subtitle: "Enterprise Backend Architecture at Vaaryan Interfaces",
    category: "Enterprise AI · Systems & Cloud",
    badge: "Production Service",
    problem:
      "Enterprise clients require custom LLM integrations, grounded RAG search over internal knowledge bases, and strictly authenticated APIs capable of cloud scale.",
    solution:
      "Engineered production GenAI backend services utilizing Python, FastAPI, and LangChain—incorporating dense embeddings, vector retrieval, and prompt engineering.",
    whatIBuilt:
      "Delivered authenticated REST APIs, containerized Docker microservices deployed on Google Cloud Platform and Firebase, with persistent data storage in PostgreSQL and MongoDB, verified via PyTest.",
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "RAG Pipelines",
      "PostgreSQL",
      "MongoDB",
      "GCP / Firebase",
      "Docker",
      "PyTest",
    ],
    architecture: {
      context:
        "Enterprise GenAI backend development at Vaaryan Interfaces Pvt. Ltd., moving prototypes into production cloud infrastructure.",
      role:
        "AI Engineer / Associate Backend Engineer (promoted from AI Engineering Intern based on high ownership).",
      hardPart:
        "Designing modular data ingestion pipelines and ensuring reliable vector embedding refreshes while maintaining sub-second API response times.",
      validation:
        "Maintained high test coverage with automated PyTest test suites and rigorous peer code review processes.",
      outcome:
        "Deployed enterprise-ready backend services powering authenticated client applications with predictable cloud operating costs.",
    },
    metrics: [
      { label: "Cloud Platforms", value: "GCP & Firebase" },
      { label: "Databases", value: "PostgreSQL & MongoDB" },
      { label: "Code Quality", value: "PyTest Automated CI" },
    ],
    links: {
      github: "https://github.com/Jeevanpaul766",
    },
  },
];
