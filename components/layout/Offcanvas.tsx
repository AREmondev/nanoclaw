"use client";

import { useState } from "react";
import { MobileNavItems, Hamburger } from "./NavItems";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { IMAGES } from "@/lib/constants";

const OffcanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden cursor-pointer "
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Hamburger isOpen={isOpen} />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={closeMenu}
      />

      {/* Mobile Navigation */}
      <MobileNavItems isOpen={isOpen} onClose={closeMenu} />

      {/* Mobile Header (visible when menu is open) */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10 px-4 py-4 flex items-center justify-between md:hidden">
          <Link href="/" onClick={closeMenu}>
            <img src={IMAGES.LOGO} alt="Nanoclaw" className="h-8 w-auto" />
          </Link>
          <button
            onClick={closeMenu}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default OffcanvasMenu;
