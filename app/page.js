import About from "@/components/landing-page/about";
import CTA from "@/components/landing-page/cta";
import Hero from "@/components/landing-page/hero";
import Marquee from "@/components/landing-page/marquee";
import Merch from "@/components/landing-page/merch";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Marquee />
      <Merch />
      <CTA />
    </>
  );
}
