import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Philosophy", href: "#philosophy" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-blue-100 dark:border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            style={{ fontSize: "clamp(1.25rem, 2vw, 2.25rem)" }}
          >
            Demian Sims
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              onClick={() =>
                (window.location.href = "mailto:demiansims@gmail.com")
              }
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 dark:border-blue-900/30">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              onClick={() =>
                (window.location.href = "mailto:demiansims@gmail.com")
              }
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
