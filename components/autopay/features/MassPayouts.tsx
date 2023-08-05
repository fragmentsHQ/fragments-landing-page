import Image from "next/image";
import React from "react";

const MassPayouts = () => {
  return (
    <>
      <div className="relative lg:max-w-[800px] md:block hidden md:max-w-[449px] md:h-[179px] w-full mt-10 mx-auto lg:h-[319px]">
        <Image src={"/images/payouts.png"} fill alt="Steps" />
      </div>
      <div className="relative md:hidden block  mt-10 mx-auto h-[111px] w-[111px]">
        <Image src={"/images/masspayoutsmobile.png"} fill alt="Steps" />
      </div>
    </>
  );
};

export default MassPayouts;
