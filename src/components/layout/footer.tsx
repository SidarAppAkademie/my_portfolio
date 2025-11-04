import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-center py-6 text-center text-sm text-muted-foreground">
        <div className="flex gap-4 mb-2">
          <Link href="/impressum" className="hover:text-primary transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-primary transition-colors">
            Datenschutzerklärung
          </Link>
        </div>
        <p>&copy; {currentYear} Sidar Erener. All Rights Reserved.</p>
        <p>
          Built by <span className="font-semibold text-foreground">Sidar Erener</span> with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
