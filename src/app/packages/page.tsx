import React from "react";
import { placeholderPackages } from "@/lib/placeholder-data";
import { PackageCard } from "@/components/package-card";
import type { Metadata } from "next";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { AnimatedText } from "@/components/animations/animated-text";
import { ArrowRight, Check, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: "Promotion Packages - ARTIST PROMO MUSIC",
  description: "Choose from our curated music promotion packages to elevate your music and expand your audience reach.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen container max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <FadeInUp delay={0.1}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Promotion Packages"
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our carefully curated promotion packages designed to elevate your music and expand your audience reach.
          </p>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placeholderPackages.map((pkg, index) => (
            <div key={pkg.id} className="flex">
              <PackageCard
                title={pkg.title}
                description={pkg.description}
                features={pkg.features}
                price={pkg.price}
                isPopular={pkg.isPopular}
                delay={0.1 * (index + 1)}
              />
            </div>
          ))}
        </div>
      </FadeInUp>

      <FadeInUp delay={0.3}>
        <div className="premium-card p-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <Badge variant="outline" className="mb-2 border-yellow-500/50 text-yellow-500">
                Coming Soon
              </Badge>
              <h3 className="text-2xl font-bold mb-2">Enterprise Promotion</h3>
              <p className="text-gray-400 mb-4 max-w-2xl">
                Custom promotion plans for established artists, labels, and management companies looking for comprehensive promotion strategies.
              </p>
            </div>
            <div className="mt-4 md:mt-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 px-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-2">Custom pricing</span>
                <Badge variant="outline" className="border-yellow-500/50 text-yellow-500">
                  SOON
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {icon: <Check size={18} />, text: "Personalized promotion strategy"},
              {icon: <Check size={18} />, text: "Priority playlist placement"},
              {icon: <Check size={18} />, text: "PR campaign management"},
              {icon: <Check size={18} />, text: "Social media promotion"},
              {icon: <Check size={18} />, text: "Cross-platform marketing"},
              {icon: <Check size={18} />, text: "Performance analytics"}
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg">
                <span className="mr-2 text-green-400">{feature.icon}</span>
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button variant="outline" className="group">
              <span>Contact for details</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Not sure which package is right for you? Try our free trial first!
          </p>
          <Link href="/free-trial">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group animate-glow">
              <Zap size={16} className="mr-2" />
              <span>Free Trial Promotion</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </FadeInUp>
    </main>
  );
}
