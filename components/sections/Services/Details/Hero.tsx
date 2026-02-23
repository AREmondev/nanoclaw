import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chips";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/LinkButton";
import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="py-20 md:py-30 xl:py-40">
        <div className="flex flex-col gap-10">
          <div className="max-w-[892px] ">
            <Text
              variant={"section"}
              className="text-[36px]! sm:text-[50px]! md:text-[72px]! xl:text-[100px]!"
            >
              UI
              <span className="text-[28px] sm:text-[38px] md:text-[54px] xl:text-[74px]">
                /
              </span>
              UX Design That{" "}
              <span className="text-gray">Inspires, Engages & Converts</span>
            </Text>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[auto_640px] place-items-center gap-10 lg:gap-5">
            <div className="max-w-[580px] mx-auto flex flex-col gap-15">
              <Text variant={"body"}>
                End-to-end UX design, web development, and custom software
                solutions built to empower your business.
              </Text>
              <div className="flex items-center justify-center gap-5 md:gap-10">
                <LinkButton variant="default">Book a Free UX Audit</LinkButton>
                <Button variant="default" className="">
                  See our works
                </Button>
              </div>
            </div>
            <div className="flex items-center w-full gap-3 md:gap-5">
              <Image
                className="rounded-[20px] flex-auto h-[400px] object-cover"
                objectFit=""
                objectPosition="center"
                src={IMAGES.PORTFOLIO}
                alt="hero"
                width={180}
                height={400}
              />
              <Image
                className="rounded-[20px]  flex-auto h-[400px] object-cover"
                objectFit=""
                objectPosition="center"
                src={IMAGES.PORTFOLIO_2}
                alt="hero"
                width={180}
                height={400}
              />
              <Image
                className="rounded-[20px] hidden md:flex flex-auto h-[400px] object-cover"
                objectFit=""
                objectPosition="center"
                src={IMAGES.PORTFOLIO_3}
                alt="hero"
                width={180}
                height={400}
              />
            </div>
            {/* <div className="flex items-center gap-3 md:gap-5">
              <Image
                className="rounded-[20px] min-h-[200px] md:min-h-[300px] xl:min-h-[400px] object-cover w-full"
                objectPosition="center"
                src={IMAGES.PORTFOLIO}
                alt="hero"
                width={200}
                height={400}
              />
              <Image
                className="rounded-[20px] min-h-[200px] md:min-h-[300px] xl:min-h-[400px] object-cover w-full"
                objectPosition="center"
                src={IMAGES.PORTFOLIO_2}
                alt="hero"
                width={200}
                height={400}
              />
              <Image
                className="rounded-[20px] min-h-[200px] md:min-h-[300px] xl:min-h-[400px] object-cover w-full"
                objectPosition="center"
                src={IMAGES.PORTFOLIO_3}
                alt="hero"
                width={200}
                height={400}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
