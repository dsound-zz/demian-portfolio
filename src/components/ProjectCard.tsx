import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  blogUrl?: string;
  category?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
  blogUrl,
  category,
}: ProjectCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleImageClick = () => {
    if (demoUrl) {
      window.open(demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <Card className="group overflow-hidden transition-all duration-300 border border-warm-beige bg-warm-cream shadow-warm-card hover:border-warm-beige">
      {/* Image Section - Clickable */}
      <div
        className={`relative h-64 overflow-hidden bg-warm-cream ${
          demoUrl ? "cursor-pointer" : ""
        }`}
        onClick={handleImageClick}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-warm-terra text-warm-brown border-0 text-2xl font-body">
              {category}
            </Badge>
          </div>
        )}
        {demoUrl && (
          <div className="absolute inset-0 bg-warm-sage transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-40">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-warm-cream rounded-full p-3 shadow-warm-card">
              <ExternalLink className="w-6 h-6 text-warm-brown" />
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <CardHeader>
        <CardTitle className="text-2xl text-warm-brown group-hover:text-warm-terra transition-colors font-heading font-semibold">
          {title}
        </CardTitle>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <CardDescription className="text-2xl line-clamp-2 cursor-help text-warm-taupe font-body font-normal leading-relaxed hover:text-warm-brown transition-colors">
            {description}
          </CardDescription>
          {showTooltip && (
            <div className="absolute bottom-full left-0 mb-3 z-50 w-full max-w-md p-4 bg-warm-cream border border-warm-beige shadow-warm-card rounded-xl animate-in fade-in-0 zoom-in-95 duration-200">
              <p className="whitespace-normal text-lg font-body font-normal leading-relaxed text-warm-brown">{description}</p>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-warm-cream text-warm-brown border-warm-beige text-2xl font-body"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl text-warm-taupe hover:text-warm-terra transition-colors font-body leading-relaxed"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl text-warm-taupe hover:text-warm-terra transition-colors font-body leading-relaxed"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {blogUrl && (
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl text-warm-taupe hover:text-warm-terra transition-colors font-body leading-relaxed"
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
