"use client";

import { useRef } from "react";
import ServiceCard from "@/components/card/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chips";
import { Text } from "@/components/ui/Text";
import { SERVICE_CATEGORIES, SERVICES_DATA } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = 180;
      setActiveIndex(Math.round(scrollLeft / itemWidth));
    }
  };

  return (
    <div className="max-w-[1800px] mx-auto rounded-[20px] sm:rounded-[30px] xl:rounded-[50px] bg-[#151515] py-[40px] md:py-[80px] xl:py-[120px] px-4 sm:px-6 md:px-10">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-20">
          {/* <div className="flex items-center sm:items-normal xl:ml-0 flex-col gap-5 sm:gap-[30px] text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <Chip variant={"filled"}>what we do</Chip>
            </div>
            <Text variant="section" className="text-white">
              Services Overview
            </Text>
          </div> */}
          <div className="flex items-center w-full max-w-[800px] md:items-start mx-auto flex-col gap-[30px]">
            <div className="flex flex-col sm:flex-row md:ml-[-50px] items-center gap-[30px] md:gap-2.5">
              <Chip variant={"filled"}>what we do</Chip>
              <Text variant="section" className=" text-white">
                Services
              </Text>
            </div>{" "}
            <Text variant="section" className="text-white ">
              Overview
            </Text>
          </div>
          <div className="flex justify-center items-center flex-col gap-10">
            <Text variant="body" className="text-white text-center ">
              Comprehensive Services Tailored for Your Digital Success
            </Text>
            <Button variant={"white"}>Explore our services</Button>
          </div>

          <div className="w-full lg:max-w-[1018px] mx-auto overflow-hidden">
            <div className="" style={{ position: "relative" }}>
              {/* Your Content */}
              <div className="flex items-center justify-center gap-1  h-[32px] overflow-hidden">
                <Chip variant={"outline"} className="text-white">
                  Web Development
                </Chip>
                <Chip variant={"outline"} className="text-white">
                  Web Development
                </Chip>
                <Chip variant={"outline"} className="text-white">
                  Web Development
                </Chip>
                <Chip variant={"outline"} className="text-white">
                  Web Development
                </Chip>
                <Chip variant={"outline"} className="text-white">
                  Web Development
                </Chip>
              </div>

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, #151515 0%, rgba(21,21,21,0.4) 30%, rgba(21,21,21,0.4) 60%, #151515 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[25px] xl:gap-[45px]">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
