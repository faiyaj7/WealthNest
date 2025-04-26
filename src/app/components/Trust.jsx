import Image from "next/image";
import React from "react";
import trust from "@/app/asset/image1.png";
import { trustInformation } from "../constants/page";
const Trust = () => {
  return (
    <div className="bg-[#e1dcd0] px-4 lg:px-16 py-16">
     {/* Top Part */}
      <div className="flex items-stretch justify-around flex-col lg:flex-row gap-10 w-full">
        {/* Image */}
        <div className="order-last lg:order-first w-full">
          <Image
            src={trust}
            alt="trust"
            className="w-full rounded-2xl object-cover"
          />
        </div>
        {/* Information */}
        <div className="order-first lg:order-last flex items-start justify-center gap-4 flex-col w-full lg:w-[60%]">
          <h1 className="text-3xl lg:text-7xl font-oswald pb-4 ">
            Trusted by over 3 million Canadians
          </h1>
          <p className="font-pt text-justify lg:text-2xl">
            Our business model is simple: put our client&apos;s interests first.
            Sure, that means never charging commissions on trades and offering
            industry-leading interest on your chequing account, but it also
            means a lot more. Like total transparency into your investments and
            an innovative cost structure that ensures we only do well when you
            do.
          </p>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="my-8 lg:mt-16 flex items-stretch  justify-between flex-col lg:flex-row w-full gap-16">
        {trustInformation.map((item) => (
          <div className="w-full py-4 border-b lg:border-b-0 lg:border-t border-customBlack" key={item.id}>
            <h1 className="text-customBlack text-2xl lg:text-6xl">{item.title}</h1>
            <p className="font-pt lg:text-xl lg:mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;
