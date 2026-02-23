"use client";

import { useState, useRef, useEffect } from "react";
import { MEGA_MENU_SERVICES } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import {
  faCode,
  faMobile,
  faPalette,
  faShoppingCart,
  faCloud,
  faChartLine,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  code: faCode,
  mobile: faMobile,
  palette: faPalette,
  shopping: faShoppingCart,
  cloud: faCloud,
  chart: faChartLine,
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const previewsById: Record<
    number,
    { image: string; title: string; subtitle: string; href: string }
  > = {
    1: {
      image: IMAGES.DESIGNPORTFOLIO,
      title: "Modern Web Platform",
      subtitle: "Performance-focused, scalable architecture",
      href: "/works",
    },
    2: {
      image: IMAGES.DESIGNPORTFOLIO_2,
      title: "Mobile App Redesign",
      subtitle: "Intuitive flows, native feel",
      href: "/works",
    },
    3: {
      image: IMAGES.DESIGNPORTFOLIO_3,
      title: "Experience Design System",
      subtitle: "Consistent UI across products",
      href: "/works",
    },
    4: {
      image: IMAGES.DESIGNPORTFOLIO_4,
      title: "E‑Commerce Growth",
      subtitle: "Checkout optimized for conversion",
      href: "/works",
    },
    5: {
      image: IMAGES.DESIGNPORTFOLIO_2,
      title: "Cloud Migration",
      subtitle: "Reliable, scalable infrastructure",
      href: "/works",
    },
    6: {
      image: IMAGES.DESIGNPORTFOLIO_3,
      title: "Campaign Analytics",
      subtitle: "Data-driven marketing ops",
      href: "/works",
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mainMenuRef.current &&
        !mainMenuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[90px]  h-auto z-50 animate-fadeIn">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        ref={mainMenuRef}
        className="relative main-menu w-[80%] rounded-2xl mx-auto z-50 bg-[#0a0a0a] border-t border-white/10 shadow-2xl animate-slideDown"
      >
        <div className="container mx-auto px-5 py-12">
          <div className="flex items-center justify-between mb-6">
            <Text variant="card-lg" className="text-white">
              Our Services
            </Text>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MEGA_MENU_SERVICES.map((service, index) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className={cn(
                      "group flex items-start gap-5 p-6 rounded-2xl border border-white/10 hover:border-red/50 hover:bg-white/5 transition-all duration-300",
                      "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0px_8px_24px_rgba(0,0,0,0.35)]",
                      activeIndex === index && "border-red/60 bg-white/5",
                      "animate-fadeInUp",
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-red/20 transition-colors">
                      <Icon
                        icon={iconMap[service.icon] || faCode}
                        className="text-white group-hover:text-red text-xl"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                      <Text variant={"card"} className="text-white">
                        {service.title}
                      </Text>
                      <Text
                        variant={"body-sm"}
                        className="text-white/60 line-clamp-2"
                      >
                        {service.description}
                      </Text>
                    </div>
                    <div className="hidden lg:flex items-center gap-2 text-red opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Learn more</span>
                      <Icon icon={faArrowRight} className="text-red text-sm" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={
                      previewsById[MEGA_MENU_SERVICES[activeIndex]?.id]
                        ?.image || IMAGES.DESIGNPORTFOLIO
                    }
                    alt="Featured Project"
                    width={480}
                    height={280}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2.5">
                    <Text variant={"body"} className="text-gray">
                      Featured Work
                    </Text>
                    <Text variant="card" className="text-white">
                      {previewsById[MEGA_MENU_SERVICES[activeIndex]?.id]
                        ?.title || "Featured Project"}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <Text
                      variant={"body-sm"}
                      className="text-gray line-clamp-1"
                    >
                      {
                        previewsById[MEGA_MENU_SERVICES[activeIndex]?.id]
                          ?.subtitle
                      }
                    </Text>
                  </div>
                  <Link
                    href={
                      previewsById[MEGA_MENU_SERVICES[activeIndex]?.id]?.href ||
                      "/works"
                    }
                    className="inline-flex whitespace-nowrap no-wrap items-center gap-2 text-red text-sm font-medium hover:gap-3 transition-all"
                  >
                    View Project
                    <Icon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
