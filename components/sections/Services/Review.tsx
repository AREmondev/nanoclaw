"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { IMAGES, TESTIMONIALS, BRAND_LOGOS } from "@/lib/constants";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
// BRAND_LOGO_WHITE: "/brand_logo_white.svg",

// BRAND_LOGO_WHITE_1: "/brand_logo_white_1.svg",
// BRAND_LOGO_WHITE_3: "/brand_logo_white_3.svg",
// BRAND_LOGO_WHITE_4: "/brand_logo_white_4.svg",

import BRAND_LOGO_WHITE from "@/public/brand_logo_white.svg";
import BRAND_LOGO_WHITE_1 from "@/public/brand_logo_white_1.svg";
import BRAND_LOGO_WHITE_3 from "@/public/brand_logo_white_3.svg";
import BRAND_LOGO_WHITE_4 from "@/public/brand_logo_white_4.svg";

const Review = () => {
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
    <div className="max-w-[1800px] mx-auto rounded-[20px] sm:rounded-[30px] xl:rounded-[50px] bg-[#151515] py-[60px] md:py-[80px] xl:py-[120px] px-4 sm:px-6 md:px-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-30">
          <div className="grid justify-between grid-cols-1 lg:grid-cols-[850px_auto]">
            <div className="flex flex-col gap-15">
              <h5 className="text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-normal text-white">
                "{currentTestimonial.quote}"
              </h5>
              <div className="h-px w-full bg-white/20"></div>
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
                    <Text variant={"card"} className="text-white">
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
                    className="border-black cursor-pointer hover:bg-black border flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] xl:w-[60px] xl:h-[60px] rounded-full transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <Icon
                      icon={faArrowLeft}
                      className="text-white text-[24px]"
                    />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="border-black cursor-pointer hover:bg-black bg-black border flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] xl:w-[60px] xl:h-[60px] rounded-full transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <Icon
                      icon={faArrowRight}
                      className="text-white text-[24px]"
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            <div className="border min-h-[100px] md:min-h-[140px] xl:min-h-[180px] border-border/10 rounded-[20px] md:rounded-[30px] xl:rounded-[40px] flex items-center justify-center">
              <BRAND_LOGO_WHITE />
            </div>
            <div className="border min-h-[100px] md:min-h-[140px] xl:min-h-[180px] px-5 md:px-[30px] xl:px-[45px] border-none rounded-[20px] md:rounded-[30px] xl:rounded-[40px] flex items-center justify-center">
              <h6 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-white">
                Trusted by Forward-Thinking Brands
              </h6>
            </div>
            <div className="border min-h-[100px] md:min-h-[140px] xl:min-h-[180px] border-border/10 rounded-[20px] md:rounded-[30px] xl:rounded-[40px] flex items-center justify-center">
              <BRAND_LOGO_WHITE_1 />
            </div>
            <div className="border min-h-[100px] md:min-h-[140px] xl:min-h-[180px] border-border/10 rounded-[20px] md:rounded-[30px] xl:rounded-[40px] flex items-center justify-center">
              <BRAND_LOGO_WHITE_3 />
            </div>
            <div className="border min-h-[100px] md:min-h-[140px] xl:min-h-[180px] border-border/10 rounded-[20px] md:rounded-[30px] xl:rounded-[40px] flex items-center justify-center">
              <BRAND_LOGO_WHITE_4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
