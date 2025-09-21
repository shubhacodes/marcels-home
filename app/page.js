import About from "@/components/landing-page/about";
import CTA from "@/components/landing-page/cta";
import Hero from "@/components/landing-page/hero";
import Marquee from "@/components/landing-page/marquee";
import Menu from "@/components/landing-page/menu";
import Merch from "@/components/landing-page/merch";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Merch />
      <Marquee />
      <CTA />
    </>
  );
}
