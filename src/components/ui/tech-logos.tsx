"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export const FlutterLogo = ({ className }: { className?: string }) => (
  <Image src="/logos/flutter.svg" alt="Flutter Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const DartLogo = ({ className }: { className?: string }) => (
    <Image src="/logos/dart.svg" alt="Dart Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const ReactLogo = ({ className }: { className?: string }) => (
  <Image src="/logos/react.svg" alt="React Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const NextJsLogo = ({ className }: { className?: string }) => (
  <Image src="/logos/nextjs.svg" alt="Next.js Logo" width={32} height={32} className={cn("h-full w-full dark:invert", className)} />
);

export const TailwindCssLogo = ({ className }: { className?: string }) => (
  <Image src="/logos/tailwindcss.svg" alt="Tailwind CSS Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const FirebaseLogo = ({ className }: { className?: string }) => (
    <Image src="/logos/firebase.svg" alt="Firebase Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const FigmaLogo = ({ className }: { className?: string }) => (
    <Image src="/logos/figma.svg" alt="Figma Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const GenkitLogo = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className={cn("h-full w-full", className)}
      aria-label="Genkit logo"
    >
      <path d="M725.333 85.333h-426.666l-213.334 384v85.334h213.334l-213.334 384h426.666l213.334-384v-85.334h-213.334l213.334-384z m-42.666 453.419l-192 341.333h-284.225l192-341.333h284.225z m-241.067-85.334l-192-341.333h284.225l192 341.333h-284.225z" />
    </svg>
);

