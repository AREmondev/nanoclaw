"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/Chips";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { IMAGES, TESTIMONIALS } from "@/lib/constants";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="container pb-[100px] md:pb-[120px] xl:pb-[286px] pt-15 md:pt-20 xl:pt-30">
      <div className="grid justify-between grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[515px_auto] gap-10 md:gap-[40px] xl:gap-[75px]">
        <div className="flex flex-col items-start gap-15">
          <Chip variant={"filled"} className="">
            Testimonial
          </Chip>
          <h3 className="text-[36px]! sm:text-[50px]! md:text-[65px]! xl:text-[80px]! font-poppins leading-[100%] font-semibold">
            What People Say <span className="text-gray">About Us</span>
          </h3>
        </div>
        <div className="grid justify-between grid-cols-1 lg:grid-cols-[850px_auto]">
          <div className="flex flex-col gap-15">
            <h5 className="text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-poppins font-normal text-black">
              "{currentTestimonial.quote}"
            </h5>
            <div className="h-px w-full bg-border"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-10 justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src={currentTestimonial.avatar}
                  className="w-auto h-[80px] object-contain rounded-full"
                  alt={currentTestimonial.name}
                  width={80}
                  height={80}
                />
                <div className="flex flex-col gap-4">
                  <Text variant={"card"} className="text-black">
                    {currentTestimonial.name}
                  </Text>
                  <Text variant={"body"} className="text-[#898989]">
                    {currentTestimonial.role}
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="border-black group cursor-pointer hover:bg-black border flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] xl:w-[60px] xl:h-[60px] rounded-full transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <Icon
                    icon={faArrowLeft}
                    className="text-black text-[24px] group-hover:text-white"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="border-black group cursor-pointer hover:bg-black bg-black border flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] xl:w-[60px] xl:h-[60px] rounded-full transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <Icon
                    icon={faArrowRight}
                    className="text-white text-[24px] group-hover:text-white"
                  />
                </button>
              </div>
            </div>
          </div>
          <Image
            src={IMAGES.QUOTE_SIGN}
            className="w-auto h-[250px] object-contain hidden lg:block"
            alt="Quote"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
