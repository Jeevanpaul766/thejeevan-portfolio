export interface Note {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  takeaways: string[];
}

export const fieldNotes: Note[] = [
  {
    slug: "tracing-agent-workflows",
    title: "Tracing Agent Workflows: Moving Beyond Naive Demos",
    category: "Observability & Multi-Agent Systems",
    date: "March 2026",
    readTime: "6 min read",
    summary:
      "Why traditional HTTP request/response logging breaks down in non-deterministic multi-agent graphs, and how trace spans, execution state trees, and token consumption metrics keep production agents debuggable.",
    takeaways: [
      "Treat agent loops as state machines with discrete, immutable transitions rather than monolithic chains.",
      "Track tool call latency and output schema conformance at each branch to isolate regressions early.",
      "Implement deterministic calculation verification when generative outputs involve quantitative reasoning.",
    ],
  },
  {
    slug: "designing-resilient-rag",
    title: "Designing Resilient RAG: Lessons from Hybrid Dense-Sparse Retrieval",
    category: "Information Retrieval & NLP",
    date: "February 2026",
    readTime: "8 min read",
    summary:
      "Pure vector cosine similarity routinely fails on exact alphanumeric statutory codes, product IDs, and domain acronyms. How combining Reciprocal Rank Fusion (RRF) with cross-encoder rerankers eliminates retrieval blind spots.",
    takeaways: [
      "Combine BM25 for keyword/code exactness with dense embeddings for semantic nuance.",
      "Use cross-encoder reranking on top 25 candidates to filter out false-positive embedding clusters.",
      "Establish strict citation grounding: reject generated answers when retrieved context lacks affirmative support.",
    ],
  },
  {
    slug: "small-language-models-consumer-silicon",
    title: "Running Small Language Models on Local Silicon: Practical Constraints",
    category: "Local Inference & Edge AI",
    date: "January 2026",
    readTime: "7 min read",
    summary:
      "A deep dive into GGUF quantization levels, KV cache memory footprint, and prompt formatting quirks when running Llama 3 / Mistral 8B models locally for private automated workflows.",
    takeaways: [
      "4-bit quantization (Q4_K_M) retains ~98% of extraction capability while halving memory footprint.",
      "Context compression and iterative chunk summarization outperform throwing 32k tokens into a single prompt.",
      "Zero cloud egress makes local SLMs the premier choice for proprietary internal document synthesis.",
    ],
  },
];
