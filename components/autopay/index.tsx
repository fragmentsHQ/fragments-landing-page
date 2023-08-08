import Image from "next/image";
import React from "react";
import AutopayIcon from "../../public/images/autopay.png";
import ArrowBlack from "../../public/icons/arrow_black.svg";
import Features from "./features";
const AutoPay = () => {
  return (
    <div className=" border-[3px] border-[#d3d3d3] shadow-autopay p-4 container rounded-xl mx-auto bg-white w-full">
      <Project />
      <Features />
    </div>
  );
};

export default AutoPay;

const Project = () => {
  return (
    <div className="flex items-center my-6 lg:flex-row flex-col max-w-[550px] mx-auto md:max-w-full space-y-6 lg:space-y-0 justify-between">
      <div className="flex items-center justify-start space-x-6 lg:w-[80%] w-full">
        <div className="w-[58px] h-[70px] shrink-0 relative">
          <Image src={AutopayIcon} fill alt="Autopay" />
        </div>
        <div>
          <h1 className="font-bold text-[44px] md:text-[30px] bg-text-gradient uppercase bg-clip-text text-transparent leading-[47.88px]">
            Autopay
          </h1>
          <p className="text-base mt-1 md:block hidden leading-[20.16px] text-[#6D6D6D] ">
            Automate transactions across EVM chains, revolutionizing payments in
            the blockchain with effortless management, conditional payments, and
            unprecedented efficiency.
          </p>
        </div>
      </div>
      <p className="text-base mt-1 md:hidden block   leading-[20.16px] text-[#6D6D6D] ">
        Automate transactions across EVM chains, revolutionizing payments in the
        blockchain with effortless management, conditional payments, and
        unprecedented efficiency.
      </p>
      <div className="flex items-center  lg:w-[50%] w-full md:pl-16 md:min-w-[500px] space-x-4 lg:justify-end">
        <a
          href="https://fragments.gitbook.io/intro/autopay/what-is-autopay"
          target="_blank"
        >
          <button className="border border-1 border-black  md:flex hidden text-black md:mt-0  w-full justify-center font-semibold leading-[22.68px] text-[17px]  items-center max-w-[90%] mx-auto md:mx-0 md:max-w-fit rounded-[12px] px-6 py-[14px]">
            <span>Read docs</span>
            <Image src={ArrowBlack} alt="Read docs" width={25} height={25} />
          </button>
        </a>
        <a href="https://app.fragments.money" target="_blank">
          <button className="bg-text-gradient  w-full border border-transparent font-semibold leading-[22.68px] text-[18px] flex items-center justify-center md:mx-0  max-w-[90%] mx-auto md:max-w-fit rounded-[12px] px-8 py-[14px]">
            <span className="text-white bg-clip-text">Launch app</span>
          </button>
        </a>
      </div>
    </div>
  );
};
