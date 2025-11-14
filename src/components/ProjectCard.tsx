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
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
  const handleImageClick = () => {
    if (demoUrl) {
      window.open(demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800">
      {/* Image Section - Clickable */}
      <div
        className={`relative h-64 overflow-hidden bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 ${
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
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-0 text-xl">
              {category}
            </Badge>
          </div>
        )}
        {demoUrl && (
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-slate-900 rounded-full p-3 shadow-lg">
              <ExternalLink className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <CardHeader>
        <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
        <Tooltip delayDuration={1000}>
          <TooltipTrigger asChild>
            <CardDescription className="text-2xl line-clamp-2 cursor-help">
              {description}
            </CardDescription>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="max-w-sm p-3 text-xl bg-slate-900 dark:bg-slate-800 text-slate-100 border-slate-700 z-50"
          >
            <p className="whitespace-normal">{description}</p>
          </TooltipContent>
        </Tooltip>
      </CardHeader>

      <CardContent>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 text-xl"
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
              className="flex items-center gap-2 text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
              className="flex items-center gap-2 text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
              className="flex items-center gap-2 text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
