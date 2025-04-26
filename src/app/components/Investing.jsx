import Link from "next/link";
import investing from "../asset/investing.webp";
import Image from "next/image";
import { investingInformation } from "../constants/page";
const Investing = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 py-8">
      {/* Top Part */}
      <div className="flex items-center justify-center lg:justify-around flex-col lg:flex-row">
        {/* Investing Information */}
        <div className="flex items-center lg:items-start  justify-center flex-col w-full lg:pl-16 gap-6">
          <h1 className="text-customBlack text-4xl lg:text-7xl font-oswald w-[55%] lg:w-full text-center lg:text-start tracking-tight">
            Your money&apos;s worth more
          </h1>

          <p className="w-[90%] lg:w-full text-center lg:text-start text-customBlack/85 font-besley text-lg">
            Get the most out of your money with smart investing products and
            personalized advice to build long-term wealth.
          </p>
          <Link
            href="/"
            className="bg-customBlack text-white px-8 py-4 rounded-3xl font-pt"
          >
            Get Started
          </Link>
        </div>
        {/* Image */}
        <div className="w-full">
          <Image
            src={investing}
            alt="investing"
            className="object-cover w-full"
          />
        </div>
      </div>

      {/* Lists */}
      <div className="flex items-center lg:items-stretch justify-center gap-4 lg:gap-16 flex-col lg:flex-row px-4 w-full lg:px-16">
        {investingInformation.map((item) => (
          <div
            className="flex gap-3 flex-col py-5 w-full lg:w-1/3   border-b lg:border-t lg:border-b-0 border-customBlack"
            key={item.id}
          >
            <h1 className="font-oswald text-2xl lg:text-3xl text-center lg:text-start text-customBlack">
              {item.title}
            </h1>
            <p className="font-pt text-sm lg:text-lg text-center lg:text-start text-customBlack/85">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investing;
