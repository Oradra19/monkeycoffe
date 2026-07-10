import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import AboutUs from "@/sections/AboutUs";
import WhatWeServe from "@/sections/WhatWeServe";
import Signature from "@/sections/Signature";
import Ambience from "@/sections/Ambience";
import Mark from "@/sections/Mark";
import VisitUs from "@/sections/VisitUs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Mark />  
        <WhatWeServe />
        <Signature />
        <Ambience />
        <AboutUs />
        <VisitUs />
      </main>

      <Footer />
    </>
  );
}