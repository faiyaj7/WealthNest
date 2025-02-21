"use client";
import Image from "next/image";
import React, { useState } from "react";
import WealthNest from "../asset/main_logo1.png";
import Link from "next/link";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <div className="relative flex items-center justify-around w-full">
      {/* Logo */}
      <Link href="/" className="w-1/2">
        <Image src={WealthNest} alt="Logo" className="w-full rounded-xl" />
      </Link>
      {/* Mobile Menu */}
      <div className="lg:hidden z-30" onClick={() => setIsMenuClicked(!isMenuClicked)}>
        <div className="flex flex-col gap-1 items-end justify-center w-full cursor-pointer">
          <span
            className={` ${
              isMenuClicked && "-translate-x-1 translate-y-1 rotate-45 w-6"
            } w-10 h-0.5 bg-black transition-all duration-300`}
          ></span>
          <span
            className={` ${
              isMenuClicked && "-translate-x-1 -translate-y-1 -rotate-45 w-6 "
            } w-6 h-0.5 bg-black transition-all duration-300`}
          ></span>
          <span
            className={` ${
              isMenuClicked && "opacity-0"
            } w-4 h-0.5 bg-black transition-all duration-300`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu Table */}
      <AnimatePresence>{isMenuClicked && <Menu />}</AnimatePresence>

            
    </div>
  );
};

export default Navbar;
