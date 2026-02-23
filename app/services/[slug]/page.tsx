import Hero from "@/components/sections/Services/Details/Hero";
import Result from "@/components/sections/Services/Details/Result";
import Testimonial from "@/components/sections/Services/Details/Testimonial";
import Tools from "@/components/sections/Services/Details/Tools";
import WorkProcess from "@/components/sections/Services/Details/WorkProcess";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <WorkProcess />
      <Result />
      <Tools />
      <Testimonial />
    </>
  );
};

export default page;
