"use client"; // Needs to be a client component for framer-motion hooks

import React, { useEffect, useState, useMemo } from "react";
import { motion, useAnimation, useInView, Variant } from "framer-motion";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean; // Trigger animation only once
  distance?: number; // How far to move (px)
  staggerChildren?: number; // Delay between children animations
  from?: "bottom" | "top" | "left" | "right"; // Direction
}

export function FadeInUp({
  children,
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  distance = 20,
  staggerChildren = 0.1,
  from = "bottom",
}: FadeInUpProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: once, 
    amount: 0.05, // Trigger when just 5% visible for better performance
    margin: "0px 0px 200px 0px" // Start animation 200px before element is in view
  });
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  // Optimize performance with resize event throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100); // Throttle resize events
    };
    
    // Initial check
    setIsMobile(window.innerWidth < 768);
    
    // Check for reduced motion preference
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    // Add resize listener with throttling
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
        .catch(() => {}); // Prevent console errors if component unmounts during animation
    } else if (!once) {
      controls.start("hidden")
        .catch(() => {});
    }
  }, [isInView, controls, once]);

  // Use memoized values for better performance
  const adjustedDistance = useMemo(() => {
    return isMobile ? Math.min(distance * 0.5, 15) : distance;
  }, [distance, isMobile]);

  // Memoized variants for better performance
  const variants = useMemo(() => {
    // For reduced motion or very small mobile screens, just fade in without movement
    if (isReducedMotion || (isMobile && window.innerWidth < 360)) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }
    
    const hidden: Variant = { opacity: 0 };
    const visible: Variant = { opacity: 1 };

    switch (from) {
      case "bottom":
        hidden.y = adjustedDistance;
        visible.y = 0;
        break;
      case "top":
        hidden.y = -adjustedDistance;
        visible.y = 0;
        break;
      case "left":
        hidden.x = -adjustedDistance;
        visible.x = 0;
        break;
      case "right":
        hidden.x = adjustedDistance;
        visible.x = 0;
        break;
    }

    return {
      hidden,
      visible,
    };
  }, [from, adjustedDistance, isReducedMotion, isMobile]);
  
  // Simplified animation for mobile
  const transition = useMemo(() => {
    const baseDuration = isMobile ? 0.2 : duration;
    const baseDelay = isMobile ? Math.min(delay, 0.1) : delay;
    
    return {
      duration: baseDuration,
      delay: React.Children.count(children) > 1 ? 0 : baseDelay,
      ease: "easeOut"
    };
  }, [duration, delay, children, isMobile]);

  // Simplified staggering for mobile
  const containerVariants = useMemo(() => {
    const staggerAmount = isMobile ? 0.03 : staggerChildren;
    
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerAmount,
          delayChildren: isMobile ? Math.min(delay, 0.1) : delay,
        },
      },
    };
  }, [staggerChildren, delay, isMobile]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={React.Children.count(children) > 1 ? containerVariants : variants}
      transition={transition}
      className={className}
    >
      {React.Children.count(children) > 1 ? (
        // If multiple children, wrap each in motion.div for staggering
        React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={variants}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
}
