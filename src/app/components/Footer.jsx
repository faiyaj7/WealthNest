import React from "react";
import { footerMenu } from "../constants/page";

const Footer = () => {
  return (
    <footer className="px-4">
      {/* Subscribe */}
      <div className="flex flex-col gap-4 ">
        <h1 className="font-oswald text-3xl font-bold">TLDR🤑</h1>
        <p className="font-sans">
          Sign up for our weekly non-boring newsletter about money, markets, and
          more.
        </p>
        <div className="w-full flex items-center justify-around lg:justify-start gap-1">
          <input
            placeholder="Enter your email"
            className="placeholder:text-black placeholder:font-oswald border border-slate-200 rounded-2xl px-4 py-2"
          />
          <button
            type="submit"
            className="text-white bg-[#32302f] px-4 py-2 rounded-2xl font-oswald"
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs">
          By providing your email, you are consenting to receive communications
          from Wealthsimple Media Inc. Visit our Privacy Policy for more info,
          or contact us at privacy@wealthsimple.com or 80 Spadina Ave., Toronto,
          ON.
        </p>
      </div>

      {/* divider */}
      <hr className="my-10 mx-4" />

      {/* Links */}

      <div className="flex flex-wrap gap-4 items-start justify-start">
        {footerMenu.map((item) => (
          <div
            className="flex flex-col basis-1/12 grow min-w-[150px]"
            key={item.id}
          >
            <h1 className="font-oswald pb-4">{item.name}</h1>
            <div className="flex gap-3 flex-col mb-8">
              {item.offSpring.map((child) => (
                <h1 className="font-besley text-xs ">{child}</h1>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="py-4 text-slate-200" />

      <p className="font-besley text-xs ">
        &copy; 2016–2025, WealthNest Technologies Inc. All Rights Reserved. For
        further details see our Legal Disclosures. By using this website, you
        accept our Terms of Use and Privacy Policy.
      </p>
      <p className="font-besley text-xs pb-4">
        For information about filing a complaint please visit How to File a
        Complaint.
      </p>
    </footer>
  );
};

export default Footer;
