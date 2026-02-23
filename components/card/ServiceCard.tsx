import React from "react";
import ServiceIcon from "@/public/serviceIcon.svg";
import { Text } from "../ui/Text";
import { LinkButton } from "../ui/LinkButton";
import { ServiceData } from "@/lib/constants";

interface ServiceCardProps {
  data: ServiceData;
}

const ServiceCard = ({ data }: ServiceCardProps) => {
  return (
    <div className="flex group flex-col gap-8 md:gap-12 xl:gap-15 border-white/20 border p-6 md:p-[30px] xl:p-[50px] rounded-[20px] md:rounded-[30px] xl:rounded-[40px]">
      <div className="relative">
        <span className="group-hover:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="44"
            fill="none"
            //   currentColor="red"
            // className=" group-hover:block hidden"
          >
            <path
              fill="red"
              d="M34.375 0c2.54 0 4.688 2.148 4.688 4.688v.39h11.523c.977-2.05 3.125-3.516 5.664-3.516 3.418 0 6.25 2.833 6.25 6.25a6.23 6.23 0 0 1-6.25 6.25c-2.54 0-4.687-1.367-5.664-3.515h-6.543c5.762 3.906 9.668 10.254 10.156 17.578h.489c2.539 0 4.687 2.148 4.687 4.688v6.25c0 2.636-2.148 4.687-4.687 4.687h-6.25c-2.637 0-4.688-2.05-4.688-4.687v-6.25c0-2.54 2.05-4.688 4.688-4.688h.292c-.585-6.543-4.785-12.012-10.546-14.55-.782 1.269-2.246 2.05-3.809 2.05h-6.25c-1.66 0-3.125-.781-3.906-2.05-5.762 2.538-9.961 8.007-10.547 14.55h.39c2.54 0 4.688 2.148 4.688 4.688v6.25c0 2.636-2.148 4.687-4.687 4.687h-6.25c-2.637 0-4.688-2.05-4.688-4.687v-6.25c0-2.54 2.05-4.688 4.688-4.688h.39c.488-7.324 4.395-13.672 10.156-17.578h-6.543c-.976 2.148-3.125 3.515-5.566 3.515-3.516 0-6.25-2.734-6.25-6.25a6.23 6.23 0 0 1 6.25-6.25c2.441 0 4.59 1.465 5.566 3.516h11.622v-.39c0-2.54 2.05-4.688 4.687-4.688zm-5.469 10.156h4.688V5.47h-4.688zM8.594 33.594v4.687h4.687v-4.687zm45.312 4.687v-4.687H49.22v4.687z"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="44"
            fill="none"
            //   currentColor="red"
            className=" group-hover:hidden block"
          >
            <path
              fill="white"
              d="M34.375 0c2.54 0 4.688 2.148 4.688 4.688v.39h11.523c.977-2.05 3.125-3.516 5.664-3.516 3.418 0 6.25 2.833 6.25 6.25a6.23 6.23 0 0 1-6.25 6.25c-2.54 0-4.687-1.367-5.664-3.515h-6.543c5.762 3.906 9.668 10.254 10.156 17.578h.489c2.539 0 4.687 2.148 4.687 4.688v6.25c0 2.636-2.148 4.687-4.687 4.687h-6.25c-2.637 0-4.688-2.05-4.688-4.687v-6.25c0-2.54 2.05-4.688 4.688-4.688h.292c-.585-6.543-4.785-12.012-10.546-14.55-.782 1.269-2.246 2.05-3.809 2.05h-6.25c-1.66 0-3.125-.781-3.906-2.05-5.762 2.538-9.961 8.007-10.547 14.55h.39c2.54 0 4.688 2.148 4.688 4.688v6.25c0 2.636-2.148 4.687-4.687 4.687h-6.25c-2.637 0-4.688-2.05-4.688-4.687v-6.25c0-2.54 2.05-4.688 4.688-4.688h.39c.488-7.324 4.395-13.672 10.156-17.578h-6.543c-.976 2.148-3.125 3.515-5.566 3.515-3.516 0-6.25-2.734-6.25-6.25a6.23 6.23 0 0 1 6.25-6.25c2.441 0 4.59 1.465 5.566 3.516h11.622v-.39c0-2.54 2.05-4.688 4.687-4.688zm-5.469 10.156h4.688V5.47h-4.688zM8.594 33.594v4.687h4.687v-4.687zm45.312 4.687v-4.687H49.22v4.687z"
            ></path>
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-10">
        <Text variant="card-lg" className="text-white group-hover:text-red">
          {data.title}
        </Text>
        <Text variant="body" className="text-[#898989] group-hover:text-white">
          {data.description}
        </Text>
      </div>
      <div className="flex justify-end">
        <LinkButton variant="white">View Details</LinkButton>
      </div>
    </div>
  );
};

export default ServiceCard;
