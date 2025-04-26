import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import { Separator } from "@/components/ui/separator";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <div className="h-20" />
        <Hero />
        <Works />
        <div className="wrapper">
          <Separator />
        </div>
      </div>

      <About />
      <Tech />
      <Experiences />
    </div>
  );
}
