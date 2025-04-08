"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  el?: keyof JSX.IntrinsicElements;
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
  const ref = React.useRef<HTMLParagraphElement>(null);
  const [isInView, setIsInView] = React.useState(false);
  
  React.useEffect(() => {
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
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);
  
  const renderAnimation = () => {
    const words = text.split(" ");
    
    switch (animation) {
      case "reveal":
        return (
          <span className="inline-block overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-1"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: delay + i * 0.05,
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
                  delay: delay + i * 0.03,
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
        return (
          <span className="inline-block">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: 0 }}
                animate={isInView ? {
                  y: [0, -10, 0],
                } : { y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: delay + i * 0.05,
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
    <Element ref={ref} className={className}>
      {renderAnimation()}
    </Element>
  );
}