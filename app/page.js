import Testimonial from "@/Components/sections/Testimonial";

import Hero from "@/Components/sections/Hero";
import About from "@/Components/sections/About";
import Cta from "@/Components/sections/Cta";
import WhyUs from "@/Components/sections/WhyUs";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Testimonial/>
      <Cta/>
      <WhyUs/>
    </main>
  );
}
