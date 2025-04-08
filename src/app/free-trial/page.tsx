"use client";

import React from "react";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { AnimatedText } from "@/components/animations/animated-text";
import { ArrowRight, Mail, Music, MessageSquare, AlertTriangle, Check, ArrowUpRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function FreeTrialPage() {
  return (
    <main className="min-h-screen container max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <FadeInUp delay={0.1}>
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge className="bg-red-600 hover:bg-red-700 px-3 py-1.5 text-sm font-medium animate-hot-pulse">
              <Zap size={14} className="mr-1" />
              Limited Time Offer
            </Badge>
          </div>
          
          <AnimatedText
            text="Hot Free Trial Promotion"
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400"
          />
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Test our music promotion service with a complimentary 24-48 hour free trial.
            No payment required, no strings attached.
          </p>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="premium-card p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">How The Free Trial Works</h2>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-4">
              We're offering a limited number of free trial promotions to showcase our service quality. 
              Here's what you'll get:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-lg">
                <div className="mr-3 text-blue-400 mt-1">
                  <Music size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">24-48 Hour Promotion</h3>
                  <p className="text-sm text-gray-400">Your track will be promoted across our network of playlists for a 24-48 hour period.</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-lg">
                <div className="mr-3 text-green-400 mt-1">
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Real Results</h3>
                  <p className="text-sm text-gray-400">Experience genuine engagement and streams from real listeners who enjoy your genre.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-6">
            <div className="flex">
              <div className="mr-3 text-yellow-500 mt-1">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h3 className="font-medium text-yellow-500 mb-1">Important Note</h3>
                <p className="text-sm text-gray-300">
                  While we aim to deliver quality results for all free trials, please understand that free trials are limited in scope compared to our paid packages. 
                  No specific stream counts or placements are guaranteed for the free trial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.3}>
        <div className="premium-card p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">How To Apply</h2>
          
          <p className="text-gray-300 mb-6">
            Applying for a free trial promotion is quick and easy. Simply click the button below to fill out our application form.
          </p>
          
          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
              
              <Button 
                asChild
                className="relative bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-12 py-6 rounded-lg text-lg font-bold shadow-xl"
              >
                <Link href="https://forms.gle/rfTTwYUzysFsuM5y9" target="_blank" rel="noopener noreferrer">
                  <Zap size={20} className="mr-2" />
                  GET FREE
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <p className="mt-4 text-xs text-gray-500">
              Limited spots available. Apply today!
            </p>
          </div>
          
          <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-medium mb-2 text-center">What happens after you apply?</h3>
            <p className="text-sm text-gray-400 text-center">
              Once we receive your application, we'll review it within 24 hours and contact you via your provided
              messaging app to confirm your free trial. After confirmation, we'll begin your 24-48 hour promotional period.
            </p>
          </div>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <div className="premium-card p-8">
          <h2 className="text-2xl font-bold mb-6">What Artists Say About Our Free Trial</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-gray-300 italic mb-4">
                "I was skeptical at first, but after trying the free promotion I was blown away by the results. 
                Gained over 300 new listeners in just 24 hours!"
              </p>
              <p className="text-sm font-medium">— Alex R., Hip-Hop Artist</p>
            </div>
            
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-gray-300 italic mb-4">
                "The free trial gave me a clear idea of what to expect from the full service. 
                Professional communication and real results. Definitely worth trying!"
              </p>
              <p className="text-sm font-medium">— Sarah M., Indie Singer</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="relative group inline-block">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
              
              <Button 
                asChild
                className="relative bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-10 py-5 rounded-lg font-bold shadow-xl"
              >
                <Link href="https://forms.gle/rfTTwYUzysFsuM5y9" target="_blank" rel="noopener noreferrer">
                  <Zap size={18} className="mr-2" />
                  GET FREE NOW
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Spots are filling up fast!</p>
          </div>
        </div>
      </FadeInUp>
    </main>
  );
} 