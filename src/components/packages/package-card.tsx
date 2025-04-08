"use client"; // Required for motion component

import React from "react";
import { Package } from "@/types";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

interface PackageCardProps {
  pkg: Package;
}

// Helper function to format price (e.g., 4999 -> $49.99)
function formatPrice(priceInCents: number): string {
  return (priceInCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function PackageCard({ pkg }: PackageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, 
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="h-full relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Dynamic background glow effect */}
      {pkg.isFeatured && (
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-xl blur opacity-60 -z-10"
          animate={{
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <Card
        className={`flex flex-col justify-between h-full backdrop-blur-sm ${
          pkg.isFeatured 
            ? "border-primary/50 shadow-xl bg-card/40" 
            : "bg-card/30 border-white/5 shadow-lg hover:border-white/10"
        }`}
      >
        <CardHeader className="pb-4 relative">
          {pkg.isFeatured && (
            <Badge 
              variant="secondary" 
              className="w-fit mb-2 bg-primary/20 text-primary-foreground border border-primary/30"
            >
              Featured
            </Badge>
          )}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CardDescription className="text-base">{pkg.description}</CardDescription>
          </motion.div>
        </CardHeader>
        
        <CardContent className="flex-1">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              {formatPrice(pkg.price)}
            </span>
            <span className="text-sm text-muted-foreground"> / campaign</span>
          </motion.div>
          
          <ul className="space-y-3 text-sm text-muted-foreground">
            {pkg.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <div className="bg-primary/10 rounded-full p-1">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-4">
          <Button 
            className={`w-full relative overflow-hidden group ${
              pkg.isFeatured ? "bg-primary hover:bg-primary/90" : ""
            }`}
            asChild
          >
            <Link href="/contact">
              <span className="relative z-10">{pkg.isFeatured ? "Get Started Now" : "Choose Plan"}</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
