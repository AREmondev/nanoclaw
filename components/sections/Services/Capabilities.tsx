import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { IMAGES } from "@/lib/constants";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
import SingleCapability from "./SingleCapability";

const Capabilities = () => {
  return (
    <div className="container pb-30">
      <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="max-w-[1036px] flex flex-col w-full mx-auto">
            {" "}
            <Text variant={"section-lg"} className="text-right max-w-[500px]">
              Our
            </Text>
            <Text variant={"section-lg"} className=" flex items-center">
              Capabil <span className="text-gray">ities</span>
            </Text>
          </div>
          <Text variant={"body"} className="">
            From Strategy to Execution — We Don’t Just Design, We Build Products
            That Perform
          </Text>
        </div>
        <div className="grid grid-cols-1 gap-[50px] divide-y divide-[#DFDFDF]">
          <SingleCapability />
          <SingleCapability />
          <SingleCapability />
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
