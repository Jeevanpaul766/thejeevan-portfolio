import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jeevan Bandanadham — AI Engineer Portfolio",
    short_name: "Jeevan B.",
    description:
      "Personal portfolio of Jeevan Bandanadham. Building production Generative AI, LangGraph multi-agent systems, hybrid RAG, and Python FastAPI backends.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6F1",
    theme_color: "#183D32",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
