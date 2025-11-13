import { GithubIcon, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 dark:from-black dark:via-slate-950 dark:to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3
              className="font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Let's Build Something Together
            </h3>
            <p className="text-lg text-slate-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <a
              href="mailto:demiansims@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/dsound-zz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/demiansims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:demiansims@gmail.com"
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center text-slate-400 pt-8 border-t border-slate-800">
            <p>
              © {currentYear} Demian Sims. Built with React & Tailwind CSS.
              Deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
