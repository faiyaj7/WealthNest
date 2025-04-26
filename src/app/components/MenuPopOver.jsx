"use client";

import React, { Fragment, useEffect, useState } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { desktopMenu } from "../constants/page";
import Link from "next/link";

const MenuPopOver = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Handle body scroll when a popover is opened or closed
  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openIndex]);

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex justify-center items-center gap-8">
        {desktopMenu.map((item, index) => (
          <Popover key={index} className="relative">
            {({ open }) => {
              useEffect(() => {
                if (open) {
                  setOpenIndex(index);
                } else if (openIndex === index) {
                  setOpenIndex(null);
                }
              }, [open]);

              return (
                <>
                  <PopoverButton className="block text-sm font-semibold text-customBlack/80 focus:outline-none data-[active]:text-white data-[hover]:text-customBlack data-[focus]:outline-1 data-[focus]:outline-white">
                    {item.name}
                  </PopoverButton>

                  <Transition
                    as={Fragment}
                    show={open}
                    enter="transition ease-in-out duration-400"
                    enterFrom="opacity-0 -translate-y-8"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-8"
                  >
                    <PopoverPanel
                      static
                      anchor="bottom"
                      className="border-t border-t-customBlack mt-4 z-10 bg-[#7393B3] text-sm fixed w-full py-20 px-28 shadow-lg"
                    >
                      <Transition
                        as={Fragment}
                        show={open}
                        appear
                        enter="transition-opacity ease-out duration-500 delay-150"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="grid grid-cols-3 w-full place-items-start gap-10">
                          {item.offers?.map((offer) => (
                            <div key={offer.id} className="w-full">
                              <h1 className="text-sm font-pt">{offer.title}</h1>
                              <hr className="my-5" />
                              <div className="flex items-start justify-center flex-col gap-4">
                                {offer.categories.map((category, i) => (
                                  <Link href="/" key={i} className="text-xl font-besley text-customBlack/85 hover:text-black">
                                    {category}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Transition>
                    </PopoverPanel>
                  </Transition>
                </>
              );
            }}
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default MenuPopOver;
