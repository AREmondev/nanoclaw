import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="w-full py-[20px] md:py-[50px] overflow-x-hidden">
      <div className="relative  py-[25px] md:py-[40px] xl:py-[60px]">
        <div className="absolute  -z-10 top-0 left-0 w-full">
          <Marquee className="overflow-hidden! gap-[50px] -z-10 flex items-center">
            <Text
              variant="highlight"
              className={cn("text-highlight letter-spacing-[6px] ")}
              style={{
                wordSpacing: "50px",
              }}
            >
              UI CREATIVE UI SMART CODE MODE WEB
            </Text>
          </Marquee>
        </div>
        <div className="absolute z-10 top-[16px] md:top-[24px] xl:top-[34px] left-0 w-full">
          <Marquee className="overflow-hidden! gap-[50px] flex items-center">
            <Text
              variant="highlight"
              className="outline-text"
              style={{
                wordSpacing: "50px",
              }}
            >
              CREATIVE UI SMART CODE MODE WEB
            </Text>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Slider;
