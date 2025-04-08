"use client"; // Needs to be a client component for framer-motion hooks

import React from "react";
import { motion, useAnimation, useInView, Variant } from "framer-motion";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean; // Trigger animation only once
  distance?: number; // How far to move (px)
  damping?: number; // Bounce effect (higher = less bounce)
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
  damping = 15,
  staggerChildren = 0.1,
  from = "bottom",
}: FadeInUpProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: once, amount: 0.2 }); // Trigger when 20% visible
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      // Optional: Reset animation if it goes out of view and 'once' is false
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  // Determine direction of animation
  const getDirectionalVariants = () => {
    const hidden: Variant = { opacity: 0 };
    const visible: Variant = { opacity: 1 };

    switch (from) {
      case "bottom":
        hidden.y = distance;
        visible.y = 0;
        break;
      case "top":
        hidden.y = -distance;
        visible.y = 0;
        break;
      case "left":
        hidden.x = -distance;
        visible.x = 0;
        break;
      case "right":
        hidden.x = distance;
        visible.x = 0;
        break;
    }

    return {
      hidden,
      visible,
    };
  };

  const variants = getDirectionalVariants();

  // Add staggering effect when children need to animate sequentially
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={React.Children.count(children) > 1 ? containerVariants : variants}
      transition={{ 
        duration, 
        delay: React.Children.count(children) > 1 ? 0 : delay, 
        ease: [0.25, 0.1, 0.25, 1],
        damping,
      }}
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
