"use client"; // Required for motion component

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animations/animated-text";
import { FadeInUp } from "@/components/animations/fade-in-up";

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center py-20 md:py-32 gap-10 overflow-hidden">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          <span className="inline-block">
            <AnimatedText 
              text="Amplify" 
              animation="gradient" 
              className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text text-5xl md:text-6xl font-bold"
            />
          </span>
          {" "}
          <span className="inline-block">
            <AnimatedText 
              text="Your Music" 
              animation="reveal" 
              delay={0.4}
              className="text-5xl md:text-6xl font-bold"
            />
          </span>
        </h1>
        
        <h2 className="mt-2 text-4xl md:text-5xl font-bold">
          <span className="inline-block mr-2">
            <AnimatedText 
              text="Reach with" 
              animation="reveal" 
              delay={0.7}
              className="text-4xl md:text-5xl font-bold"
            />
          </span>
          <span className="inline-block">
            <AnimatedText 
              text="Eight Mike" 
              animation="gradient" 
              delay={1.0}
              className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text text-4xl md:text-5xl font-bold"
            />
          </span>
        </h2>

        <FadeInUp delay={1.2} from="bottom" distance={30}>
          <p className="text-xl text-muted-foreground mx-auto">
            Get your tracks featured on targeted playlists and reach thousands of
            new listeners. Professional promotion curated by Eight Mike.
          </p>
        </FadeInUp>

        <FadeInUp delay={1.5} from="bottom" distance={40}>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
            <Link href="/packages">
              <Button size="lg" className="w-full md:w-auto px-8 font-medium text-base relative overflow-hidden group">
                <span className="relative z-10">View Packages</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
            <Link href="/free-trial">
              <Button variant="secondary" size="lg" className="w-full md:w-auto px-8 font-medium text-base relative overflow-hidden group animate-glow">
                <span className="relative z-10">Free Trial</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        </FadeInUp>
      </div>

      <FadeInUp delay={1.8} distance={60}>
        <motion.div
          className="w-full max-w-2xl mx-auto mt-8 relative"
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl -z-10"></div>
          <div className="w-full h-64 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm border border-white/10 shadow-xl">
            <div className="text-center">
              <span className="block text-center text-white text-xl font-semibold mb-2">Coming Soon: Musician Dashboard</span>
              <span className="text-sm text-gray-400">Track your promotion performance and growth</span>
            </div>
          </div>
        </motion.div>
      </FadeInUp>
    </section>
  );
}
