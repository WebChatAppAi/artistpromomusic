"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  variant?: "gradient" | "particles" | "noise";
  intensity?: "light" | "medium" | "high";
  interactive?: boolean;
  className?: string;
}

export function AnimatedBackground({
  variant = "gradient",
  intensity = "medium",
  interactive = false,
  className,
}: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Set up mouse movement tracking for interactive mode
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  // Determine opacity based on intensity
  const getIntensityValues = () => {
    switch (intensity) {
      case "light":
        return { opacity: 0.1, blur: 80 };
      case "medium":
        return { opacity: 0.15, blur: 100 };
      case "high":
        return { opacity: 0.25, blur: 120 };
      default:
        return { opacity: 0.15, blur: 100 };
    }
  };

  const { opacity, blur } = getIntensityValues();

  // Gradient background
  if (variant === "gradient") {
    return (
      <div
        className={cn(
          "fixed inset-0 -z-10 transition-opacity duration-1000",
          className
        )}
      >
        <div className="absolute inset-0 bg-background/95" />
        
        {/* Animated blob - primary */}
        <motion.div
          className="absolute top-[-30%] -left-[10%] h-[50%] w-[60%] rounded-full bg-blue-600/20 blur-[130px]"
          animate={{
            x: interactive ? mousePosition.x * 50 - 25 : 0,
            y: interactive ? mousePosition.y * 50 - 25 : 0,
            scale: [1, 1.05, 1],
            opacity: [opacity, opacity * 1.2, opacity],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Animated blob - secondary */}
        <motion.div
          className="absolute top-[20%] right-[5%] h-[40%] w-[50%] rounded-full bg-purple-600/20 blur-[130px]"
          animate={{
            x: interactive ? -mousePosition.x * 50 + 25 : 0,
            y: interactive ? -mousePosition.y * 50 + 25 : 0,
            scale: [1, 1.1, 1],
            opacity: [opacity, opacity * 1.3, opacity],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        
        {/* Animated blob - tertiary */}
        <motion.div
          className="absolute bottom-[-10%] left-[30%] h-[45%] w-[40%] rounded-full bg-indigo-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [opacity * 0.8, opacity * 1.1, opacity * 0.8],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Optional: Additional subtle accent */}
        <motion.div
          className="absolute bottom-[30%] right-[20%] h-[25%] w-[25%] rounded-full bg-red-600/10 blur-[150px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [opacity * 0.7, opacity, opacity * 0.7],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
        />
      </div>
    );
  }

  // Particle background (simple version)
  if (variant === "particles") {
    return (
      <div className={cn(
        "fixed inset-0 -z-10 bg-background",
        className
      )}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
        </div>
        
        {/* Just adding a subtle gradient for particles */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15), transparent 70%)",
              "radial-gradient(circle at 50% 80%, rgba(124, 58, 237, 0.15), transparent 70%)",
              "radial-gradient(circle at 80% 40%, rgba(236, 72, 153, 0.15), transparent 70%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    );
  }

  // Noise texture
  return (
    <div className={cn("fixed inset-0 -z-10 bg-background", className)}>
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />
      
      {/* Adding a subtle gradient behind the noise */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(79, 70, 229, 0.2), transparent 70%)",
            "radial-gradient(circle at 60% 60%, rgba(76, 29, 149, 0.2), transparent 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
} 