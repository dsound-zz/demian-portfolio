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
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
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
    technologies: ["Git", "VS Code", "Postman", "Jest", "Testing Library"],
  },
];

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950/10 dark:to-cyan-950/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="font-bold mb-4 text-slate-900 dark:text-slate-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            What I Use
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            What I actually use day-to-day. Strongest in TypeScript, React, Next.js, and Supabase. Recently working with DuckDB-WASM and data tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {techCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-base text-slate-600 dark:text-slate-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
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
