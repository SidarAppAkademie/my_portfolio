import type { Metadata } from "next";
import { Source_Code_Pro } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DotShaderAnimation from "@/components/dot-shader-animation";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: "Sidar Erener | Portfolio",
  description: "Portfolio of Sidar Erener, a software developer specializing in Flutter and React.",
  openGraph: {
    title: "Sidar Erener | Portfolio",
    description: "Portfolio of Sidar Erener, a software developer specializing in Flutter and React.",
    url: "https://apply10.com",
    siteName: "Sidar Erener's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${sourceCodePro.variable}`}>
      <head />
      <body className="font-body antialiased">
          <DotShaderAnimation />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}
