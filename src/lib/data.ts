import { PlaceHolderImages } from "./placeholder-images";
import React from "react";
import { 
  FlutterLogo, 
  DartLogo, 
  ReactLogo, 
  NextJsLogo, 
  TailwindCssLogo, 
  FirebaseLogo, 
  FigmaLogo,
  GenkitLogo,
  GeminiLogo,
  JiraLogo,
  AgileLogo,
  AndroidLogo,
  IosLogo,
  AiLogo
} from "@/components/ui/tech-logos";

const projectImages = {
  project1: PlaceHolderImages.find(p => p.id === 'project-1'),
  project2: PlaceHolderImages.find(p => p.id === 'project-2'),
  project3: PlaceHolderImages.find(p => p.id === 'project-3'),
}

export const services = [
  {
    title: "Mobile App Development",
    description: "Building high-performance, cross-platform mobile applications with Flutter & Dart. Focused on clean architecture, smooth animations, and a great user experience on both iOS and Android.",
    icons: [
      { icon: React.createElement(FlutterLogo) },
      { icon: React.createElement(DartLogo) },
      { icon: React.createElement(AndroidLogo) },
      { icon: React.createElement(IosLogo) },
    ],
  },
  {
    title: "Web Development",
    description: "Creating modern, responsive web applications using React and Next.js. I specialize in building fast, scalable front-ends with Tailwind CSS for styling and various cloud services for backend functionality.",
    icons: [
      { icon: React.createElement(ReactLogo) },
      { icon: React.createElement(NextJsLogo, {className: "dark:invert"}) },
      { icon: React.createElement(TailwindCssLogo) },
      { icon: React.createElement(FirebaseLogo) },
    ],
  },
    {
    title: "AI Integration",
    description: "Leveraging GenAI to build intelligent features, chatbots, and automated workflows. Experience with Google Genkit and Gemini models to create smart, data-driven applications.",
    icons: [
      { icon: React.createElement(AiLogo) },
      { icon: React.createElement(GeminiLogo) },
      { icon: React.createElement(GenkitLogo) },
    ],
  },
  {
    title: "UX/UI Design",
    description: "Designing intuitive and engaging user interfaces. From user research and wireframing to creating mockups and interactive prototypes in Figma, I focus on user-centric design principles.",
    icons: [
        { icon: React.createElement(FigmaLogo) }
    ],
  },
  {
    title: "Agile & Project Management",
    description: "Helping teams adopt agile methodologies, Clean Code principles, and efficient workflows using tools like Jira for transparent and effective project tracking.",
    icons: [
        { icon: React.createElement(AgileLogo, {className: "dark:invert"}) },
        { icon: React.createElement(JiraLogo) },
    ],
  },
  {
    title: "Technical Consultancy",
    description: "Providing expert advice on technology stacks, app architecture, and development processes. Focused on ensuring code quality, scalability, and best practices.",
    icons: [
       { icon: React.createElement(FlutterLogo) },
       { icon: React.createElement(NextJsLogo, {className: "dark:invert"}) },
    ]
  }
];

export const projects = [
  {
    title: "Comprehensive Travel App",
    description: "A travel planning and organization application built with Flutter. It allows users to manage trips, book flights, and discover new destinations. Developed as part of intensive training at App Akademie.",
    tags: ["Flutter", "Dart", "Cloud Services", "Agile", "Scrum"],
    image: projectImages.project1,
    githubUrl: "https://github.com/SidarAppAkademie/minimalPitch.git",
  },
  {
    title: "Next.js & AI Portfolio Template",
    description: "A modern, responsive portfolio template built with Next.js, Tailwind CSS, and shadcn/ui. Features Genkit AI integration for dynamic profile creation from CVs.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit", "ShadCN/UI"],
    image: projectImages.project2,
    githubUrl: "https://github.com/SidarAppAkademie/my_portfolio.git",
  },
  {
    title: "PAC SERVICE - Reinigungsdienste Website",
    description: "Moderne, interaktive Website für professionelle Reinigungsdienste mit intelligentem Preisrechner und Rabattsystem.",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: projectImages.project3,
    githubUrl: "https://github.com/SidarAppAkademie/pac-service-website.git",
  },
];
