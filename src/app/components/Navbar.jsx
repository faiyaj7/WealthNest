"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import WealthNest from "../asset/main_logo1.png";
import Link from "next/link";
import Menu from "./Menu";
import { AnimatePresence, motion } from "motion/react";
import { useButtonVisible, useChangeNavbarBackground } from "../store/store";
import { usePathname } from "next/navigation";
import MenuPopOver from "./MenuPopOver";

const Navbar = () => {
  // usePathName() to make the navbar fixed on homepage and static on other pages
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const isLogoDisabled = useButtonVisible((state) => state.isLogoDisabled);

  const navbarBackgroundColor = useChangeNavbarBackground(
    (state) => state.navbarBackgroundColor
  );

  return (
    <motion.div
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }} // Transparent
      animate={{
        backgroundColor:
          !navbarBackgroundColor && isHomeRoute
            ? "rgba(0, 0, 0, 0.9)"
            : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`  flex items-center justify-evenly w-full  top-0 left-0 right-0 z-10 h-[100px] px-10 ${
        isHomeRoute ? "fixed" : "static"
      }`}
    >
      {/* Logo or Get Started Button */}

      <motion.div
        key={isLogoDisabled ? "button" : "logo"} // Ensures Framer Motion treats them as different elements
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isLogoDisabled ? (
          <motion.button
            className="bg-white text-customBlack px-8 py-4 rounded-full font-oswald text-nowrap"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        ) : (
          <Link href="/" className="w-1/2">
            <Image src={WealthNest} alt="Logo" className="w-full rounded-xl" />
          </Link>
        )}
      </motion.div>
      {/* Mobile Menu */}
      <div
        className="lg:hidden z-30"
        onClick={() => setIsMenuClicked(!isMenuClicked)}
      >
        <div className="flex flex-col gap-1 items-end justify-center w-full cursor-pointer">
          <span
            className={` ${
              isMenuClicked && "-translate-x-1 translate-y-1 rotate-45 w-6"
            } w-10 h-0.5 ${
              isLogoDisabled ? "bg-white" : "bg-black"
            } transition-all duration-300`}
          ></span>
          <span
            className={` ${
              isMenuClicked && "-translate-x-1 -translate-y-1 -rotate-45 w-6 "
            } w-6 h-0.5 ${
              isLogoDisabled ? "bg-white" : "bg-black"
            }  transition-all duration-300`}
          ></span>
          <span
            className={` ${isMenuClicked && "opacity-0"} w-4 h-0.5 ${
              isLogoDisabled ? "bg-white" : "bg-black"
            }  transition-all duration-300`}
          ></span>
        </div>
      </div>
      {/* Mobile Menu Table */}
      <AnimatePresence>
        {isMenuClicked && <Menu setIsMenuClicked={setIsMenuClicked} />}
      </AnimatePresence>

      {/* Desktop Menu */}
      <MenuPopOver />

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center justify-center gap-4">
        <Link
          href={"/login"}
          className="text-white w-full px-8 py-4 bg-customBlack rounded-xl text-sm text-nowrap font-pt"
        >
          Log in
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
