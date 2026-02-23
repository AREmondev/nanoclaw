"use client";
import { IMAGES, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Text, textVariants } from "../ui/Text";

import { Icon } from "../ui/Icon";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import NavItems, { Hamburger } from "./NavItems";
import OffcanvasMenu from "./Offcanvas";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "pt-6 z-40 sticky bg-body top-0 left-0 w-full",
        isScrolled ? "pb-6" : "",
      )}
    >
      <div className="container ">
        <nav className="flex items-center justify-between ">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-4 md:gap-[30px]"
          >
            <Image
              src={IMAGES.LOGO}
              alt="Nanoclaw"
              width={270}
              height={60}
              className="w-[160px] sm:w-[200px] md:w-[270px] h-auto"
            />
          </Link>
          <div className="hidden md:block">
            {" "}
            <NavItems />
          </div>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-[30px]">
            <div className="hidden lg:flex items-center gap-4 md:gap-6 pl-6 md:pl-10 pr-2.5 bg-black rounded-[50px] h-[50px] md:h-[60px]">
              <Text variant="body-sm" className="text-white">
                Let's Talk
              </Text>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white">
                <Icon
                  icon={faArrowRight}
                  className=" text-black text-[16px] "
                />
              </div>
            </div>
            <div className="xl:block hidden">
              <Hamburger isOpen={false} />
            </div>
            {/* <Hamburger /> */}
            <OffcanvasMenu />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
