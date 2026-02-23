"use client";
import { Chip } from "@/components/ui/Chips";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
const steps = [
  {
    number: "01",
    label: "Discover",
    description: "We have had quite a run in our 16+ years of working.",
  },
  {
    number: "02",
    label: "Design",
    description: "We have had quite a run in our 16+ years of working.",
  },
  {
    number: "03",
    label: "Develop",
    description: "We have had quite a run in our 16+ years of working.",
  },
  {
    number: "04",
    label: "Deliver",
    description: "We have had quite a run in our 16+ years of working.",
  },
];
// Per-card static positioning config
const cardConfig = [
  {
    rotate: "-rotate-[3.5deg]",
    left: "left-[0px]",
    top: "top-[25px]",
    z: 5,
  },
  {
    rotate: "rotate-[4.99deg]",
    left: "left-[326px]",
    top: "top-[80px]",
    z: 10,
  },
  {
    rotate: "-rotate-[11.99deg]",
    left: "left-[663px]",
    top: "top-[0px]",
    z: 10,
  },
  {
    rotate: "rotate-[4deg]",
    left: "left-[1049px]",
    top: "top-[62px]",
    z: 5,
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="container pt-15 md:pt-20 xl:pt-30 pb-[100px] md:pb-[120px] xl:pb-[286px]">
      <div className="flex flex-col gap-10 md:gap-20 xl:gap-30 items-center">
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="flex items-center sm:items-normal ml-10 xl:ml-0 flex-col gap-[30px]">
            <div className="flex flex-col sm:flex-row ml-[-50px] items-center gap-2.5">
              <Chip variant={"filled"}>How We Work</Chip>
              <Text variant="section" className=" text-black">
                Process
              </Text>
            </div>{" "}
            <Text variant="section" className="text-black ">
              Overview
            </Text>
          </div>
          <Text variant={"body"}>
            We turn ideas into digital products through a clear, structured, and
            result-driven process.
          </Text>
        </div>

        {/* Desktop: Fan layout */}
        <section className="hidden lg:flex items-center justify-center">
          <div className="relative lg:w-[880px] xl:w-[1240px] 2xl:w-[1440px] h-[600px]">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              const config = cardConfig[i];

              return (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{ zIndex: isActive ? 20 : config.z }}
                  className={cn(
                    "absolute cursor-pointer",
                    "w-[360px] h-[450px]",
                    config.left,
                    config.top,
                    config.rotate,
                    "transition-all duration-500 ease-out",
                  )}
                >
                  <ProcessCard step={step} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Mobile/Tablet: Grid layout */}
        <section className="lg:hidden w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="cursor-pointer"
                >
                  <ProcessCard step={step} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

const ProcessCard = ({
  step,
  isActive,
}: {
  step: (typeof steps)[number];
  isActive: boolean;
}) => {
  return (
    <div
      className={[
        "relative rounded-[20px] p-6 sm:p-8 lg:p-10 h-full min-h-[280px] lg:min-h-0 flex flex-col gap-10 sm:gap-15 lg:gap-20 justify-between",
        "transition-all duration-500 border border-white/10",
        isActive ? "bg-red " : "bg-[#151515] ",
      ].join(" ")}
    >
      <div className="flex flex-col gap-5">
        <span
          className={[
            "self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-colors duration-300",
            isActive ? "bg-white text-red-600" : "bg-red-600 text-white",
          ].join(" ")}
        >
          STEP
        </span>

        <span
          className="text-[100px] sm:text-[140px] lg:text-[200px] text-end font-semibold leading-[80px] sm:leading-[100px] lg:leading-[140px]"
          style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            color: "transparent",
            WebkitTextStroke: isActive
              ? "2px rgba(255,255,255,0.45)"
              : "2px rgba(255,255,255,0.2)",
          }}
        >
          {step.number}
        </span>
      </div>

      <div className="flex flex-col gap-5 text-white z-10">
        <Text variant={"card-md"}>{step.label}</Text>
        <Text
          variant={"body-sm"}
          className={[isActive ? "text-white/80" : "text-[#898989]"].join(" ")}
        >
          {step.description}
        </Text>
      </div>
    </div>
  );
};

export default Process;
