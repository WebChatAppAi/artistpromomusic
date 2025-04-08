"use client"; // Required for Sheet state

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "@/components/layout/logo";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/packages", label: "Packages" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { 
      href: "/free-trial", 
      label: "Free Trial", 
      badge: "Limited",
      highlight: true 
    },
    { href: "/contact", label: "Contact" },
    { 
      href: "/dashboard", 
      label: "Dashboard", 
      badge: "Soon" 
    },
  ];

  return (
    <header className="w-full border-b border-white/10 backdrop-blur-md bg-black/50 sticky top-0 z-40">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-center px-4 sm:px-6">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <nav className="hidden md:flex items-center justify-center space-x-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white/90",
                  pathname === link.href
                    ? "text-white"
                    : "text-white/70",
                  link.highlight && "text-red-400 hover:text-red-300 relative",
                )}
              >
                <span className="relative flex items-center">
                  {link.label}
                  {link.badge && link.badge === "Limited" && (
                    <Badge 
                      className={cn(
                        "ml-1.5 px-1.5 py-0.5 text-[10px] font-medium",
                        "bg-red-600 hover:bg-red-700"
                      )}
                    >
                      {link.badge}
                    </Badge>
                  )}
                  {link.badge && link.badge === "Soon" && (
                    <Badge 
                      className={cn(
                        "ml-1.5 px-1.5 py-0.5 text-[10px] font-medium",
                        "bg-yellow-600 hover:bg-yellow-700"
                      )}
                    >
                      {link.badge}
                    </Badge>
                  )}
                  {link.highlight && (
                    <span className="absolute -inset-1 rounded-full bg-red-500/20 blur-md -z-10"></span>
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu size={24} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-white/10 bg-black/95 backdrop-blur-md">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Logo className="mb-8" />
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-white",
                        pathname === link.href
                          ? "text-white"
                          : "text-white/70",
                        link.highlight && "text-red-400 hover:text-red-300 relative",
                      )}
                    >
                      <span className="relative flex items-center">
                        {link.label}
                        {link.badge && link.badge === "Limited" && (
                          <Badge 
                            className={cn(
                              "ml-1.5 px-1.5 py-0.5 text-[10px] font-medium",
                              "bg-red-600 hover:bg-red-700"
                            )}
                          >
                            {link.badge}
                          </Badge>
                        )}
                        {link.badge && link.badge === "Soon" && (
                          <Badge 
                            className={cn(
                              "ml-1.5 px-1.5 py-0.5 text-[10px] font-medium",
                              "bg-yellow-600 hover:bg-yellow-700"
                            )}
                          >
                            {link.badge}
                          </Badge>
                        )}
                        {link.highlight && (
                          <span className="absolute -inset-2 rounded-full bg-red-500/20 blur-md -z-10"></span>
                        )}
                      </span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
