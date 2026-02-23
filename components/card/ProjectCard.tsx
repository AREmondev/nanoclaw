import React from "react";
import { Text } from "../ui/Text";
import { Chip } from "../ui/Chips";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

function ProjectCard() {
  return (
    <div className="flex flex-col gap-[30px] group">
      <div className="relative max-w-[560px] rounded-[20px] md:rounded-[30px] xl:rounded-[40px] overflow-hidden ">
        <Image
          src={IMAGES.PORJECT_1}
          alt="Project 1"
          width={560}
          height={560}
          className="w-full h-auto"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/30 backdrop-blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] md:rounded-[30px] xl:rounded-[40px]"></div>

        {/* Centered button */}
        <div
          className="absolute top-1/2 left-1/2 w-[80px] h-[80px] md:w-[100px] md:h-[100px] xl:w-[120px] xl:h-[120px] px-4 md:px-5 xl:px-[30px] rounded-full bg-red flex items-center justify-center gap-2 z-10
                  opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                  transform -translate-x-1/2 -translate-y-1/2
                  transition-all duration-300"
        >
          <Text variant="body-sm" className="text-center text-white">
            View Details
          </Text>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] items-center">
        <Text variant={"card"}>Software Development</Text>
        <div className="flex items-center gap-1">
          <Chip variant={"outline"}>UX Design</Chip>
          <Chip variant={"outline"}>Webflow</Chip>
          <Chip variant={"outline"}>SEO</Chip>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
