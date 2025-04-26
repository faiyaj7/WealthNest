import React from "react";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { pricing } from "../constants/page";
import Image from "next/image";
const Pricing = () => {
  return (
    <div className="bg-customBlack flex items-center justify-center flex-col lg:flex-row gap-2 py-16 px-5 lg:px-10">
      <div className="">
        {" "}
        <h1 className="text-white font-oswald text-4xl lg:text-6xl w-full lg:w-[85%]">
          Benefits that grow with you
        </h1>
        <p className="text-white font-pt text-sm lg:text-base lg:mt-4 lg:w-3/4">
          Bringing all your investments to Wealthsimple means better access to
          exclusive benefits and partner rewards.
        </p>
        <button className="bg-white text-customBlack font-oswald px-4 lg:px-8 py-4 rounded-full text-sm mt-8 mr-auto">
          See all Benefits
        </button>
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row gap-10 mt-5">
        {pricing.map((item) => (
          <div
            className={`relative ${item.color} rounded-xl h-[400px] w-full pt-10`}
            key={item.id}
          >
            <div className="absolute bottom-0 left-0 w-full">
              {/* Image Background */}
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Body Information */}
            <div className="px-4 rounded-xl flex items-start justify-start flex-col gap-4">
              <h1
                className={`${item.textColor} ${item.assetColor} w-fit p-2 rounded-2xl text-sm`}
              >
                {item.asset}
              </h1>

              <div className="flex items-center justify-center gap-2">
                <h1 className={`${item.textColor} font-oswald text-3xl `}>
                  {item.title}
                </h1>
                <FaArrowRight className={`${item.textColor} text-xl `} />
              </div>

              <div className="">
                {" "}
                {item.points.map((point) => (
                  <div className="flex items-center justify-start ">
                    <TiTick className={`${item.textColor} mr-2`} />
                    <h1 className={`${item.textColor}`}>{point}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
