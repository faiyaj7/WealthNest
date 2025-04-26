import { meetingInformation } from "@/app/constants/page";
import React from "react";
import meeting from "@/app/asset/meeting.png";
import Image from "next/image";
const Meeting = () => {
  return (
    <div className="flex items-stretch justify-center gap-10 flex-col lg:flex-row">
      <div className="order-first lg:order-last flex items-start justify-center gap-7 flex-col">
        <h1 className="font-pt text-5xl w-[75%] text-customBlack">
          Meeting you where you&apos;re at
        </h1>
        <div className="flex items-start justify-center flex-col gap-4 py-4">
          {meetingInformation.map((item) => (
            <div className="">
              <h1 className="font-oswald text-xl text-customBlack">
                {item.title}
              </h1>
              <p className="font-pt text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[65%]">
        <Image src={meeting} alt="meeting" className="rounded-2xl order-last lg:order-first w-full" />
      </div>
    </div>
  );
};

export default Meeting;
