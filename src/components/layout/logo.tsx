"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Music } from "lucide-react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps = {}) {
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <div className="relative w-8 h-8 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center">
        <Music className="h-4 w-4 text-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur-sm opacity-50"></div>
      </div>
      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
        ARTIST PROMO MUSIC
      </span>
    </Link>
  );
} 