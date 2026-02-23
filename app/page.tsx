import Brand from "@/components/sections/Home/Brand";
import Experience from "@/components/sections/Home/Experience";
import Featured from "@/components/sections/Home/Featured";
import Hero from "@/components/sections/Home/Hero";
import Process from "@/components/sections/Home/Process";
import Projects from "@/components/sections/Home/Projects";
import Services from "@/components/sections/Home/Services";
import Slider from "@/components/sections/Home/Slider";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

import { IMAGES } from "@/lib/constants";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider />
      <Image
        className="w-full"
        width={1920}
        height={800}
        src={IMAGES.SHOWCASE}
        alt="showcase"
      />
      <Experience />
      <Brand />
      <Services />
      <Projects />
      <Featured />
      <Process />
    </main>
  );
}
