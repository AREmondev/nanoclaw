import ProjectCard from "@/components/card/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import React from "react";

const Projects = () => {
  return (
    <div className="container py-15 md:py-20 xl:py-30">
      <div className="flex flex-col gap-10 md:gap-20 items-center">
        <div className="flex flex-col w-full gap-10 md:gap-20 items-center justify-center">
          <div className="max-w-[1036px] w-full mx-auto text-center md:text-right">
            <Text variant={"section-lg"} className="text-center md:text-right">
              Recent
            </Text>
            <Text
              variant={"section-lg"}
              className="text-red text-center md:text-left"
            >
              Projects
            </Text>
          </div>
          <Text variant={"body"} className="text-center">
            In the creative wilderness, our work becomes the beacon clients grow
            to love.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex justify-center items-center">
          <Button>View Full Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
