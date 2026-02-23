import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Bold = () => {
  return (
    <div className="pt-[60px] md:pt-[100px] xl:pt-[164px] pb-[120px] md:pb-[250px] xl:pb-[406px]">
      <div className="container">
        <div className="flex relative flex-col gap-10">
          <div className="absolute  z-10 top-0 left-1/2 transform -translate-x-1/2 ">
            <Image
              src={IMAGES.LOGO_MD}
              className="w-[200px] sm:w-[280px] md:w-[340px] xl:w-[400px] h-auto z-10"
              alt="Hero Background Effect"
              width={400}
              height={570}
            />
          </div>
          <Image width={120} height={170} src={IMAGES.LOGO_BLACK} alt="logo" className="w-[60px] md:w-[80px] xl:w-[120px] h-auto" />

          <Text variant={"section"}>
            From bold <span className="font-bold">brand identities</span> to
            <span className="font-bold"> seamless digital experiences </span>—
            we design what brands grow with.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Bold;
