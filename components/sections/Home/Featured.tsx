import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const LIGHTBULB_PATH =
  "M13.7344 18H4.26562C3.9375 16.9688 3.23438 16.0312 2.48438 15.1875C0.9375 13.5938 0 11.3906 0 9C0 4.03125 4.03125 0 9 0C13.9688 0 18 4.03125 18 9C18 11.3906 17.0625 13.5938 15.5156 15.1875C14.7656 16.0312 14.0625 16.9688 13.7344 18ZM13.5 20.25V21C13.5 23.0625 11.8125 24.75 9.75 24.75H8.25C6.1875 24.75 4.5 23.0625 4.5 21V20.25H13.5ZM8.625 5.25C9.23438 5.25 9.75 4.73438 9.75 4.125C9.75 3.51562 9.23438 3 8.625 3C5.53125 3 3 5.53125 3 8.625C3 9.23438 3.51562 9.75 4.125 9.75C4.73438 9.75 5.25 9.23438 5.25 8.625C5.25 6.75 6.75 5.25 8.625 5.25Z";

const featuredItems = [
  {
    title: "Full-Stack",
    subtitle: "Development Expertise",
    description: "End-to-end UX design, web development, and custom software.",
  },
  {
    title: "Fast Turnaround &",
    subtitle: "Iterations",
    description: "End-to-end UX design, web development, and custom software.",
  },
  {
    title: "Measurable",
    subtitle: "Business Impact",
    description: "End-to-end UX design, web development, and custom software.",
  },
  {
    title: "Human-Centered",
    subtitle: "Design",
    description: "End-to-end UX design, web development, and custom software.",
  },
];
const FeaturedCard = ({
  title,
  subtitle,
  description,
  isLast,
}: {
  title: string;
  subtitle: string;
  description: string;
  isLast: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex group min-h-[300px] md:min-h-[400px] xl:min-h-[600px] px-6 md:px-[30px] xl:px-[50px] py-10 md:py-15 xl:py-20 flex-col gap-10 justify-end bg-white/3 backdrop-blur-[5px] hover:backdrop-blur-[20px] transition-all duration-300",
        !isLast && "border-white/20 sm:border-r",
      )}
    >
      <span className="flex items-center justify-center w-15 h-15 rounded-full bg-white group-hover:bg-red transition-colors duration-300">
        <svg
          className="block group-hover:opacity-0 group-hover:scale-90 transition-all duration-300"
          width="18"
          height="25"
          viewBox="0 0 18 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={LIGHTBULB_PATH} fill="black" />
        </svg>
        <svg
          className="absolute opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
          width="18"
          height="25"
          viewBox="0 0 18 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={LIGHTBULB_PATH} fill="white" />
        </svg>
      </span>

      <Text variant={"card"} className="text-white">
        {title} <br /> {subtitle}
      </Text>

      <Text
        variant={"body"}
        className="text-[#898989] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden group-hover:block"
      >
        {description}
      </Text>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
      <div className="absolute left-0  top-0 w-full h-full">
        <Image
          src={IMAGES.FEATURED}
          alt="Featured"
          className="w-full h-full object-cover"
          width={560}
          height={560}
        />
      </div>

      {featuredItems.map((item, index) => (
        <FeaturedCard
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          isLast={index === featuredItems.length - 1}
        />
      ))}
    </div>
  );
};

export default Featured;
