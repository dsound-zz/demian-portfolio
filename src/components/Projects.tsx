import { ProjectCard } from "./ProjectCard";
import type { ProjectCardProps } from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// To use project screenshots:
// 1. Create src/assets/projects/ folder
// 2. Add screenshot images with these exact names:
//    - avandar-preview.jpg (or .png, .webp)
//    - vigil-preview.jpg
//    - music-portfolio-preview.jpg
//    - climate-response-preview.jpg
//    - faunagram-preview.jpg
// 3. Uncomment the imports below and update the image paths
// 4. Recommended: Use 1200x800px screenshots for best quality

// Example imports (uncomment when you add the images):
import avandarPreview from "../assets/projects/avandar-preview.jpg";
import climateResponsePreview from "../assets/projects/climate-response-preview.jpg";
import linrPreview from "../assets/projects/linr-preview.jpg";
import signalPreview from "../assets/projects/signal-preview.png";
import legoministPreview from "../assets/projects/legominist-preview.png";
import sprigPreview from "../assets/projects/sprig-preview.png";
import tmlPreview from "../assets/projects/tml-status-dashboard-preview.png";
import resonancePreview from "../assets/projects/resonance-preview.png";
import whimPreview from "../assets/projects/whim-preview.png";




const projects: ProjectCardProps[] = [
  {
    title: "Avandar Labs",
    description:
      "At Avandar Labs, organizations needed to analyze datasets with " +
      "millions of rows, but server-side retrieval was too slow to be " +
      "usable. I moved the analytics layer into the browser with " +
      "DuckDB-WASM, so data could be queried locally without shipping " +
      "everything to a server, and paired it with an LLM-driven " +
      "plain-language query layer that let non-technical users filter " +
      "data without writing SQL. Built with React/TanStack, DexieDB for " +
      "local persistence, and Supabase.",
    image: avandarPreview,
    tags: ["React/TanStack", "TypeScript", "DuckDB-WASM", "DexieDB", "Supabase"],
    githubUrl: "https://github.com/AvandarLabs/avandar/releases/tag/v0.1.0",
    demoUrl: "https://www.avandarlabs.com/",
    blogUrl: "https://www.avandarlabs.com/blog/avandar-v0-1",
    category: "Production",
  },
  {
    title: "Climate Response",
    description:
      "High-energy industrial users at Olivine needed to see their " +
      "emissions in real time. I helped build the pipeline that pulled " +
      "data from industrial sensors and utility feeds and turned it into " +
      "an actionable dashboard across web and React Native. The core " +
      "constraint was surfacing live data fast enough to be useful " +
      "without slowing the interface down.",
    image: climateResponsePreview,
    tags: ["React", "React Native", "Express", "TypeScript", "Styled Components", "Postgres"],
    demoUrl: "https://www.climateresponse.com/",
    category: "Production",
  },
  {
    title: "Whim",
    description:
      "To solve the extreme fragmentation of city nightlife and community event discovery, " +
      "I built Whim—a comprehensive B2B local events data platform and consumer aggregator. " +
      "The architecture autonomously ingests disparate data streams from ticketing APIs, " +
      "headless Playwright scrapers, iCal feeds, and direct venue submissions. " +
      "The system normalizes, geocodes, and deduplicates these feeds into a unified, " +
      "high-integrity REST API. For the end consumer, this proprietary data infrastructure " +
      "powers a sleek, map-centric discovery UI that instantly answers the question, " +
      "'what's happening near me tonight'.",
    image: whimPreview, 
    tags: ["Next.js", "TypeScript", "Drizzle ORM", "Neon Postgres", "Mapbox", "Playwright"],
    githubUrl: "https://github.com/dsound-zz/whim",
    demoUrl: "https://whim-production-af50.up.railway.app",
    blogUrl: "",
    category: "Production",
  },
  {
    title: "TML Status Dashboard",
    description:
      "At TML Information Services, operations teams needed a live view " +
      "of MVR data feed health across all 50 states — distinguishing " +
      "planned outages with scheduled windows from unplanned ones that " +
      "needed immediate contact. I rebuilt this production system as a " +
      "portfolio piece, replacing the original Action Cable polling with " +
      "TanStack Query's refetchInterval, which handles the same cadence " +
      "without the Redis dependency. A background simulator flips state " +
      "statuses on a real schedule so the dashboard behaves like the " +
      "live system. Built with Rails 7, React 19, MUI v9, and TanStack " +
      "Query, deployed to Railway.",
    image: tmlPreview,
    tags: ["Rails", "React", "TypeScript", "TanStack Query", "MUI", "PostgreSQL"],
    githubUrl: "https://github.com/dsound-zz/tml-status-dashboard",
    demoUrl: "https://wonderful-gentleness-production-5f5b.up.railway.app/",
    category: "Production",
  },
  {
    title: "The Legominist",
    description:
      "A RAG pipeline and research tool for G.I. Gurdjieff's 'Beelzebub's Tales to His Grandson'. It features a high-performance semantic search engine, a specialized lexicon analysis engine for esoteric neologisms, and a scholar-inspired dashboard. Built with Next.js, FastAPI, and the Gemini API to parse and navigate one of the 20th century's most complex esoteric texts.",
    image: legoministPreview,
    imageClassName: "object-contain object-center p-4",
    tags: ["Next.js", "FastAPI", "Gemini API", "RAG", "ChromaDB", "Vector Search"],
    githubUrl: "https://github.com/dsound-zz/the-legominists",
    demoUrl: "https://the-legominist.vercel.app/",
    category: "Neural",
  },
  {
    title: "Signal",
    description:
      "A Retrieval-Augmented Generation app built around a hard problem: " +
      "LLM hallucination in a contested, misinformation-heavy domain " +
      "(UAP research). Generation is strictly constrained to ingested, " +
      "verified primary sources, and a schema-level credibility-tier " +
      "system (Government, Scientific, Secondary) weights retrieved " +
      "context by source reliability. Every response carries forced " +
      "citations with page numbers and source links. Built with " +
      "Next.js 14, Neon pgvector, Drizzle ORM, and Claude via the " +
      "Vercel AI SDK.",
    image: signalPreview,
    imageClassName: "object-contain object-center p-2",
    tags: ["Next.js", "RAG", "Vector Search", "Neon", "Drizzle ORM", "Vercel AI SDK"],
    githubUrl: "https://github.com/dsound-zz/signal",
    demoUrl: "https://signal-drab-gamma.vercel.app/",
    category: "Personal",
  },
  {
    title: "Sprig",
    description:
      "A keyboard-driven mind-mapping tool built around a specific " +
      "design question: how do you let an LLM expand your thinking " +
      "without taking the wheel? Three modes (manual building, an AI " +
      "copilot that suggests related concepts with explicit " +
      "keep-or-edit control, and an autopilot that expands a concept to " +
      "a chosen depth) keep the user in charge of every AI " +
      "contribution. Built with Next.js, React Flow, Neon Postgres, and " +
      "Together AI.",
    image: sprigPreview,
    imageClassName: "object-contain object-center p-2",
    tags: ["Next.js", "TypeScript", "React Flow", "LLM", "Canvas", "DAG"],
    githubUrl: "https://github.com/dsound-zz/sprig",
    demoUrl: "https://sprig.vercel.app/",
    category: "Personal",
  },
  {
    title: "Linr",
    description:
      "Linr resolves ambiguous music queries into properly attributed " +
      "song credits. The hard part is entity resolution: reconciling " +
      "messy, inconsistent metadata across MusicBrainz and Wikipedia, " +
      "with an LLM layer to disambiguate. It carries a point of view " +
      "from my prior career as a composer, treating music as cultural " +
      "work with authorship rather than just searchable metadata. Built " +
      "with Next.js, TypeScript, and the MusicBrainz and Wikimedia APIs.",
    image: linrPreview,
    tags: ["Next.js", "TypeScript", "OpenAI", "MusicBrainz API", "Wikimedia API"],
    githubUrl: "https://github.com/dsound-zz/linr",
    demoUrl: "https://linr-six.vercel.app/",
    category: "Personal",
  },
  {
    title: "Resonance",
    description:
      "This app is a hands-on physics sandbox designed to make abstract physical phenomena felt rather than explained. Instead of equations first, users interact directly with vibrating strings, resonant plates, coupled oscillators, and chaotic systems, discovering patterns through motion, sound, and visual feedback.",
    image: resonancePreview,
    tags: ["ReactJS", "Canvas", "Custom CSS"],
    githubUrl: "https://github.com/dsound-zz/resonance",
    demoUrl: "https://resonance-mu-seven.vercel.app/",
    category: "Web App",
  },
];

export function Projects() {
  const allProjects = projects;
  const neural = projects.filter((p) => p.category === "Neural");
  const other = projects.filter(
    (p) => p.category === "Portfolio" || p.category === "Social"
  );

  return (
    <section id="projects" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="font-heading font-semibold mb-4 text-warm-brown"
            style={{ fontSize: "clamp(2.188rem, 6vw, 3.938rem)" }}
          >
            Projects
          </h2>
          <p
            className="text-3xl text-warm-taupe max-w-2xl mx-auto font-body font-medium leading-relaxed"
            style={{ fontSize: "clamp(1.094rem, 2vw, 1.969rem)" }}
          >
            Some of the things I've built: work from Avandar Labs, climate
            tools, and a few home-grown projects I made for fun or curiosity.
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-7xl mx-auto">
          <TabsList className="flex w-full max-w-full flex-wrap justify-center mx-auto mb-12 gap-2 sm:gap-1">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="neural">Neural</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent
            value="all"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>

          <TabsContent
            value="neural"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {neural.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>

          <TabsContent
            value="other"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {other.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
