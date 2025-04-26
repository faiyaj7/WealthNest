"use client";
import React, { useState } from "react";
import Link from "next/link.js";
import Image from "next/image.js";
import pricing from "../../../asset/pricing2.webp";

const Login = () => {
  return (
    <div className="flex items-center justify-center lg:h-screen">
      {/* Image for Desktop Only */}
      <div className="hidden lg:block w-1/2 bg-customBlack/75 self-stretch relative">
        {/* Title  */}
        <h1 className="font-oswald text-5xl my-8 pl-10 tracking-wide text-customBlack/55 text-white">
          WealthNest
        </h1>
        {/* Image */}
        <div className="absolute top-[50%] -translate-y-[50%]">
          <Image src={pricing} alt="investing" className="w-full" />
        </div>
      </div>
      {/* Mobile and Left Part of Desktop */}
      <div className="border lg:border-0 border-customBlack/45 w-3/4 lg:w-1/2 mx-auto lg:mr-auto rounded-2xl shadow-xl self-stretch my-[10%] lg:my-0">
        {/* Main Container */}
        <div className="flex items-center justify-center flex-col gap-4 p-5">
          {/* Title */}
          <h1 className="text-3xl font-oswald my-4">Welcome Back</h1>
          {/* Email input */}
          <input
            type="text"
            placeholder="Enter email"
            className="border border-slate-400/30 rounded-lg pr-10 pl-5
        py-3 focus:border-blue-500 placeholder:text-sm"
          />

          {/* Password Input */}
          <input
            type="text"
            placeholder="Enter password"
            className="border border-slate-400/30 rounded-lg pr-10 pl-5
        py-3 focus:border-blue-500 placeholder:text-sm"
          />
          {/* Forgot Password */}
          <Link
            href={"/forgot-password"}
            className="underline text-sm text-left w-[35%] font-pt"
          >
            Forgot Password
          </Link>
          {/* Submit */}
          <Link
            href={"/"}
            className="bg-customBlack text-white px-10 py-2 rounded-xl font-pt hover:bg-blue-600 transition-all duration-300"
          >
            Log In
          </Link>
          {/* Login Button */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <h1>Don&apos;t have an account?</h1>
            <Link
              href="/signup"
              className="underline font-oswald text-sm tracking-wide"
            >
              Sign Up Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
