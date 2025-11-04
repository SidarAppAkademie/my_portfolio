import { services } from "@/lib/data";
import type { Metadata } from 'next';
import { AnimatedCard } from "@/components/ui/feature-block-animated-card";

export const metadata: Metadata = {
  title: 'Services | Sidar Erener Portfolio',
  description: 'Services offered by Sidar Erener, including Mobile & Web Development, AI Integration, and UX/UI Design.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I provide high-quality solutions to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <AnimatedCard
            key={service.title}
            title={service.title}
            description={service.description}
            icons={service.icons}
          />
        ))}
      </div>
    </div>
  );
}
