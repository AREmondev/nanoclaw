import { Chip } from "@/components/ui/Chips";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery",
    description: [
      "Stakeholder interviews",
      "Competitive analysis",
      "User personas",
    ],
  },
  {
    id: "02",
    title: "Conceptualization",
    description: ["User flows", "Low-fidelity wireframes"],
  },
  {
    id: "03",
    title: "UI Design",
    description: ["High-fidelity mockups", "Style guides"],
  },
  {
    id: "04",
    title: "Iteration & Testing",
    description: ["A/B testing", "User testing", "Refinements"],
  },
  {
    id: "05",
    title: "Handoff",
    description: ["Developer-ready assets", "Design system", "Documentation"],
  },
];
const WorkProcess = () => {
  return (
    <div className="max-w-[1800px] mx-auto rounded-[20px] sm:rounded-[30px] xl:rounded-[50px] bg-[#151515] py-[60px] md:py-[80px] xl:py-[120px]">
      <div className="container pb-30">
        <div className="max-w-[1185px] flex flex-col gap-20  mx-auto">
          <div className="flex  items-start sm:items-normal w-full flex-col gap-0">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Chip variant={"filled"}>what we do</Chip>
              <Text variant="section" className=" text-white max-w-[910px]">
                End-to-End UX Expertise for Every Digital Touchpoint
              </Text>
            </div>
          </div>
          <Text variant={"body"} className="text-white max-w-[730px] ml-auto">
            Whether you're building a new product, redesigning an existing
            interface, or needing a design system, our UX team delivers modern
            solutions aligned with user needs and business objectives.
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-white/10 divide-x divide-y ">
        <ProcessItem
          icon={faSearch}
          title="User Research & Discovery"
          description="Interactive wireframes and prototypes to validate ideas early and reduce development costs."
        />
        <ProcessItem
          icon={faSearch}
          title="User Research & Discovery"
          description="Interactive wireframes and prototypes to validate ideas early and reduce development costs."
        />
        <ProcessItem
          icon={faSearch}
          title="User Research & Discovery"
          description="Interactive wireframes and prototypes to validate ideas early and reduce development costs."
        />
        <ProcessItem
          icon={faSearch}
          title="User Research & Discovery"
          description="Interactive wireframes and prototypes to validate ideas early and reduce development costs."
        />
      </div>
      <div className="container">
        <h3 className="text-[36px] sm:text-[50px] md:text-[72px] xl:text-[100px] py-15 md:py-25 xl:py-40 text-white">
          Our Human-Centered <br />{" "}
          <span className="text-gray">Design Approach</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] xl:grid-cols-[auto_1020px] gap-5 md:gap-10 justify-between">
          <Chip variant={"filled"} className="mt-10">
            Our Solutions
          </Chip>
          <div className="grid grid-cols-1 divide-y divide-white/10">
            {PROCESS_STEPS.map(({ id, title, description }, index) => (
              <div className="flex group items-center justify-between pt-[30px] pb-5 gap-5 flex-wrap">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-auto items-center gap-[50px]">
                    <Text variant={"card"} className="text-red">
                      {id}
                    </Text>
                    <Text
                      variant={"card"}
                      className="text-white text-[24px]! sm:text-[32px]! md:text-[38px]! xl:text-[44px]!"
                    >
                      {title}
                    </Text>
                  </div>
                  <Text
                    variant={"body"}
                    className="text-gray opacity-0 group-hover:opacity-100"
                  >
                    {description.join(", ")}
                  </Text>
                </div>

                <Image
                  src={IMAGES[`SOLUTION_${index + 1}` as keyof typeof IMAGES]}
                  alt="solution"
                  width={180}
                  height={120}
                  className="overflow-hidden rounded-[24px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessItem = ({
  icon,
  title,
  description,
}: {
  icon: IconDefinition;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 md:p-[30px] xl:p-[50px] flex flex-col justify-between min-h-[250px] md:min-h-[350px] xl:min-h-[480px] border-t border-b border-white/10">
      <div className="flex flex-col gap-15">
        <Icon icon={icon} className="text-[50px] text-white" />
        <Text variant={"card-lg"} className="text-white">
          {title}
        </Text>
      </div>
      <Text variant={"body"} className="text-[#898989]">
        {description}
      </Text>
    </div>
  );
};

export default WorkProcess;
