import Image from "next/image";
import React from "react";
import lowfee from "@/app/asset/lowfee.png";
const LowFee = () => {
  return (
    <div className="pb-20">
      <h1 className="text-4xl text-customBlack w-[75%]">
        Low-fee investing, your way
      </h1>
      <hr className="my-10" />
      <div className="flex items-stretch justify-center gap-4 lg:gap-10 flex-col lg:flex-row w-full">
        {/* Information */}
        <div className="order-last flex items-start justify-center flex-col gap-10">
          <h6 className="uppercase text-customBlack font-besley text-sm">
            Managed Investing
          </h6>
          <h1 className="font-oswald text-customBlack text-4xl lg:text-6xl w-[65%]">
            Custom portfolios, designed by experts
          </h1>
          <p className="font-pt text-lg lg:w-[80%]">
            Get a minimum 2% interest, no Professionally managed and tailored to
            your goals, we'll diversify your investments to maximize returns and
            minimize risk.
          </p>
          <button className="font-oswald text-customBlack border border-black rounded-full px-6 py-4 hover:ring-2 hover:ring-customBlack transition-all duration-300 shadow-lg">
            Make me a portfolio
          </button>
        </div>
        {/* Image */}
        <div className="w-full">
          <Image src={lowfee} alt="cash" className="rounded-2xl order-first" />
        </div>
      </div>
    </div>
  );
};

export default LowFee;
