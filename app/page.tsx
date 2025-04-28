"use client";

import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import { Separator } from "@/components/ui/separator";
import Works from "@/components/Works";
import useScrollTo from "@/hooks/useScrollTo";

export default function Home() {
  const { scrollToRefWithOffset, sectionRefs } = useScrollTo();

  return (
    <div>
      <Header onScrollTo={scrollToRefWithOffset} sectionRefs={sectionRefs} />
      <div className="h-20" />
      <Hero ref={sectionRefs.hero} />
      <Works ref={sectionRefs.works} />
      <div className="wrapper">
        <Separator />
      </div>

      <About ref={sectionRefs.about} />
      <Tech ref={sectionRefs.techStacks} />
      <Experiences ref={sectionRefs.experiences} />
      <Footer ref={sectionRefs.contacts} />
    </div>
  );
}
