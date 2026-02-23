import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chips";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="py-20 md:py-30 xl:py-40">
        <div className="max-w-[933px] mx-auto ">
          <div className="flex w-full items-start sm:items-normal ml-10 xl:ml-0 flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:ml-[-50px] items-center gap-2.5">
              <Chip variant={"filled"}>who we are</Chip>
              <Text variant="section" className="">
                We Design
              </Text>
            </div>{" "}
            <Text variant="section" className="text-center sm:items-normal">
              Digital <span className=" text-gray">Products That People </span>
            </Text>
            <Text
              variant="section"
              className="text-center  text-gray  self-center items-center sm:ml-[50px]"
            >
              Actually Love to Use
            </Text>
          </div>
        </div>
      </div>
      <div className="grid pb-15 md:pb-25 xl:pb-40 grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[600px_auto] gap-5 md:gap-10">
        <div className="py-10 md:py-15 min-h-[280px] md:min-h-[350px] xl:min-h-[420px] flex flex-col items-end relative px-6 md:px-10 rounded-[20px] md:rounded-[30px] xl:rounded-[40px] bg-red overflow-hidden">
          <div className="absolute h- z-10 left-[-40px] top-[-20px]">
            <Image
              src={IMAGES.LOGO_SM}
              className="w-full h-full z-10"
              alt="Hero Background Effect"
              width={200}
              height={200}
            />
          </div>
          <div className="flex h-full flex-col gap-10 justify-between">
            <div className="flex flex-col items-end gap-[30px]">
              <Text variant="hero" className="font-medium text-white">
                3k+
              </Text>
              <Text variant="body" className="font-medium text-end text-white">
                Successfully <br /> completed projects
              </Text>
            </div>
            <Button variant={"white"} className="h-[50px]">
              Facts & Values
            </Button>
          </div>
        </div>
        <div className="py-8 md:py-[30px] xl:py-[50px] flex flex-col items-start relative px-6 md:px-10 rounded-[20px] md:rounded-[30px] xl:rounded-[40px] bg-white overflow-hidden">
          <div className="absolute w-auto h-[140%]  translate-y-[-50%] right-[-70px] top-1/2">
            <Image
              src={IMAGES.ROBOT}
              className="w-full h-full z-10"
              alt="Hero Background Effect"
              width={500}
              height={500}
            />
          </div>
          <div className="flex h-full flex-col gap-10 justify-between">
            <div className="flex items-center gap-0">
              <Image
                src={IMAGES.AVATAR}
                className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full border-white border-3 md:border-4 xl:border-5"
                alt="Hero Background Effect"
                width={80}
                height={80}
              />
              <Image
                src={IMAGES.AVATAR_2}
                className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full border-white border-3 md:border-4 xl:border-5 -ml-3 md:-ml-4 xl:-ml-5"
                alt="Hero Background Effect"
                width={80}
                height={80}
              />
              <Image
                src={IMAGES.AVATAR_3}
                className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full border-white border-3 md:border-4 xl:border-5 -ml-3 md:-ml-4 xl:-ml-5"
                alt="Hero Background Effect"
                width={80}
                height={80}
              />
              <Image
                src={IMAGES.AVATAR}
                className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full border-white border-3 md:border-4 xl:border-5 -ml-3 md:-ml-4 xl:-ml-5"
                alt="Hero Background Effect"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col gap-[30px]">
              <Text
                variant="hero"
                className="font-medium text-[28px]! sm:text-[34px]! md:text-[40px]! text-black"
              >
                98%
              </Text>
              <Text
                variant="body"
                className="font-medium text-start text-black"
              >
                Of customers recommend <br /> our services
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
