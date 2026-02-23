import Bold from "@/components/sections/Services/Bold";
import Capabilities from "@/components/sections/Services/Capabilities";
import Hero from "@/components/sections/Services/Hero";
import Review from "@/components/sections/Services/Review";

import { IMAGES } from "@/lib/constants";

import Image from "next/image";

export default function Services() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <Review />
      <Bold />
    </main>
  );
}
