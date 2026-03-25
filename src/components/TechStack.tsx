import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Smartphone,
  GitBranch,
  Palette,
} from "lucide-react";

const techCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: Globe,
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Mantine"],
  },
  {
    id: 2,
    title: "Backend",
    icon: Server,
    technologies: ["Node.js", "Express", "NestJS", "Ruby on Rails", "GraphQL"],
  },
  {
    id: 3,
    title: "Database",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Neon"],
  },
  {
    id: 4,
    title: "DevOps",
    icon: GitBranch,
    technologies: [
      "Docker",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Colocation",
    ],
  },
  {
    id: 5,
    title: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    id: 6,
    title: "Design",
    icon: Palette,
    technologies: ["Figma", "UI/UX", "Responsive Design"],
  },
  {
    id: 7,
    title: "Architecture",
    icon: Layers,
    technologies: ["Microservices", "REST APIs", "Event-Driven", "Clean Code"],
  },
  {
    id: 8,
    title: "Tools",
    icon: Code2,
    technologies: ["Claude Code", "Roo Code", "Postman", "Cursor"],
  },
];

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-warm-beige"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="font-heading font-semibold mb-4 text-warm-brown"
            style={{ fontSize: "clamp(2.188rem, 6vw, 3.938rem)" }}
          >
            What I Use
          </h2>
          <p
            className="text-3xl text-warm-taupe max-w-2xl mx-auto font-body font-normal leading-relaxed"
            style={{ fontSize: "17.5px" }}
          >
            Most days I'm in TypeScript, React, and Next.js. Lately I've been deep in DuckDB-WASM and data tooling. Supabase is my go-to for backend stuff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {techCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="p-6 bg-warm-cream rounded-xl border border-warm-beige hover:border-warm-beige shadow-warm-card transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-warm-sage rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-warm-brown" />
                  </div>
                  <h3 className="text-xl text-warm-brown font-heading font-semibold">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-2xl text-warm-taupe flex items-center gap-2 font-body font-normal tracking-tight leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-terra"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