export const GeminiLogo = ({ className }: { className?: string }) => (
  <Image src="/logos/geminiai.svg" alt="Gemini AI Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const AgileLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-full w-full", className)}
        aria-label="Agile methodology logo"
    >
        <path d="M11 7.24264L12.4142 8.65685L18.0711 3L19.4853 4.41421L12.4142 11.4853L11 10.0711L7.12132 13.9497L4.36396 11.1924L3 12.5563L7.12132 16.6777L11.0503 12.7487L12.4142 14.1127L19.4853 7.04162L21 8.45584L12.4142 17L11 15.5858L9.58579 17L11 18.4142L12.4142 17L15.2426 19.8284L13.8284 21.2426L11 18.4142L8.17157 21.2426L6.75736 19.8284L9.58579 17L5.53553 12.9497L7.12132 11.3639L11 15.2426L19.4853 6.75736L18.0711 5.34315L12.4142 11.0711L11 9.65685L12.4142 8.24264L11 6.82843L9.58579 8.24264L3 1.65685L4.41421 0.242641L9.58579 5.41421L11 3.99999L12.4142 5.41421L18.0711 -0.000000219108L19.4853 1.41421L12.4142 8.48528L13.8284 9.89949L19.4853 4.24264L20.8995 5.65685L13.8284 12.7279L12.4142 11.3137L7.12132 16.6066L8.53553 18.0208L12.4142 14.1421L13.8284 15.5563L11 18.2843L12.4142 19.6985L15.2426 16.8701L16.6569 18.2843L11 23.9411L5.34315 18.2843L6.75736 16.8701L9.58579 19.6985L11 18.2843L15.2426 14.0416L12.4142 11.2132L11 12.6274L8.53553 10.1629L7.12132 11.5772L11 15.4558L12.4142 14.0416L11 12.6274L12.4142 11.2132L11 9.799L7.12132 13.6777L5.70711 12.2635L11 7.04162L9.58579 5.62741L4.41421 10.799L3 9.38477L9.58579 2.799L11 4.2132L12.4142 2.799L18.0711 8.45584L16.6569 9.87005L12.4142 5.62741L11 7.04162L12.4142 8.45584L11 9.87005L7.12132 5.99137L8.53553 4.57716L11 7.04162L12.4142 5.62741L11 4.2132L8.17157 7.04162L6.75736 5.62741L11 1.38478L15.2426 5.62741L13.8284 7.04162L11 4.2132L8.17157 7.04162L9.58579 8.45584L11 7.04162L13.8284 9.87005L12.4142 11.2843L11 9.87005L9.58579 11.2843L11 12.6985L12.4142 11.2843L15.2426 14.1127L13.8284 15.5269L11 12.6985L8.17157 15.5269L6.75736 14.1127L11 9.87005L15.2426 14.1127L16.6569 12.6985L11 7.04162L12.4142 5.62741L18.0711 11.2843L19.4853 9.87005L12.4142 2.799L11 4.2132L9.58579 2.799L3 9.38477L4.41421 10.799L11 4.2132L16.6569 9.87005L15.2426 11.2843L11 7.04162L9.58579 8.45584L11 9.87005L12.4142 8.45584L18.0711 14.1127L19.4853 12.6985L12.4142 5.62741L11 7.04162L5.34315 1.38478L6.75736 -0.0294315L11 4.2132L16.6569 -1.44365L18.0711 0L11 7.07107L3 1.41421L1.58579 2.82843L11 12.2426L20.8995 2.34315L22.3137 3.75736L11 14.8284L1.58579 5.31371L0.171573 6.72792L11 17.5563L22.3137 6.24264L23.7279 7.65685L11 20.3848L0.171573 9.55635L1.58579 8.14214L11 17.5563L20.8995 7.65685L19.4853 6.24264L11 14.1421L4.41421 7.55635L3 8.97056L11 16.9706L19.4853 8.48528L18.0711 7.07107L11 14.1421L5.70711 8.97056L7.12132 7.55635L11 11.4345L12.4142 10.0203L11 8.60609L7.12132 12.4848L8.53553 13.899L11 11.4345L13.8284 14.2629L12.4142 15.6772L11 14.2629L8.17157 17.0914L9.58579 18.5056L11 17.0914L13.8284 19.9198L12.4142 21.334L11 19.9198L9.58579 21.334L11 22.7487L12.4142 21.334L18.0711 15.6772L16.6569 14.2629L12.4142 18.5056L11 17.0914L6.75736 21.334L5.34315 19.9198L11 14.2629L16.6569 19.9198L18.0711 18.5056L11 11.4345L15.2426 7.19188L16.6569 8.60609L11 14.2629L6.75736 9.98832L8.17157 8.57411L11 11.4025L13.8284 8.57411L12.4142 7.1599L11 8.57411L8.17157 5.74569L9.58579 4.33147L11 5.74569L18.0711 -1.32538L16.6569 -2.73959L11 2.91726L4.41421 -3.66954L3 -2.25533L11 5.33046L19.4853 -3.15482L20.8995 -1.74061L11 7.18782L3 -1.74061L1.58579 -0.326396L11 8.50203L20.8995 -1.42639L22.3137 -0.0121776L11 11.0589L1.58579 1.54416L0.171573 2.95838L11 13.7868L22.3137 2.4731L23.7279 3.88731L11 16.6152L0.171573 5.7868L1.58579 4.37259L11 13.7868L20.8995 3.88731L19.4853 2.4731L11 10.3579L4.41421 3.77157L3 5.18579L11 13.1858L19.4853 4.70051L18.0711 3.28629L11 10.3579L5.70711 5.18579L7.12132 3.77157L11 7.64924L11 7.24264Z" fill="currentColor"/>
    </svg>
);


export const JiraLogo = ({ className }: { className?: string }) => (
    <Image src="/logos/jira.svg" alt="Jira Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const AndroidLogo = ({ className }: { className?: string }) => (
    <Image src="/logos/android.svg" alt="Android Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const IosLogo = ({ className }: { className?: string }) => (
    <Image src="/logos/ios.svg" alt="iOS Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

export const AiLogo = ({ className }: { className?: string }) => (
  <Image src="/logos/ai.svg" alt="AI Logo" width={32} height={32} className={cn("h-full w-full", className)} />
);

    
