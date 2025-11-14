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
import faunagramPreview from "../assets/projects/faunagram-preview.jpg";
import moodBlocksPreview from "../assets/projects/mood-blocks.jpg";

const projects: ProjectCardProps[] = [
  {
    title: "AvandarLabs",
    description:
      "Built data tooling for the social sector at Avandar Labs. Worked with DuckDB-WASM for client-side CSV ingestion and analysis, plus geospatial exploration. The platform lets organizations work with their data without shipping everything to a server.",
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
    title: "Vigil",
    description:
      "A Progressive Web App where community members can share real-time safety alerts anonymously. Built the confirmation system so alerts get verified by multiple people before going live.",
    image: vigilPreview,
    tags: ["React/Tanstack", "TypeScript", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/dsound-zz/vigil",
    demoUrl: "https://vigil-pi.vercel.app/",
    category: "Web App",
  },
  {
    title: "Mood Blocks",
    description:
      "A small experiment: type 'How are you?' and get back color, animation, and binaural beats. Uses an LLM to parse mood, then Web Audio API and browser-native effects to generate visuals and sound. Mostly built to see if I could make emotions tangible.",
    image: moodBlocksPreview,
    tags: ["NextJS", "TypeScript", "OpenAI", "SSR", "LLM", "ExpressJS"],
    githubUrl: "https://github.com/dsound-zz/mood-blocks",
    demoUrl: "https://mood-blocks.vercel.app",
    category: "Web App",
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
  {
    title: "Climate Response",
    description:
      "Worked on Climate Response at Olivine—a tool for high-energy users to see emissions in real time. Pulled data from industrial sensors and utility feeds, turned it into actionable insights. Companies could cut carbon without slowing operations.",
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
    title: "Faunagram",
    description:
      "An app for sharing animal sightings in urban areas. People post photos and locations when they spot wildlife in the city. Built it to connect people who pay attention to what's around them.",
    image: faunagramPreview,
    tags: ["React/Tanstack", "ExpressJS", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/dsound-zz/faunagram-app-v2",
    demoUrl: "https://faunagram-app-v2.vercel.app/home",
    category: "Social",
  },
];

export function Projects() {
  const allProjects = projects;
  const webApps = projects.filter(
    (p) =>
      p.category === "Web App" ||
      p.category === "SaaS" ||
      p.category === "Platform"
  );
  const portfolios = projects.filter(
    (p) => p.category === "Portfolio" || p.category === "Social"
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="font-bold mb-4 text-slate-900 dark:text-slate-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Projects
          </h2>
          <p
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.25rem, 2vw, 2rem)" }}
          >
            Things I've built or worked on. Mix of side projects and work from
            Rethink, Olivine, TML, and Avandar Labs.
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-7xl mx-auto">
          <TabsList className="flex w-fit mx-auto mb-12 gap-1">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Apps</TabsTrigger>
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
            value="web"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {webApps.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>

          <TabsContent
            value="other"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolios.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
