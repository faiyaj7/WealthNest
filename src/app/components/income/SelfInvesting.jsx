import Image from "next/image";
import React from "react";
import selfInvesting from "@/app/asset/selfinvesting.png";
const SelfInvesting = () => {
  return (
    <div className="flex items-stretch justify-center gap-4 flex-col lg:flex-row w-full pb-20">
      <div className="flex items-start justify-center gap-10 flex-col">
        <h6 className="uppercase text-customBlack font-besley text-sm">
          Self-directed Investing
        </h6>
        <h1 className="font-oswald text-customBlack text-4xl lg:text-6xl  w-[65%]">
          Take full control of your trades
        </h1>
        <p className="font-pt text-lg">
          Choose from thousands of commission-free stocks and ETFs, or buy,
          sell, and stake 70+ cryptocurrencies.
        </p>
        <button className="font-oswald text-customBlack border border-black rounded-full px-6 py-4 hover:ring-2 hover:ring-customBlack transition-all duration-300 shadow-lg">
          Start Trading
        </button>
      </div>
      <div className="w-full lg:w-[65%]">
        <Image src={selfInvesting} alt="cash" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default SelfInvesting;
