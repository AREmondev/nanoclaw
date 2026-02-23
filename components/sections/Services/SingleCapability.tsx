"use client";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useState } from "react";

const SingleCapability = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-15 pb-6 md:pb-[30px] xl:pb-[50px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12 xl:gap-[100px]">
        <div className="flex  flex-col gap-8 md:gap-12 xl:gap-20 max-w-full lg:max-w-[500px]">
          <div className="flex flex-col gap-[30px]">
            <Text variant={"card"} className="text-red">
              01
            </Text>
            <h4 className="text-[28px] sm:text-[34px] md:text-[40px] xl:text-[44px] font-semibold">UI/UX Design</h4>
          </div>
          <Text variant={"body"}>
            Human-centered interfaces designed to increase engagement,
            retention, and conversion.
          </Text>
        </div>
        <div className="overflow-hidden w-full lg:flex-auto rounded-[20px] md:rounded-[30px] xl:rounded-[40px] hidden md:block">
          <Image
            src={IMAGES.CAPABILITY_1}
            alt=""
            width={400}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full lg:flex-auto gap-6 md:gap-10 items-start lg:items-end justify-between">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="h-15 w-15 group hover:bg-black rounded-full border border-border flex items-center justify-center cursor-pointer"
          >
            {/* <Icon icon={faPlus} className="group-hover:text-white" /> */}
            {/* <Icon icon={faMinus} /> */}
            {isOpen ? (
              <Icon icon={faMinus} className="group-hover:text-white" />
            ) : (
              <Icon icon={faPlus} className="group-hover:text-white" />
            )}
          </div>
          <div className="flex flex-col items-end gap-5">
            <Text variant={"body-sm"}>
              Wireframing & Interactive Prototyping
            </Text>
            <Text variant={"body-sm"} className="text-red">
              Data-Driven User Research
            </Text>
            <Text variant={"body-sm"}>Product & UX Redesign for Growth</Text>
          </div>
          <Button className="h-[50px]">Book a Professional UX Audit</Button>
        </div>
      </div>
      {isOpen && (
        <Text variant={"body"} className="max-w-[1020px]">
          We develop fast, secure, and scalable websites using modern frameworks
          and clean code. Every site is optimized for SEO, performance, and
          long-term growth from day one.
        </Text>
      )}
    </div>
  );
};

export default SingleCapability;
