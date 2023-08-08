import Image from "next/image";
import React from "react";

const CrossChainTokenPayments = () => {
  return (
    <>
      <div className="relative lg:max-w-[864px] md:block hidden md:max-w-[633px] md:h-[110px] w-full mt-10 mx-auto lg:h-[140px]">
        <Image src={"/images/steps.png"} fill alt="Steps" />
      </div>
      <div className="relative lg:max-w-[864px] lg:block hidden md:max-w-[633px] md:h-[110px] w-full mt-10 mx-auto rounded-lg overflow-hidden lg:h-[294px]">
        <Image src={"/images/tokentable.png"} fill alt="Steps" />
      </div>
      <div className="relative lg:max-w-[864px] lg:hidden md:block hidden md:max-w-[633px] md:h-[248px] w-full mt-10 mx-auto lg:h-[244px]">
        <Image src={"/images/tokentable-md.png"} fill alt="Steps" />
      </div>
      <div className="relative md:hidden block  mt-10 mx-auto h-[248px] w-[230px]">
        <Image src={"/images/steps-mobile.png"} fill alt="Steps" />
      </div>
    </>
  );
};

export default CrossChainTokenPayments;
