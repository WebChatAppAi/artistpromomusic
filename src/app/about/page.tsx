import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Eight Mike - ARTIST PROMO MUSIC",
  description: "Learn more about Eight Mike and our music promotion services.",
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="prose dark:prose-invert max-w-3xl mx-auto">
        {" "}
        {/* Using Tailwind Typography for basic styling */}
        <h1>
          About{" "}
          <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Eight Mike
          </span>
        </h1>
        <p>
          Welcome to ARTIST PROMO MUSIC, founded and curated by Eight Mike. We
          understand the challenges independent artists face in getting their
          music heard in a crowded digital landscape. Our mission is to bridge
          that gap by providing targeted, effective playlist promotion services.
        </p>
        <h2>Our Philosophy</h2>
        <p>
          We believe in quality over quantity. Instead of blasting your track
          to irrelevant playlists, we focus on strategic placements within your
          genre and target audience. Eight Mike leverages years of industry
          experience and a carefully cultivated network of playlist curators to
          ensure your music reaches listeners who are genuinely interested.
        </p>
        <h2>What We Do</h2>
        <ul>
          <li>
            <strong>Targeted Playlist Pitching:</strong> We identify and pitch
            your music to relevant playlists based on genre, mood, and style.
          </li>
          <li>
            <strong>Network Leverage:</strong> Access to Eight Mike&apos;s extensive
            network of independent and editorial playlist curators.
          </li>
          <li>
            <strong>Transparent Reporting:</strong> Receive clear reports on
            placements achieved and performance metrics.
          </li>
          <li>
            <strong>Artist Focused:</strong> We work closely with artists to
            understand their goals and tailor campaigns accordingly.
          </li>
        </ul>
        <h2>Meet Eight Mike</h2>
        <p>
          (Placeholder for Eight Mike&apos;s bio - background, experience, passion
          for music, success stories, etc. This section should be filled with
          actual content later.)
        </p>
        <p>
          Ready to take your music to the next level? Explore our packages or
          get in touch to discuss your project.
        </p>
      </div>
    </div>
  );
}
