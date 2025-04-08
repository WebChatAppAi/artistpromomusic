import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutPreviewSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container content-centered">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Your Curator:{" "}
          <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Eight Mike
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          With years of experience navigating the music industry and a vast
          network of playlist connections, Eight Mike is dedicated to helping
          independent artists get the exposure they deserve. We focus on
          strategic placements to maximize your reach.
        </p>
        <Link href="/about">
          <Button variant="outline">Learn More About Eight Mike</Button>
        </Link>
      </div>
    </section>
  );
}
