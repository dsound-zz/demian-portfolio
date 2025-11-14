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
        <div className="flex items-center justify-between py-3 md:py-4 lg:py-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-4xl text-warm-brown hover:text-warm-terra transition-colors font-heading font-semibold tracking-tight py-1 md:py-2"
          >
            Demian Sims
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-xl text-warm-taupe hover:text-warm-terra transition-colors font-body font-medium tracking-tight leading-relaxed py-1 md:py-2"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              asChild
              className="text-xl bg-warm-terra text-warm-brown hover:opacity-90 font-body font-medium"
            >
              <a href="mailto:demiansims@gmail.com">Contact</a>
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
                className="block py-2 text-xl text-warm-taupe hover:text-warm-terra transition-colors font-body font-medium leading-relaxed"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              asChild
              className="mt-2 w-full text-xl bg-warm-terra text-warm-brown hover:opacity-90 font-body font-medium"
            >
              <a href="mailto:demiansims@gmail.com">Contact</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
