import React from "react";
import Image from "next/image";
import earning from "@/app/asset/earning.png";
const Earning = () => {
  return (
    <div className="pb-20">
      <h1 className="text-4xl text-customBlack ">
        Make more on your everyday earnings
      </h1>
      <hr className="my-10" />
      <div className="flex items-stretch justify-center gap-4 flex-col lg:flex-row w-full">
        <div className="flex items-start justify-center flex-col gap-10">
          <h6 className="uppercase text-customBlack font-besley text-sm">
            Cash
          </h6>
          <h1 className="font-oswald text-customBlack text-4xl lg:text-6xl w-[65%]">
            Earn high iterest and extra perks
          </h1>
          <p className="font-pt text-lg lg:w-[80%]">
            Get a minimum 2% interest, no monthly fees, and 1% back on your
            spending in stock, crypto, or cash, with Canada’s highest interest
            chequing account.
          </p>
          <button className="font-oswald text-customBlack border border-black rounded-full px-6 py-4 hover:ring-2 hover:ring-customBlack transition-all duration-300 shadow-lg">
            Start Earning
          </button>
        </div>
        <div className="w-full">
          <Image src={earning} alt="cash" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Earning;
