import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const logos = [
  null,
  IMAGES.DEXTRA,
  IMAGES.REUTERS,
  IMAGES.DUPONT,
  IMAGES.ZOOM,
  IMAGES.HEINEKEN,
  IMAGES.INDEED,
  IMAGES.RIVER,
  IMAGES.DELICUT,
  null,
];

const Brand = () => {
  return (
    <div className="container pb-15 md:pb-20 xl:pb-30">
      <div className="flex justify-center items-center flex-col gap-10 md:gap-15">
        <Text variant={"nav"} className="text-center">
          Trusted by Forward-Thinking Brands
        </Text>
        <div
          className={`grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 
          [&>*:first-child]:hidden  xl:[&>*:first-child]:block
           [&>*:last-child]:hidden  xl:[&>*:last-child]:block
             xl:[&>*:first-child]:border-l-0 xl:[&>*:nth-child(5)]:border-r-0 xl:[&>*:last-child]:border-r-0 xl:[&>*:last-child]:border-b-0 xl:[&>*:nth-child(-n+5)]:border-t-0 xl:[&>*:nth-child(n+6)]:border-b-0
   
        `}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center h-20 sm:h-24 md:h-28 border-b border-r border-l xl:border-l-px border-border p-4 border-t xl:border-t-0",
              )}
            >
              {logo && (
                <Image
                  width={100}
                  height={100}
                  src={logo}
                  alt={`logo-${index}`}
                  className="w-full max-w-[80px] sm:max-w-[100px] h-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
