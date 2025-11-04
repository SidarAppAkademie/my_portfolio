import { projects } from "@/lib/data";
import type { Metadata } from 'next';
import { ProjectCarousel } from "@/components/ui/project-carousel";

export const metadata: Metadata = {
  title: 'Projects | Sidar Erener Portfolio',
  description: 'A showcase of projects by Sidar Erener.',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8 flex flex-col items-center">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of my work.
        </p>
      </div>

      <ProjectCarousel projects={projects} />
    </div>
  );
}
