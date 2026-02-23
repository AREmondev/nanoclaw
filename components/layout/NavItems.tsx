"use client";

import { useState } from "react";
import { NAV_LINKS, MEGA_MENU_SERVICES } from "@/lib/constants";
import Link from "next/link";
import { Text, textVariants } from "../ui/Text";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import {
  faCode,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import MegaMenu from "./MegaMenu";

const iconMap: Record<string, IconDefinition> = {
  code: faCode,
  mobile: faCode,
  palette: faCode,
  shopping: faCode,
  cloud: faCode,
  chart: faCode,
};

const NavItems = () => {
  const pathname = usePathname();
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  return (
    <>
      <ul className="flex items-center justify-center gap-[30px] xl:gap-[50px]">
        {NAV_LINKS.map((item, index) => (
          <li key={index}>
            {item.type === "mega" ? (
              <Link
                href={item.href}
                onMouseEnter={() => setIsMegaOpen(true)}
                onFocus={() => setIsMegaOpen(true)}
                className={cn(
                  textVariants({ variant: "nav" }),
                  pathname === item.href && "text-red",
                  "flex items-center gap-2.5 ",
                )}
              >
                <span>{item.label}</span>
                <Icon
                  icon={faChevronDown}
                  className={cn(
                    "text-[14px] transition-transform duration-300",
                    isMegaOpen && "rotate-180",
                  )}
                />
              </Link>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  textVariants({ variant: "nav" }),
                  pathname === item.href && "text-red",
                )}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <MegaMenu isOpen={isMegaOpen} onClose={() => setIsMegaOpen(false)} />
    </>
  );
};

export default NavItems;

export const MobileNavItems = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Services",
  );

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[70px] z-40 bg-[#0a0a0a] overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <ul className="space-y-2">
          {NAV_LINKS.map((item, index) => (
            <li key={index} className="m-0">
              {item.type === "mega" ? (
                <div>
                  <Link
                    onClick={() => toggleSection("Services")}
                    href={item.href}
                    // onClick={onClose}
                    className={cn(
                      textVariants({
                        variant: "nav",
                      }),
                      "flex py-4 justify-between items-center text-xl font-medium border-b border-white/10",
                      pathname === item.href ? "text-red" : "text-white",
                    )}
                  >
                    <span>{item.label}</span>
                    <Icon
                      icon={faChevronDown}
                      className={cn(
                        "text-[14px] transition-transform duration-300",
                        expandedSection === "Services" && "rotate-180",
                      )}
                    />
                  </Link>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedSection === "Services"
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="py-4 space-y-3">
                      {MEGA_MENU_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          onClick={onClose}
                          className="group flex items-start gap-5 p-5 rounded-2xl border border-white/10 hover:border-red/50 hover:bg-white/5 transition-all hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0px_8px_24px_rgba(0,0,0,0.35)]"
                        >
                          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                            <Icon
                              icon={iconMap[service.icon] || faCode}
                              className="text-white text-xl"
                            />
                          </div>
                          <div className="flex-1 flex flex-col gap-5">
                            {/* <h4 className="text-white font-medium">
                              {service.title}
                            </h4>
                            <p className="text-white/60 text-sm">
                              {service.description}
                            </p> */}
                            <Text variant={"body"} className="text-white">
                              {service.title}
                            </Text>
                            <Text variant={"body-sm"} className="text-white/60">
                              {service.description}
                            </Text>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    textVariants({
                      variant: "nav",
                    }),
                    "block py-4 text-xl font-medium border-b border-white/10",
                    pathname === item.href ? "text-red" : "text-white",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* <div className="mt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-3 w-full py-4 bg-red text-white font-semibold rounded-xl"
          >
            Start a Project
            <Icon icon={faArrowRight} className="text-sm" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export const Hamburger = ({
  onClick,
  isOpen,
}: {
  onClick?: () => void;
  isOpen?: boolean;
}) => {
  return (
    <div
      className="flex flex-col justify-center gap-[5px] cursor-pointer w-[50px] "
      onClick={onClick}
    >
      <div
        className={cn(
          "w-full h-[2px] bg-black transition-all duration-300",
          isOpen && "rotate-45 translate-y-[7px]",
        )}
      />
      <div
        className={cn(
          "w-full h-[2px] bg-black transition-all duration-300",
          isOpen && "opacity-0",
        )}
      />
      {/* <div
        className={cn(
          "w-full h-[2px] bg-black transition-all duration-300",
          isOpen && "-rotate-45 -translate-y-[7px]",
        )}
      /> */}
    </div>
  );
};
