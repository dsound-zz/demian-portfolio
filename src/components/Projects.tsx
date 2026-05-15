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
import vigilPreview from "../assets/projects/vigil-preview.jpg";
import musicPortfolioPreview from "../assets/projects/music-portfolio-preview.jpg";
import climateResponsePreview from "../assets/projects/climate-response-preview.jpg";
import moodBlocksPreview from "../assets/projects/mood-blocks.jpg";
import linrPreview from "../assets/projects/linr-preview.jpg";
import resonancePreview from "../assets/projects/resonance-preview.png";
import tracePreview from "../assets/projects/trace-preview.png";
import nowHerePreview from "../assets/projects/nowhere-preview.png";
import signalPreview from "../assets/projects/signal-preview.png";
import legoministPreview from "../assets/projects/legominist-preview.png";
import sprigPreview from "../assets/projects/sprig-preview.png"; 





const projects: ProjectCardProps[] = [
  {
    title: "Sprig",
    description:
      "Sprig is a minimal, keyboard-driven mind mapping tool with three LLM modes: manual node building, an AI copilot that suggests related concepts with keep-or-edit control, and an autopilot that expands a concept to a chosen depth automatically. Built with Next.js, Neon Postgres, React Flow, and Together AI.",
    image: sprigPreview,
    imageClassName: "object-contain object-center p-2",
    tags: ["Next.js", "TypeScript", "React Flow", "LLM", "Canvas", "Dag"],
    githubUrl: "https://github.com/dsound-zz/sprig",
    demoUrl: "https://sprig.vercel.app/", // Update if different
    category: "Neural",
  },
  {
    title: "AvandarLabs",
    description:
      "At Avandar Labs I spent a lot of time wrestling with CSV files that were too big to upload. Built client-side data tooling with DuckDB-WASM so organizations could analyze their data without shipping everything to a server. Learned a lot about geospatial work along the way.",
    image: avandarPreview,
    tags: [
      "React/Tanstack",
      "TypeScript",
      "DuckDB WASM",
      "DexieDB",
      "Supabase",
    ],
    githubUrl: "https://github.com/AvandarLabs/avandar/releases/tag/v0.1.0",
    demoUrl: "https://www.avandarlabs.com/",
    blogUrl: "https://www.avandarlabs.com/blog/avandar-v0-1",
    category: "Platform",
  },
    {
    title: "NowHere",
    description:
      "NowHere is a location-based social discovery app that allows users to find and join local events within a one-mile radius with zero-friction anonymous browsing. It features AI-powered event parsing from venue emails and real-time chat, enabling instant social connection without the need for a traditional account.",
    image: nowHerePreview,
    tags: ["NextJS", "LLM", "Supabase", "Tailwinds", "Mapbox"],
    githubUrl: "https://github.com/dsound-zz/nowhere-app",
    demoUrl: "https://nowhere-app-one.vercel.app/",
    category: "Neural",
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
    title: "Trace",
    description:
      "TRACE is a neuroscience-informed journaling platform that uses Ecological Momentary Assessment (EMA) and Pennebaker’s expressive writing research to map a user's inner landscape through Moments, Reflections, and Traces. Rather than offering prescriptive advice or AI-driven diagnoses, the app utilizes Large Language Models to identify recurring patterns and invisible lines across fragmented emotional data. The system features a custom Archival Design System and a mycelial network visualization, transforming raw personal entries into a poetic, observational map of a user's lived experience.",
    image: tracePreview,
    tags: ["NextJS", "TypeScript", "LLM", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/dsound-zz/trace",
    demoUrl: "https://trace-sage.vercel.app/",
    category: "Neural",
  },
   {
    title: "Signal",
    description: "SIGNAL is a specialized Retrieval-Augmented Generation (RAG) application developed to combat misinformation and LLM hallucinations within the complex domain of UAP (UFO) phenomena. I engineered a solution that strictly limits model generation to ingested, verified primary sources, including declassified government reports, congressional testimony, and scientific analyses. The application implements a unique schema-level credibility tier system (Government, Scientific, and Secondary) to weight retrieved context based on source reliability. Built with Next.js 14, Neon pgvector, Drizzle ORM, and Anthropic Claude Sonnet via the Vercel AI SDK, SIGNAL delivers responses with forced citations, page numbers, and dynamic source linking.",
    image: signalPreview,
    imageClassName: "object-contain object-center p-2",
    tags: ["Next.js", "RAG", "Vector Search", "LLM", "Neon", "Drizzle ORM", "Vercel AI SDK"],
    githubUrl: "https://github.com/dsound-zz/signal",
    demoUrl: "https://signal-drab-gamma.vercel.app/",
    category: "Neural",
  },
  {
    title: "Vigil",
    description:
      "I built this because I wanted people to be able to share safety alerts without worrying about their identity. It's a PWA where alerts get confirmed by multiple people before going live. The confirmation system was the tricky part—making sure fake alerts don't slip through.",
    image: vigilPreview,
    tags: ["React/Tanstack", "TypeScript", "Tailwind", "Neon"],
    githubUrl: "https://github.com/dsound-zz/vigil",
    demoUrl: "https://vigil-pi.vercel.app/",
    category: "Web App",
  },
  {
    title: "Linr",
    description:
      "Linr brings liner-note thinking to modern music search. It blends MusicBrainz, Wikipedia, and OpenAI to resolve ambiguous song queries and return properly attributed credits — treating music as cultural work, not just metadata.",
    image: linrPreview,
    tags: ["NextJS", "TypeScript", "OpenAI", "Musicbrainz API", "Tailwind", "Wikimedia API"],
    githubUrl: "https://github.com/dsound-zz/linr",
    demoUrl: "https://linr-six.vercel.app/",
    category: "Neural",
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
  {
    title: "Climate Response",
    description:
      "Worked on Climate Response at Olivine. High-energy users needed to see their emissions in real time, so we pulled data from industrial sensors and utility feeds and turned it into something actionable. The hard part was making it useful without slowing anyone down.",
    image: climateResponsePreview,
    tags: [
      "ReactJS",
      "React Native",
      "ExpressJS",
      "TypeScript",
      "Styled Components",
      "Postgres",
    ],
    demoUrl: "https://www.climateresponse.com/",
    category: "SaaS",
  },
  {
    title: "Mood Blocks",
    description:
      "This one was a fun experiment. Type 'How are you?' and get back color, animation, and binaural beats. Uses an LLM to parse mood, then Web Audio API to generate visuals and sound. Built it to see if I could make emotions tangible—turned out pretty interesting.",
    image: moodBlocksPreview,
    tags: ["NextJS", "TypeScript", "SSR", "LLM", "ExpressJS"],
    githubUrl: "https://github.com/dsound-zz/mood-blocks",
    demoUrl: "https://mood-blocks.vercel.app",
    category: "Neural",
  },
  {
    title: "Music Portfolio",
    description:
      "A portfolio site for my music and sound design work—thousands of tracks from original productions and band work. Built this to organize years of audio work from my previous career as a composer.",
    image: musicPortfolioPreview,
    tags: ["NextJS", "TypeScript", "Sanity CMS"],
    githubUrl: "https://github.com/dsound-zz/music-portfolio",
    demoUrl: "https://demian-sims-music.vercel.app",
    category: "Portfolio",
  },

  // {
  //   title: "Faunagram",
  //   description:
  //     "I built this because I kept noticing animals in the city and wanted to see if other people did too. It's an app where people share photos and locations of wildlife sightings. Turns out a lot of people pay attention to what's around them—more than I expected.",
  //   image: faunagramPreview,
  //   tags: ["React/Tanstack", "ExpressJS", "Tailwind", "Supabase"],
  //   githubUrl: "https://github.com/dsound-zz/faunagram-app-v2",
  //   demoUrl: "https://faunagram-app-v2.vercel.app/home",
  //   category: "Social",
  // },
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
