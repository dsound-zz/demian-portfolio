import { GithubIcon, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-warm-beige text-warm-brown">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3
              className="font-heading font-semibold mb-4 text-warm-brown"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.281rem)" }}
            >
              Let's Talk
            </h3>
            <p 
              className="text-3xl text-warm-taupe mb-8 font-body font-normal leading-relaxed"
              style={{ fontSize: "17.5px" }}
            >
              If you're working on something interesting or mission-driven, I'm always open to chatting.
            </p>

            <a
              href="mailto:demiansims@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-warm-terra text-warm-brown rounded-full transition-all duration-300 shadow-warm-card font-body font-medium hover:opacity-90"
            >
              <Mail className="w-4 h-4" />
              Say hello
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8 text-2xl font-body text-warm-taupe">
            <a
              href="https://github.com/dsound-zz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-terra transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/demiansims"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-terra transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:demiansims@gmail.com"
              className="hover:text-warm-terra transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center text-warm-taupe pt-8 border-t border-warm-beige">
            <p className="text-2xl font-body font-normal leading-relaxed">
              © {currentYear} Demian Sims. Built with React & Tailwind CSS.
              Deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
