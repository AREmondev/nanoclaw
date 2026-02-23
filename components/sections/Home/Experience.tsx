import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chips";
import { LinkButton } from "@/components/ui/LinkButton";
import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="container py-[40px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1097px] mx-auto flex flex-col gap-10 sm:gap-16 md:gap-[100px] xl:gap-[132px]">
        {/* <div className="flex items-center sm:items-start xl:ml-0 flex-col gap-5 sm:gap-[30px] text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <Chip variant={"filled"}>who we are</Chip>
            <Text variant="section" className="text-center sm:text-left">
              We Craft Exceptional
            </Text>
          </div>

          <Text variant="section" className="text-center sm:text-left">
            Digital{" "}
            <span className="text-gray text-center sm:text-left">
              Products that
            </span>
          </Text>
          <Text
            variant="section"
            className="text-gray sm:ml-[50px] text-center sm:text-left"
          >
            Drive Results.
          </Text>
        </div> */}
        <div className="flex gap-[30px] items-center md:items-start sm:items-normal ml-10 xl:ml-0 flex-col ">
          <div className="flex flex-col sm:flex-row ml-[-50px] items-center gap-2.5">
            <Chip variant={"filled"}>who we are</Chip>
            <Text variant="section" className=" text-center md:text-left">
              We Craft Exceptional
            </Text>
          </div>{" "}
          <Text variant="section" className=" text-center md:text-left">
            Digital{" "}
            <span className=" text-gray text-center md:text-left">
              Products that
            </span>
          </Text>
          <Text
            variant="section"
            className="text-gray sm:ml-[50px] text-center md:text-left"
          >
            {"    "}Drive Results.
          </Text>
        </div>
        <div className="ml-0 md:ml-[69px] relative max-w-[825px] w-full flex flex-col sm:flex-row items-center sm:items-end gap-8 sm:gap-0">
          <div className="absolute max-w-[500px] xl:max-w-[580px] right-0 xl:right-[-203px] top-[-30px] md:top-[-52px] hidden sm:flex flex-col gap-8 md:gap-15">
            <Text variant={"body"}>
              End-to-end UX design, web development, and custom software
              solutions built to empower your business.
            </Text>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-10">
              <LinkButton variant="default">get free consultation</LinkButton>
              <Button variant="default" className="">
                See our works
              </Button>
            </div>
          </div>

          <div className="relative self-center sm:self-auto">
            <Image
              width={300}
              height={400}
              src={IMAGES.EXPERIENCE}
              alt="experience"
              className="w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[250px] md:h-[340px] xl:w-[300px] xl:h-[400px]"
            />
            <div className="absolute w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[250px] md:h-[340px] xl:w-[300px] xl:h-[400px] rounded-[20px] left-[15px] sm:left-[20px] md:left-[25px] bottom-[-15px] sm:bottom-[-20px] md:bottom-[-25px] xl:bottom-[-30px] bg-white z-[-1]"></div>
          </div>
          <div className="flex max-w-[510px] justify-end flex-col flex-auto gap-6 sm:gap-[30px] md:gap-[40px] xl:gap-[72px] text-center sm:text-right">
            <div className="flex items-end justify-center sm:justify-start">
              <Text
                variant="highlight"
                className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[120px]"
              >
                16<sup>+</sup>
              </Text>
              <Text
                variant="card"
                className="ml-0 sm:ml-[-30px] md:ml-[-40px] xl:ml-[-50px] text-lg sm:text-xl md:text-2xl"
              >
                years of <span className="text-gray">experience</span>
              </Text>
            </div>
            <div className="flex justify-center sm:justify-end">
              <Text variant={"body"} className="max-w-[300px] sm:max-w-[370px]">
                We have had quite a run in our 16+ years of working.
              </Text>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-8">
          <Text variant={"body"}>
            End-to-end UX design, web development, and custom software solutions
            built to empower your business.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-10">
            <LinkButton variant="default">get free consultation</LinkButton>
            <Button variant="default" className="">
              See our works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
