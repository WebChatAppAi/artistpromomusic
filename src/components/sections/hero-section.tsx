"use client"; // Required for motion component

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/animations/animated-text";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { 
  PlayCircle, 
  ChevronRight, 
  Zap, 
  Music, 
  Headphones, 
  BarChart2, 
  Wifi, 
  Award,
  ArrowRight,
  Volume2
} from "lucide-react";

// Add this interface for music note type
interface MusicNote {
  id: number;
  x: number;
  rotate: number;
  scale: number;
  duration: number;
  delay: number;
}

export function HeroSection() {
  // Interactive animation state
  const [animationPlaying, setAnimationPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Audio visualizer effect
  const [visualizerBars, setVisualizerBars] = useState(Array(10).fill(0));
  
  // State for floating music notes
  const [musicNotes, setMusicNotes] = useState<MusicNote[]>([]);
  const notesInitialized = useRef(false);

  // Music brands/labels
  const partners = [
    { name: "Spotify", color: "#1DB954" },
    { name: "Apple Music", color: "#FC3C44" },
    { name: "SoundCloud", color: "#FF5500" },
    { name: "Deezer", color: "#FF0092" }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Eight Mike helped me get on 20+ playlists in just two weeks. Game changer!",
      artist: "Sarah J.",
      increase: "+247% streams"
    },
    {
      quote: "Finally broke 100K monthly listeners thanks to their promotion strategy.",
      artist: "Marcus R.",
      increase: "+189% followers"
    },
    {
      quote: "Professional, responsive and delivers real results. Highly recommended!",
      artist: "Elena D.",
      increase: "+315% engagement"
    }
  ];

  // Enhanced features
  const features = [
    { 
      icon: <Headphones className="h-5 w-5 text-primary" />, 
      text: "Professional Playlist Placements",
      description: "Get featured on curated playlists with active listeners"
    },
    { 
      icon: <Wifi className="h-5 w-5 text-primary" />, 
      text: "Global Audience Reach",
      description: "Connect with fans worldwide through strategic promotion"
    },
    { 
      icon: <BarChart2 className="h-5 w-5 text-primary" />, 
      text: "Organic Growth Strategy",
      description: "Sustainable audience building with real engagement"
    },
    { 
      icon: <Award className="h-5 w-5 text-primary" />, 
      text: "Detailed Performance Reports",
      description: "Track your success with comprehensive analytics"
    }
  ];

  // Initialize music notes with randomized positions - CLIENT SIDE ONLY
  useEffect(() => {
    if (!notesInitialized.current) {
      const notes = Array(10).fill(0).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        rotate: Math.random() * 360,
        scale: 0.5 + Math.random() * 1,
        duration: 15 + Math.random() * 20,
        delay: i * 2
      }));
      setMusicNotes(notes);
      notesInitialized.current = true;
    }
  }, []);

  // Audio visualizer animation
  useEffect(() => {
    if (animationPlaying) {
      const interval = setInterval(() => {
        setVisualizerBars(visualizerBars.map(() => Math.floor(Math.random() * 100)));
      }, 150);
      return () => clearInterval(interval);
    }
  }, [animationPlaying, visualizerBars]);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-background to-background/90 relative">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-1/4 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Main Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20 md:py-32 gap-10 relative z-10">
        {/* Floating music notes animation - CLIENT SIDE ONLY RENDERING */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {musicNotes.map((note) => (
            <motion.div
              key={note.id}
              className="absolute text-white/10"
              initial={{ 
                y: "110%", 
                x: `${note.x}%`,
                rotate: note.rotate,
                scale: note.scale
              }}
              animate={{ 
                y: "-10%", 
                rotate: note.rotate,
                transition: { 
                  duration: note.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: note.delay
                } 
              }}
            >
              <Music className="h-8 w-8" />
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-3xl w-full mx-auto relative">
          {/* Floating badge */}
          <motion.div 
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10 text-sm font-medium"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="flex items-center">
              <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Just launched: TRIAL FOR NEW CUSTOMERS
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
            <span className="inline-block">
              <AnimatedText 
                text="Amplify" 
                animation="gradient" 
                className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text text-5xl md:text-7xl font-bold"
              />
            </span>
            {" "}
            <span className="inline-block">
              <AnimatedText 
                text="Your Music" 
                animation="reveal" 
                delay={0.4}
                className="text-5xl md:text-7xl font-bold"
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get your tracks featured on targeted playlists and reach thousands of
              new listeners. Professional promotion curated by industry experts for independent artists.
            </p>
          </FadeInUp>

          <FadeInUp delay={1.5} from="bottom" distance={40}>
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center mt-8">
              <Link href="/packages" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto px-8 py-6 font-medium text-base relative overflow-hidden group">
                  <span className="relative z-10">View Packages</span>
                  <ChevronRight className="ml-2 h-4 w-4 relative z-10" />
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </Link>
              <Link href="/free-trial" className="w-full md:w-auto">
                <Button variant="secondary" size="lg" className="w-full md:w-auto px-8 py-6 font-medium text-base relative overflow-hidden group bg-red-600 hover:bg-red-700 text-white">
                  <Zap className="mr-2 h-4 w-4 relative z-10" />
                  <span className="relative z-10">Limited Free Trial</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </Link>
            </div>
          </FadeInUp>

          {/* Stats counters */}
          <FadeInUp delay={1.7} from="bottom" distance={40}>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                >
                  10,000+
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">Monthly Listeners</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.5 }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">Playlist Placements</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  97%
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">Growth Rate</div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Features Section - Now with interactive hover effects */}
        <FadeInUp delay={1.6} distance={40}>
          <div className="mt-12 w-full max-w-4xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-primary/10 rounded-full mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <span className="font-medium text-base">{feature.text}</span>
                  </div>
                  <p className="text-sm text-gray-400 ml-12">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Enhanced Dashboard Preview with interactivity */}
        <FadeInUp delay={1.8} distance={60}>
          <motion.div
            className="w-full max-w-4xl mx-auto mt-12 relative px-4 sm:px-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl -z-10"></div>
            <div className="w-full rounded-lg flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm border border-white/10 shadow-xl p-6 md:p-8 overflow-hidden">
              <div className="text-left mb-6 md:mb-0 w-full md:w-1/2">
                <span className="block text-white text-2xl font-semibold mb-2">Musician Dashboard</span>
                <span className="text-sm text-gray-300 block mb-4 leading-relaxed">
                  Track your promotion performance and growth in real-time with our interactive analytics dashboard
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-transparent border-white/20 hover:bg-white/10 group"
                  onClick={() => setAnimationPlaying(!animationPlaying)}
                >
                  {animationPlaying ? (
                    <>
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      <span>Stop Demo</span>
                    </>
                  ) : (
                    <>
                      <PlayCircle className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                      <span>Watch Demo</span>
                    </>
                  )}
                </Button>
              </div>
              
              <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded blur-md"></div>
                <div className="relative bg-black/50 border border-white/10 rounded-lg p-6 flex flex-col w-full max-w-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Music className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
                      <div className="h-3 bg-white/10 rounded-full w-1/2 mt-2"></div>
                    </div>
                  </div>
                  
                  {/* Interactive audio visualizer */}
                  <div className="flex items-end h-12 space-x-1 mt-2 mb-4">
                    {visualizerBars.map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t w-full"
                        initial={{ height: "10%" }}
                        animate={{ height: animationPlaying ? `${10 + height}%` : "10%" }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                  
                  {/* Stats displays */}
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="bg-white/5 rounded p-2">
                      <div className="text-xs text-gray-400">Monthly Growth</div>
                      <div className="text-lg font-semibold text-green-400 flex items-center">
                        +32% <ArrowRight className="h-3 w-3 ml-1" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded p-2">
                      <div className="text-xs text-gray-400">New Followers</div>
                      <div className="text-lg font-semibold text-blue-400">1,245</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeInUp>

        {/* New: Testimonial Slider */}
        <FadeInUp delay={1.9} distance={50}>
          <div className="w-full max-w-4xl mx-auto mt-12 px-4 sm:px-0">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="flex items-center mb-4">
                <Volume2 className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-lg font-medium">What Artists Say</h3>
              </div>
              
              <div className="relative h-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <p className="text-lg italic text-gray-300 mb-4">&quot;{testimonials[currentTestimonial].quote}&quot;</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{testimonials[currentTestimonial].artist}</span>
                      <span className="text-green-400 text-sm font-medium">{testimonials[currentTestimonial].increase}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentTestimonial ? "w-8 bg-primary" : "w-2 bg-gray-600"
                    }`}
                    onClick={() => setCurrentTestimonial(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Enhanced Social Proof */}
        <FadeInUp delay={2.0} distance={40}>
          <div className="mt-16 text-center w-full">
            <p className="text-sm text-gray-400 mb-6">Trusted by indie artists and labels on leading platforms</p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 + (index * 0.1) }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div 
                    className="h-3 w-3 rounded-full" 
                    style={{ backgroundColor: partner.color }}
                  ></div>
                  <span className="text-sm font-medium">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}