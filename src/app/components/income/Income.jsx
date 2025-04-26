import React from "react";
import Earning from "./Earning";
import LowFee from "./LowFee";
import SelfInvesting from "./SelfInvesting";
import Meeting from "./Meeting";

const Income = () => {
  return (
    <>
      <div className="px-5 lg:px-16 py-16">
        <Earning />
        <LowFee />
        <SelfInvesting />
        <Meeting />
      </div>
    </>
  );
};

export default Income;
