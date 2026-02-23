"use client";
import { Chip } from "@/components/ui/Chips";
import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const Result = () => {
  return (
    <div className="max-w-[1840px] mx-auto w-full py-15 md:py-20 xl:py-30 px-4 md:px-5">
      <div className="flex flex-col gap-30">
        <div className="max-w-[845px] mx-auto flex flex-col gap-10 md:gap-20">
          <div className=" flex items-center sm:items-start ml-10 xl:ml-0 flex-col gap-[30px]">
            <div className="flex flex-col sm:flex-row  items-center gap-2.5">
              <Chip variant={"filled"}>Portfolio</Chip>
              <Text variant="section" className=" text-black">
                Real Results With
              </Text>
            </div>{" "}
            <Text variant="section" className="text-black ml-0 md:ml-[65px]">
              Smart Design
            </Text>
          </div>
          <Text variant="body" className="text-black  text-center">
            Redesigned fintech app leading to +42% user retention
          </Text>
        </div>
        <PortfolioGrid />
      </div>
    </div>
  );
};

const PortfolioGrid = () => {
  const [active, setActive] = useState<number | null>(3);

  const items = [
    IMAGES.DESIGNPORTFOLIO,
    IMAGES.DESIGNPORTFOLIO_2,
    IMAGES.DESIGNPORTFOLIO_3,
    IMAGES.DESIGNPORTFOLIO_4,
  ];

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
      {items.map((img, index) => {
        const isActive = active === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            className={cn(
              "relative h-[250px] sm:h-[320px] md:h-[420px] xl:h-[560px] rounded-[20px] md:rounded-[30px] xl:rounded-[40px] overflow-hidden transition-all duration-500 ease-in-out",
              isActive ? "lg:col-span-2 z-20" : "col-span-1",
            )}
          >
            {/* Overlay */}
            <div
              className={
                " absolute z-10 inset-0 flex items-end p-5   transition-translate  duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] "
              }
            >
              <div
                className={cn(
                  "px-5 py-4 md:px-8 md:py-[20px] xl:px-10 xl:py-[30px] w-full rounded-[20px] md:rounded-[30px] xl:rounded-[40px] flex flex-col gap-5  bg-white/10 backdrop-blur-[20px]  transition-all duration-500",
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                )}
              >
                <Text variant="card" className="text-white">
                  Title Goes Here
                </Text>

                <div className="flex items-center gap-1">
                  <Chip variant="filled" className="bg-black">
                    Design
                  </Chip>
                </div>
              </div>
            </div>

            <Image
              src={img}
              alt="design_portfolio"
              width={560}
              height={560}
              className={`
                w-full h-full object-cover
                transition-transform duration-500
                ${isActive ? "scale-105" : "scale-100"}
              `}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Result;
