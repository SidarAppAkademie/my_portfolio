"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: {
    imageUrl: string;
    description: string;
    imageHint: string;
  };
  githubUrl: string;
};

interface ProjectCarouselProps {
  projects: Project[];
  autoplay?: boolean;
}

function calculateGap(width: number) {
  const minWidth = 768; // md breakpoint
  const maxWidth = 1456;
  const minGap = 120;
  const maxGap = 150;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap + 0.06 * (width - maxWidth);
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const ProjectCarousel = ({
  projects,
  autoplay = true,
}: ProjectCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1000);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const projectsLength = useMemo(() => projects.length, [projects]);

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projectsLength);
      }, 5000);
    }
  }, [autoplay, projectsLength]);

  const resetAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    startAutoplay();
  }, [startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [startAutoplay]);
  
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, projectsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
    resetAutoplay();
  }, [projectsLength, resetAutoplay]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    resetAutoplay();
  }, [projectsLength, resetAutoplay]);

  function getProjectStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.7; // Adjusted for better visual
    const offset = (index - activeIndex + projectsLength) % projectsLength;
    const isVisible = Math.abs(offset) <= 1 || offset === projectsLength - 1 || offset === 1 - projectsLength;
    
    if (index === activeIndex) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(-${maxStickUp * 0.3}px) scale(1) rotateY(0deg)`,
      };
    }
    
    if ((activeIndex - 1 + projectsLength) % projectsLength === index) { // Left item
      return {
        zIndex: 2,
        opacity: 0.8,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(${maxStickUp}px) scale(0.85) rotateY(25deg)`,
      };
    }
    
    if ((activeIndex + 1) % projectsLength === index) { // Right item
      return {
        zIndex: 2,
        opacity: 0.8,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(${maxStickUp}px) scale(0.85) rotateY(-25deg)`,
      };
    }

    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: `translateX(0px) translateY(0px) scale(0.7) rotateY(0deg)`,
    };
  }

  return (
    <div className="w-full max-w-5xl relative flex flex-col items-center">
      <div className="h-[32rem] sm:h-[34rem] w-full relative" ref={imageContainerRef} style={{ perspective: "1200px" }}>
        {projects.map((project, index) => (
            <motion.div
                key={project.title + index}
                className="absolute w-full h-full flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={getProjectStyle(index) as any}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
             >
                <Card className="w-[80%] max-w-md h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-lg">
                    {project.image && (
                    <div className="aspect-video overflow-hidden">
                        <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={project.image.imageHint}
                        />
                    </div>
                    )}
                    <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                        </Link>
                    </Button>
                    </CardFooter>
                </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-6 mt-16">
        <button
          className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-card text-foreground hover:bg-primary hover:text-primary-foreground border"
          onClick={handlePrev}
          aria-label="Previous project"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-card text-foreground hover:bg-primary hover:text-primary-foreground border"
          onClick={handleNext}
          aria-label="Next project"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};