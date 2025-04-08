import React from "react";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { AnimatedText } from "@/components/animations/animated-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <FadeInUp>
        <div className="text-center mb-8">
          <AnimatedText
            text="Artist Dashboard"
            className="text-4xl md:text-5xl font-bold mb-4"
            animation="gradient"
          />
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your central hub for tracking promotion performance and managing your music.
          </p>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-2xl -z-10"></div>
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-primary" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We're currently building an all-new dashboard experience for artists. 
              Track your promotions, view statistics, and manage your submissions all in one place.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
              <Link href="/packages">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Packages
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get Notified
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="bg-card/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-lg text-center">
            <div className="mx-auto w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-muted-foreground">Track performance metrics and growth stats for your promotions</p>
          </div>
          
          <div className="bg-card/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-lg text-center">
            <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Submissions</h3>
            <p className="text-muted-foreground">Submit and manage your tracks for promotion</p>
          </div>
          
          <div className="bg-card/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-lg text-center">
            <div className="mx-auto w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Reporting</h3>
            <p className="text-muted-foreground">Get detailed reports on your promotion campaigns</p>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
} 