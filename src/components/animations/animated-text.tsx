"use client";

import React, { useEffect, useState, useRef, ElementType } from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  el?: ElementType;
  animation?: "reveal" | "typewriter" | "gradient" | "bounce";
  delay?: number;
};

export function AnimatedText({
  text,
  el: Element = "p",
  className,
  once = true,
  animation = "reveal",
  delay = 0,
}: AnimatedTextProps) {
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if device is mobile
    setIsMobile(window.innerWidth < 768);
    
    // Check if user prefers reduced motion
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!once) {
            setIsInView(false);
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible for better performance
    );
    
    // Store a reference to the current value to use in cleanup
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);
  
  const renderAnimation = () => {
    // For mobile or reduced motion, use simpler animations or none at all
    if (isReducedMotion || (isMobile && (animation === "bounce" || animation === "typewriter"))) {
      return <span className="inline-block">{text}</span>;
    }
    
    const words = text.split(" ");
    
    // Use simpler animations for mobile
    const mobileDelay = isMobile ? Math.min(delay, 0.1) : delay;
    const mobileAnimationDelay = isMobile ? 0.03 : 0.05; // Faster animation on mobile
    
    switch (animation) {
      case "reveal":
        return (
          <span className="inline-block overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-1"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{
                  duration: isMobile ? 0.3 : 0.5,
                  ease: "easeOut",
                  delay: mobileDelay + i * mobileAnimationDelay,
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        );
        
      case "typewriter":
        return (
          <span className="inline-block">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.1,
                  delay: mobileDelay + i * 0.02, // Faster typing on mobile
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        );
        
      case "gradient":
        return (
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-300% animate-gradient">
            {text}
          </span>
        );
        
      case "bounce":
        // Limit the number of animated characters on mobile
        const maxChars = isMobile ? Math.min(text.length, 10) : text.length;
        const characters = text.slice(0, maxChars).split("");
        
        if (text.length > maxChars) {
          characters.push("...");
        }
        
        return (
          <span className="inline-block">
            {characters.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: 0 }}
                animate={isInView ? {
                  y: [0, -5, 0],
                } : { y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: mobileDelay + i * mobileAnimationDelay,
                  repeat: 0,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        );
        
      default:
        return text;
    }
  };
  
  return (
    <div ref={ref} className={className}>
      <Element>
        {renderAnimation()}
      </Element>
    </div>
  );
}