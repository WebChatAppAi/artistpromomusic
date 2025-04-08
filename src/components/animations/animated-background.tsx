"use client";

import React, { useEffect, useState, useRef } from "react";
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
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef<number | null>(null);
  
  // Check for reduced motion preference and mobile devices
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Set up mouse movement tracking for interactive mode
  useEffect(() => {
    if (!interactive || isReducedMotion || isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse movement to improve performance
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(() => {
          setMousePosition({
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
          });
          animationRef.current = null;
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [interactive, isReducedMotion, isMobile]);

  // Determine opacity based on intensity
  const getIntensityValues = () => {
    // Reduce intensity for mobile
    const mobileAdjustment = isMobile ? 0.5 : 1;
    
    switch (intensity) {
      case "light":
        return { opacity: 0.05 * mobileAdjustment };
      case "medium":
        return { opacity: 0.1 * mobileAdjustment };
      case "high":
        return { opacity: 0.15 * mobileAdjustment };
      default:
        return { opacity: 0.1 * mobileAdjustment };
    }
  };

  const { opacity } = getIntensityValues();

  // Static background for reduced motion or mobile
  if (isReducedMotion || isMobile) {
    return (
      <div className={cn("fixed inset-0 -z-10", className)}>
        <div className="absolute inset-0 bg-background/98" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08), transparent 70%)",
          }}
        />
      </div>
    );
  }

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
            x: interactive ? mousePosition.x * 25 : 0,
            y: interactive ? mousePosition.y * 25 : 0,
            scale: [1, 1.02, 1],
            opacity: [opacity, opacity * 1.1, opacity],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        
        {/* Animated blob - secondary */}
        <motion.div
          className="absolute top-[20%] right-[5%] h-[40%] w-[50%] rounded-full bg-purple-600/20 blur-[130px]"
          animate={{
            x: interactive ? -mousePosition.x * 25 : 0,
            y: interactive ? -mousePosition.y * 25 : 0,
            scale: [1, 1.05, 1],
            opacity: [opacity, opacity * 1.1, opacity],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
            ease: "linear",
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
      </div>
    );
  }

  // Noise texture
  return (
    <div className={cn("fixed inset-0 -z-10 bg-background", className)}>
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
} 