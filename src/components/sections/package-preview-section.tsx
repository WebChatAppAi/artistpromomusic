import React from "react";
import { placeholderPackages } from "@/lib/placeholder-data";
import { PackageCard } from "@/components/package-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeInUp } from "@/components/animations/fade-in-up"; // Import animation component

export function PackagePreviewSection() {
  const featuredPackages = placeholderPackages.filter((pkg) => pkg.isPopular);

  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Promotion Packages
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from our curated packages designed to boost your music&apos;s
          visibility and reach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
        {featuredPackages.map((pkg, index) => (
          <FadeInUp key={pkg.id} delay={index * 0.1} className="h-full"> {/* Add animation wrapper with delay */}
            <PackageCard
              title={pkg.title}
              description={pkg.description}
              features={pkg.features}
              price={pkg.price}
              isPopular={pkg.isPopular}
              delay={0.1 * (index + 1)}
            />
          </FadeInUp>
        ))}
        {/* If fewer than 3 featured, you might want placeholder cards or adjust grid */}
      </div>

      <div className="text-center">
        <Link href="/packages">
          <Button variant="outline" className="mx-auto">View All Packages</Button>
        </Link>
      </div>
    </section>
  );
}
