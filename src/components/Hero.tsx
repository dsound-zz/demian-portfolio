import { ArrowRight, GithubIcon, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient">
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block animate-pulse">
            <span
              className="px-4 py-2 rounded-full bg-warm-cream text-warm-brown border-2 border-warm-terra font-body text-lg leading-relaxed font-medium shadow-sm"
              style={{ fontSize: "clamp(0.984rem, 1.5vw, 1.422rem)" }}
            >
              Available for interesting work
            </span>
          </div>

          <h1
            className="font-heading font-semibold mb-6 text-warm-brown"
            style={{ fontSize: "clamp(1.531rem, 8vw, 4.2rem)" }}
          >
            <span className="text-warm-terra">Demian Sims</span> — Software Engineer & Creative Technologist
          </h1>

          <h2
            className="mb-6 text-warm-taupe font-heading font-semibold leading-relaxed"
            style={{ fontSize: "clamp(1.641rem, 4vw, 3.281rem)" }}
          >
            I build thoughtful, fast user experiences and I enjoy working on
            products that actually help people.
          </h2>

          <p
            className="text-3xl md:text-4xl mb-12 text-warm-taupe max-w-2xl mx-auto font-body font-medium leading-relaxed"
            style={{ fontSize: "clamp(1.094rem, 2vw, 1.969rem)" }}
          >
            I've spent the last few years working on climate tools, data
            dashboards, and a mix of side projects. I care about clarity,
            ownership, and good product taste.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="sm"
              className="
                        !h-10 sm:!h-8
                        !min-h-0
                        !py-0
                        !leading-none
                        w-[280px] sm:w-[220px]
                        !px-6 sm:!px-4 gap-2 text-base 
                         bg-warm-terra text-warm-brown border border-warm-brown
                        font-body font-medium flex-shrink-0 !shadow-none !rounded-md
                        "
              onClick={() => scrollToSection('projects')}
            >
              See what I’ve built <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              size="sm"
              variant="outline"
              asChild
              className="!h-10 sm:!h-8
                              !min-h-0
    !py-0
    !leading-none
    w-[280px] sm:w-[220px]
    !px-6 sm:!px-4 gap-2 text-base 
    border border-warm-brown text-warm-brown hover:bg-warm-cream
  font-body font-medium flex-shrink-0 !rounded-md"


            >
              <a className="flex items-center justify-center gap-2" href="mailto:demiansims@gmail.com">
                <Mail className="w-4 h-4" /> Say hello
              </a>
            </Button>

          </div>



          <div className="flex gap-6 justify-center text-warm-taupe font-body text-xl leading-relaxed">
            <a
              href="https://github.com/dsound-zz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-terra transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/demiansims"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-terra transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:demiansims@gmail.com"
              className="hover:text-warm-terra transition-colors"
              aria-label="Email"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section >
  );
}
