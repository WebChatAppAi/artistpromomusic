import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PackagePreviewSection } from "@/components/sections/package-preview-section";
import { StatsShowcase } from "@/components/sections/stats-showcase";
import { FadeInUp } from "@/components/animations/fade-in-up";

export default function Home() {
  return (
    <>
      <FadeInUp>
        <HeroSection />
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <AboutPreviewSection />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <PackagePreviewSection />
      </FadeInUp>
      <FadeInUp delay={0.3}>
        <StatsShowcase />
      </FadeInUp>
      {/* Add other sections like Testimonials later */}
    </>
  );
}
