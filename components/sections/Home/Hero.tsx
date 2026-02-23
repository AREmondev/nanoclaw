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
      <div className="relative">
        <Image
          src={IMAGES.HERO_BG_EFFECT}
          alt="Hero Background Effect"
          width={540}
          height={760}
          className="absolute top-[35px] right-0 xl:right-[229px] z-[-1] hidden lg:block w-[200px] xl:w-[540px]"
        />
        <div className="grid mt-[60px] md:mt-[84px] grid-cols-1 lg:grid-cols-2 xl:grid-cols-[620px_1fr] py-[40px] sm:py-[60px] md:py-[80px] xl:py-[150px] gap-15 lg:gap-[28px]">
          <div className="flex flex-col gap-0">
            <Text variant={"hero"}>Creative</Text>
            <div className="flex items-center flex-wrap sm:flex-nowrap">
              <Text variant={"hero"} className="text-gray">
                Design
              </Text>
              <Image
                src={IMAGES.LOGO_ICON}
                alt="Hero Design"
                width={100}
                height={100}
                className="w-[40px] sm:w-[50px] md:w-[70px] xl:w-[100px] h-auto ml-2 sm:ml-3 md:ml-[28px] mt-2 sm:mt-0"
              />
            </div>
            <Text variant={"hero"}>Agency</Text>
          </div>
          <div className="flex flex-col gap-5 lg:gap-8 justify-between lg:pt-4">
            <Text variant={"body"} className="lg:ml-[63px] max-w-[500px]">
              We design & build digital experiences that transform businesses,
              from intuitive UI/UX to seamless websites & powerful software
              solutions.
            </Text>
            <div className="flex flex-wrap lg:flex-nowrap items-end gap-3 lg:gap-2.5">
              <div className="flex order-2 lg:order-1 flex-auto items-start lg:items-center flex-wrap lg:justify-end gap-2">
                <Chip variant="outline" className="text-xs sm:text-sm">
                  UI/UX DESIGN
                </Chip>
                <Chip variant="filled" className="text-xs sm:text-sm">
                  web development
                </Chip>
                <Chip
                  className="text-nowrap text-xs sm:text-sm"
                  variant="outline"
                >
                  software development
                </Chip>
              </div>
              <div className="relative order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end mt-4 lg:mt-0">
                {/* <div className="absolute top-[-15px] sm:top-[-20px] md:top-[-30px] right-[20%] sm:right-[30%] lg:right-0 lg:static lg:ml-4">
                  <div className="relative">
                    <Image
                      src={IMAGES.CIRCLE_BUTTON}
                      alt="Circle Button"
                      width={140}
                      height={140}
                      className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] xl:w-[140px] xl:h-[140px]"
                    />
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <Icon
                        icon={faArrowRight}
                        className="text-[12px] sm:text-[14px] md:text-[18px] text-white"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="absolute 2xl:top-[-100px] top-[-30px] right-0 2xl:right-[30px]">
                  <div className="relative">
                    <Image
                      src={IMAGES.CIRCLE_BUTTON}
                      alt="Circle Button"
                      width={140}
                      height={140}
                      className="w-[100px] h-[100px] xl:w-[140px] xl:h-[140px]"
                    />
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <Icon
                        icon={faArrowRight}
                        className="text-[18px] text-white"
                      />
                    </div>
                  </div>
                </div>
                <Image
                  src={IMAGES.HERO}
                  alt="Hero Design"
                  width={450}
                  height={300}
                  className="h-auto w-full lg:max-w-[450px] mt-8 lg:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
