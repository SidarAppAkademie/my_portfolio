"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, Briefcase, Code, Menu, X, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/create-profile", label: "AI Resume", icon: Bot },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Sidar Erener</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:hidden">
             <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">Sidar Erener</span>
             </Link>
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="font-bold">Sidar Erener</span>
                  </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-accent",
                        pathname === item.href ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                   <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-accent",
                        pathname === "/contact" ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      <Mail className="h-5 w-5" />
                      <span>Contact Me</span>
                    </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex items-center">
            <Button variant="ghost" asChild>
                <Link href="/contact">Contact Me</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
