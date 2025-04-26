"use client";
import React, { useEffect, useRef, useState } from "react";
import { useButtonVisible, useChangeNavbarBackground } from "../store/store";
import { motion, useInView } from "motion/react";
import Link from "next/link";
const HeroBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const toggleLogo = useButtonVisible((state) => state.toggleLogo);
  const toogleNavbarBackground = useChangeNavbarBackground(
    (state) => state.toogleNavbarBackground
  );
  const [canRenderVideo, setCanRenderVideo] = useState(false);
  const containerRef = useRef(null);
  const containerIsInView = useInView(ref, { amount: 1 });
  // For the video
  useEffect(() => {
    setCanRenderVideo(true); // Ensures video only loads on client-side
  }, []);

  // Toggling between Logo and Button
  useEffect(() => {
    // console.log(isInView);
    toggleLogo();
  }, [isInView]);

  // navbar background toggling
  useEffect(() => {
    console.log("navbar background toogle", containerIsInView);
    toogleNavbarBackground(containerIsInView);
  }, [containerIsInView]);

  return (
    <main
      className="flex items-center justify-center relative"
      ref={containerRef}
    >
      {/* Video */}
      {canRenderVideo ? (
        <div className="w-full h-[500px] lg:h-screen overflow-hidden">
          {" "}
          <video
            width="100%"
            autoPlay
            loop
            muted
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            suppressHydrationWarning // 👈 Ignores hydration mismatch warning
            className="w-full h-full object-cover"
          >
            <source src="/video/herobanner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}

      {/* Information */}
      <div className="absolute left-0 top-[50%] -translate-y-[50%] w-full flex items-start justify-center flex-col gap-2 lg:gap-6 pl-3 lg:pl-10">
        <h5 className="font-besley text-sm ">THE BIG WINTER BUNDLE</h5>
        <h1 className="font-oswald text-xl lg:text-6xl text-customBlack w-[45%]">
          Last chance: 2% match on RRSP transfers
        </h1>
        <p className="font-sans text-xs lg:text-xl w-1/2 lg:w-[40%] ">
          Get a 2% match when you transfer an RRSP. Any other account transfers
          get a 1% match, too. Min $15K.
        </p>
        <div
          className="flex items-center justify-center flex-col lg:flex-row gap-3"
          ref={ref}
        >
          <Link
            href={"/signup"}
            className="bg-customBlack text-white px-6 py-4 rounded-full text-xs lg:text-base font-pt visible lg:hidden"
          >
            Get Started
          </Link>
          <button className="bg-white text-black px-6 py-4 rounded-full text-xs lg:text-base border border-black font-pt visible lg:hidden">
            Learn More
          </button>
          <Link
            href={"/signup"}
            className="bg-customBlack text-white px-6 py-4 rounded-full text-xs lg:text-base font-pt hidden lg:inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
