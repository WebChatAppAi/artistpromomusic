import { HeroSection } from "@/components/sections/hero-section";
import { FadeInUp } from "@/components/animations/fade-in-up";

export default function Home() {
  return (
    <>
      <FadeInUp>
        <HeroSection />
      </FadeInUp>
    </>
  );
}
