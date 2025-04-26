"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="font-oswald text-5xl my-8 pl-10 tracking-wide ">WealthNest</div>

      {/* Main Container */}
      <div className="my-20 w-1/3 mx-auto flex items-center justify-center flex-col">
        {/* Go Back */}
        <div
          className="flex items-center justify-start gap-3 w-full "
          onClick={() => router.back()}
        >
          <FaArrowLeft />
          <span>Back</span>
        </div>
        {/* Information */}
        <h1 className="font-oswald my-10 text-left w-full text-3xl">
          Reset Your Information
        </h1>
        {/* Input */}
        <div className="border border-customBlack/25 flex items-start justify-center gap-4 flex-col p-8 rounded-xl mb-10">
          <p className="text-sm font-pt">
            Enter the email address associated with your account to reset your
            password.
          </p>
          <input
            type="text"
            placeholder="Enter your Email"
            className="border border-slate-400/40 rounded-lg pr-10 pl-5
        py-3 focus:border-blue-500 placeholder:text-sm"
          />
        </div>
        {/* Button */}
        <button className="bg-customBlack text-white px-10 py-2 rounded-xl font-pt">
          Continue
        </button>
      </div>
    </div>
  );
};

export default page;
