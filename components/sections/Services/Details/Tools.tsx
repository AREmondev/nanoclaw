import Image from "next/image";
import React from "react";
import Figma from "@/public/figma.svg";
import XD from "@/public/xd.svg";
import Sketch from "@/public/sketch.svg";
import { Text } from "@/components/ui/Text";

const Tools = () => {
  return (
    <div className="max-w-[1800px] mx-auto rounded-[20px] sm:rounded-[30px] xl:rounded-[50px] bg-[#151515] py-[60px] md:py-[80px] xl:py-[120px]">
      <div className="container ">
        <div className="flex flex-col gap-30">
          <h3 className="text-white text-[36px] sm:text-[50px] md:text-[72px] xl:text-[100px] font-poppins font-medium leading-none">
            Tools We Use <br /> to{" "}
            <span className="text-gray">Bring Ideas to Life</span>
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4 xl:gap-[30px]">
            <div className="h-[200px] md:h-[260px] xl:h-[320px] lg:mt-[100px] items-center border-white/10 border rounded-full w-full flex flex-col justify-between py-6 md:py-10 xl:py-15">
              <Figma />
              <Text variant="card" className="text-[#898989]">
                Figma
              </Text>
            </div>

            <div className="h-[200px] md:h-[260px] xl:h-[320px] lg:mt-[20px] items-center border-white/10 border rounded-full w-full flex flex-col justify-between py-6 md:py-10 xl:py-15">
              <Sketch />
              <Text variant="card" className="text-[#898989]">
                Sketch
              </Text>
            </div>

            <div className="h-[200px] md:h-[260px] xl:h-[320px] lg:mt-[70px] items-center border-white/10 border rounded-full w-full flex flex-col justify-between py-6 md:py-10 xl:py-15">
              <XD />
              <Text variant="card" className="text-[#898989]">
                XD
              </Text>
            </div>

            <div className="h-[200px] md:h-[260px] xl:h-[320px] items-center border-white/10 border rounded-full w-full flex flex-col justify-between py-6 md:py-10 xl:py-15">
              <XD />
              <Text variant="card" className="text-[#898989]">
                XD
              </Text>
            </div>

            <div className="h-[200px] md:h-[260px] xl:h-[320px] lg:mt-[60px] items-center border-white/10 border rounded-full w-full flex flex-col justify-between py-6 md:py-10 xl:py-15">
              <XD />
              <Text variant="card" className="text-[#898989]">
                XD
              </Text>
            </div>

            <div className="h-[200px] md:h-[260px] xl:h-[320px] lg:mt-[30px] items-center border-white/10 border rounded-full w-full flex flex-col justify-between py-6 md:py-10 xl:py-15">
              <XD />
              <Text variant="card" className="text-[#898989]">
                XD
              </Text>
            </div>

            <div className="h-[200px] md:h-[260px] xl:h-[320px] lg:mt-[80px] items-center border-white/10 border rounded-full w-full flex flex-col justify-between py-6 md:py-10 xl:py-15">
              <XD />
              <Text variant="card" className="text-[#898989]">
                XD
              </Text>
            </div>
          </div>

          <Text variant={"body"} className="text-white text-center">
            {" "}
            We leverage cutting-edge tools to collaborate efficiently and
            deliver pixel-perfect design.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Tools;
