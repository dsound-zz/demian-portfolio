import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "How I Work", href: "#philosophy" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-sand backdrop-blur-md border-b border-warm-beige">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-warm-brown hover:text-warm-terra transition-colors font-heading font-semibold"
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
                className="text-xl md:text-2xl text-warm-taupe hover:text-warm-terra transition-colors font-body font-medium tracking-tight leading-relaxed"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="text-lg bg-warm-terra text-warm-brown hover:opacity-90 font-body font-medium"
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
            className="md:hidden p-2 text-warm-taupe hover:text-warm-terra transition-colors font-body"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-warm-beige">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-2xl text-warm-taupe hover:text-warm-terra transition-colors font-body font-medium leading-relaxed"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full text-xl bg-warm-terra text-warm-brown hover:opacity-90 font-body font-medium"
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
