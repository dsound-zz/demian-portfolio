import { ArrowRight, GithubIcon, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-cyan-950/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span
              className="px-6 py-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
              style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.625rem)" }}
            >
Available for interesting work
            </span>
          </div>

          <h1
            className="font-bold mb-6 text-slate-900 dark:text-slate-100"
            style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Demian Sims
            </span>
          </h1>

          <h2
            className="mb-6 text-slate-600 dark:text-slate-400 font-medium"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3.75rem)" }}
          >
            I build thoughtful, fast user experiences and I like working on products that actually help people.
          </h2>

          <p
            className="text-3xl md:text-4xl mb-12 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.25rem, 2vw, 2.25rem)" }}
          >
            I've spent the last few years working on climate tools, data dashboards, and a mix of side projects. I care about clarity, ownership, and good product taste.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gap-2 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              onClick={() => scrollToSection("projects")}
            >
              See what I've built <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              onClick={() =>
                (window.location.href = "mailto:demiansims@gmail.com")
              }
            >
              <Mail className="w-5 h-5" /> Say hello
            </Button>
          </div>

          <div className="flex gap-6 justify-center text-slate-600 dark:text-slate-400">
            <a
              href="https://github.com/dsound-zz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/demiansims"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:demiansims@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
