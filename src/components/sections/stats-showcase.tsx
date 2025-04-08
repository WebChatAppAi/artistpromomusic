import React from "react";

// Placeholder data for stats
const stats = [
  { name: "Playlists Reached", value: "1M+" },
  { name: "Artists Promoted", value: "500+" },
  { name: "Genres Covered", value: "20+" },
  { name: "Avg. Stream Increase", value: "300%" },
];

export function StatsShowcase() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proven Results & Wide Reach
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col items-center text-center p-4 border border-border/20 rounded-lg bg-background shadow-sm"
            >
              <dt className="order-last text-sm font-medium text-muted-foreground">
                {stat.name}
              </dt>
              <dd className="text-4xl font-extrabold text-primary md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
