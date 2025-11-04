import { Button } from "@/components/ui/button";
import { ArrowRight, BotMessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mb-4 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-md">
          <p>Flutter & React Developer</p>
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-br from-gray-300 to-gray-600">
          Transforming Digital Experiences into Code
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I build modern mobile and web applications where clean code meets great user experience. Let's create something extraordinary together.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/create-profile">
              AI Resume Analyzer <BotMessageSquare />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
